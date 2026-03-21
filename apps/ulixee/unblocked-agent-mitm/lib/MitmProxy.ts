import type { IncomingMessage } from "node:http";
import * as http from "node:http";
import * as http2 from "node:http2";
import * as https from "node:https";
import type { Socket } from "node:net";
import * as net from "node:net";
import * as tls from "node:tls";
import { CanceledPromiseError } from "@ulixee/commons/interfaces/IPendingWaitEvent";
import EventSubscriber from "@ulixee/commons/lib/EventSubscriber";
import { createPromise } from "@ulixee/commons/lib/utils";
import CertificateGenerator, {
	type ICertificateStore,
} from "@ulixee/unblocked-agent-mitm-socket/lib/CertificateGenerator";
import env from "../env";
import HttpRequestHandler from "../handlers/HttpRequestHandler";
import HttpUpgradeHandler from "../handlers/HttpUpgradeHandler";
import RequestSession from "../handlers/RequestSession";
import type ICertificateGenerator from "../interfaces/ICertificateGenerator";
import type IMitmProxyOptions from "../interfaces/IMitmProxyOptions";
import TlsCertificateManager from "./TlsCertificateManager";

const emptyResponse = `<html lang="en"><body></body></html>`;

/**
 * This module is heavily inspired by 'https://github.com/joeferner/node-http-mitm-proxy'
 */
export default class MitmProxy {
	public get port(): number {
		return this.httpPort;
	}

	public get httpPort(): number | undefined {
		return (this.httpServer.address() as net.AddressInfo)?.port;
	}

	private http2Sessions = new Set<http2.ServerHttp2Session>();
	// used if this is a one-off proxy
	private isolatedProxyForSessionId?: string;

	// shared session params
	private sessionById: { [sessionId: string]: RequestSession } = {};
	private sessionIdByPort: { [port: number]: string } = {};
	private portsBySessionId: { [sessionId: number]: Set<number> } = {};

	private readonly options: IMitmProxyOptions;
	private readonly httpServer: http.Server;
	private readonly httpsServer: https.Server;

	private readonly http2Server: http2.Http2SecureServer;
	private readonly serverConnects = new Set<net.Socket>();
	private readonly events = new EventSubscriber();

	private isClosing = false;

	private readonly certificateGenerator: ICertificateGenerator;
	private readonly tlsCertificateManager: TlsCertificateManager;
	private secureContexts: {
		[hostname: string]: Promise<void>;
	} = {};

	// Bun HTTPS server (used when running in Bun)
	private bunHttpsServer: ReturnType<typeof Bun.serve> | null = null;
	private bunHttp2Server: ReturnType<typeof Bun.serve> | null = null;
	private isBunRuntime = typeof Bun !== "undefined";

	constructor(options: IMitmProxyOptions) {
		this.options = options;
		this.certificateGenerator = options.certificateGenerator;
		this.tlsCertificateManager = new TlsCertificateManager(
			this.certificateGenerator,
		);

		this.httpServer = http.createServer({ insecureHTTPParser: true });
		this.events.on(this.httpServer, "connect", this.onHttpConnect.bind(this));
		this.events.on(
			this.httpServer,
			"clientError",
			this.onClientError.bind(this, false),
		);
		this.events.on(
			this.httpServer,
			"request",
			this.onHttpRequest.bind(this, false),
		);
		this.events.on(
			this.httpServer,
			"upgrade",
			this.onHttpUpgrade.bind(this, false),
		);

		if (this.isBunRuntime) {
			// In Bun, we create placeholder servers that will be replaced with Bun.serve()
			// during listen(). We still need these for type compatibility.
			this.httpsServer = https.createServer({ insecureHTTPParser: true });
			this.http2Server = http2.createSecureServer({ allowHTTP1: true });
		} else {
			// Node.js: use the traditional approach
			this.httpsServer = https.createServer({ insecureHTTPParser: true });
			this.events.on(this.httpsServer, "connect", this.onHttpConnect.bind(this));
			this.events.on(
				this.httpsServer,
				"request",
				this.onHttpRequest.bind(this, true),
			);
			this.events.on(
				this.httpsServer,
				"upgrade",
				this.onHttpUpgrade.bind(this, true),
			);

			this.http2Server = http2.createSecureServer({ allowHTTP1: true });
			this.events.on(this.http2Server, "session", this.onHttp2Session.bind(this));
			this.events.on(
				this.http2Server,
				"sessionError",
				this.onClientError.bind(this, true),
			);
			this.events.on(
				this.http2Server,
				"request",
				this.onHttpRequest.bind(this, true),
			);
			this.events.on(
				this.http2Server,
				"upgrade",
				this.onHttpUpgrade.bind(this, true),
			);
		}
	}

	public close(): void {
		if (this.isClosing) return;
		this.isClosing = true;

		console.info("[MitmProxy.Closing]", {
			sessionId: this.isolatedProxyForSessionId,
		});
		const errors: Error[] = [];

		for (const session of Object.values(this.sessionById)) {
			try {
				session.close();
			} catch (err) {
				errors.push(err);
			}
		}
		this.sessionById = {};

		for (const connect of this.serverConnects) {
			destroyConnection(connect);
		}
		this.secureContexts = {};
		this.tlsCertificateManager.clear();
		try {
			this.httpServer.unref().close();
		} catch (err) {
			errors.push(err);
		}

		for (const session of this.http2Sessions) {
			try {
				session.socket?.unref()?.destroy();
				session.destroy();
			} catch (err) {
				errors.push(err);
			}
		}

		try {
			this.http2Sessions.clear();
			this.http2Server.unref().close();
		} catch (err) {
			errors.push(err);
		}
		try {
			this.httpsServer.unref().close();
		} catch (err) {
			errors.push(err);
		}

		// Close Bun servers
		if (this.bunHttpsServer) {
			try {
				this.bunHttpsServer.stop();
			} catch (err) {
				errors.push(err);
			}
		}
		if (this.bunHttp2Server) {
			try {
				this.bunHttp2Server.stop();
			} catch (err) {
				errors.push(err);
			}
		}

		this.events.close("error");

		console.info("[MitmProxy.Closed]", {
			sessionId: this.isolatedProxyForSessionId,
			closeErrors: errors,
		});
	}

	/////// RequestSessions //////////////////////////////////////////////////////////////////////////////////////////////

	public registerSession(session: RequestSession, isDefault: boolean): void {
		const { sessionId } = session;
		this.sessionById[sessionId] = session;
		if (isDefault) {
			this.isolatedProxyForSessionId = sessionId;

			this.events.once(session, "close", () => this.close());
		} else {
			// if not default, need to clear out entries
			this.events.once(session, "close", () =>
				setTimeout(() => this.removeSessionTracking(sessionId), 1e3).unref(),
			);
		}
	}

	public removeSessionTracking(sessionId: string): void {
		const ports = this.portsBySessionId[sessionId] || [];
		for (const port of ports) {
			delete this.sessionIdByPort[port];
		}
		delete this.portsBySessionId[sessionId];
		delete this.sessionById[sessionId];
	}

	protected async listen(): Promise<this> {
		await startServer(this.httpServer, this.options.port ?? 0);

		if (this.isBunRuntime) {
			await this.startBunServers();
		} else {
			await startServer(this.httpsServer);
			await startServer(this.http2Server);
		}

		// don't listen for errors until server already started
		this.events.on(
			this.httpServer,
			"error",
			this.onGenericHttpError.bind(this, false),
		);
		if (!this.isBunRuntime) {
			this.events.on(
				this.httpsServer,
				"error",
				this.onGenericHttpError.bind(this, false),
			);
			this.events.on(
				this.http2Server,
				"error",
				this.onGenericHttpError.bind(this, true),
			);
		}

		return this;
	}

	/**
	 * Start Bun HTTPS and HTTP/2 servers with TLS support.
	 * Uses Bun.serve() with TLS array for SNI support.
	 */
	private async startBunServers(): Promise<void> {
		// Initialize with default certificate
		await this.tlsCertificateManager.initialize();
		const defaultTls = this.tlsCertificateManager.getDefault();

		if (!defaultTls) {
			throw new Error("Failed to initialize default TLS certificate");
		}

		// Create HTTPS server using Bun.serve()
		this.bunHttpsServer = Bun.serve({
			port: 0, // Random port
			fetch: this.handleBunHttpsRequest.bind(this),
			tls: [defaultTls],
		});

		// Create HTTP/2 server using Bun.serve()
		// Note: Bun's HTTP/2 support is built-in when client supports it
		this.bunHttp2Server = Bun.serve({
			port: 0, // Random port
			fetch: this.handleBunHttpsRequest.bind(this),
			tls: [defaultTls],
		});

		console.info("[MitmProxy.BunServersStarted]", {
			httpsPort: this.bunHttpsServer.port,
			http2Port: this.bunHttp2Server.port,
		});
	}

	/**
	 * Handle HTTPS requests from Bun.serve()
	 */
	private async handleBunHttpsRequest(
		req: Request,
		server: typeof Bun.serve extends (
			options: infer O,
		) => infer R ? (O extends { fetch: infer F } ? R : never) : never,
	): Promise<Response> {
		// Convert Bun Request to Node.js-like request for compatibility
		const sessionId = this.readSessionIdFromBunRequest(req);

		if (!sessionId) {
			return new Response("Proxy Authentication Required", { status: 407 });
		}

		const requestSession = this.sessionById[sessionId];
		if (requestSession?.isClosing) {
			return new Response("Session Closing", { status: 502 });
		}

		if (!requestSession) {
			console.warn("[MitmProxy.BunRequestWithoutSession]", {
				sessionId,
				url: req.url,
			});
			return new Response("Session Not Found", { status: 504 });
		}

		if (requestSession.bypassAllWithEmptyResponse) {
			return new Response(emptyResponse);
		}

		// For now, create a mock request object that HttpRequestHandler can work with
		// This is a compatibility layer between Bun and Node.js APIs
		const mockRequest = this.createMockNodeRequest(req);

		// Create a mock response object
		const { mockResponse, responsePromise } = this.createMockNodeResponse();

		try {
			await HttpRequestHandler.onRequest({
				isSSL: true,
				requestSession,
				clientToProxyRequest: mockRequest,
				proxyToClientResponse: mockResponse,
			});
		} catch (error) {
			console.warn("[MitmProxy.BunRequestError]", {
				sessionId,
				url: req.url,
				error,
			});
			return new Response("Bad Request", { status: 400 });
		}

		return responsePromise;
	}

	/**
	 * Create a mock Node.js IncomingMessage from a Bun Request
	 */
	private createMockNodeRequest(req: Request): IncomingMessage {
		const url = new URL(req.url);
		const headers: Record<string, string | string[]> = {};

		req.headers.forEach((value, key) => {
			const existing = headers[key];
			if (existing) {
				if (Array.isArray(existing)) {
					existing.push(value);
				} else {
					headers[key] = [existing, value];
				}
			} else {
				headers[key] = value;
			}
		});

		// Create a minimal mock that satisfies HttpRequestHandler's needs
		const mock = {
			method: req.method,
			url: url.pathname + url.search,
			headers,
			httpVersion: "1.1",
			httpVersionMajor: 1,
			httpVersionMinor: 1,
			socket: {
				remotePort: 0,
				destroy: () => {},
			},
			body: req.body,
		} as unknown as IncomingMessage;

		return mock;
	}

	/**
	 * Create a mock Node.js ServerResponse that collects data for a Bun Response
	 */
	private createMockNodeResponse(): {
		mockResponse: http.ServerResponse;
		responsePromise: Promise<Response>;
	} {
		const chunks: Uint8Array[] = [];
		let headers: Record<string, string> = {};
		let statusCode = 200;
		let headersSent = false;
		let finished = false;

		const resolvePromise: {
			resolve: (response: Response) => void;
			reject: (error: Error) => void;
		} = {} as any;

		const responsePromise = new Promise<Response>((resolve, reject) => {
			resolvePromise.resolve = resolve;
			resolvePromise.reject = reject;
		});

		const mockResponse = {
			statusCode: 200,
			statusMessage: "OK",
			_headers: {} as Record<string, string>,
			headersSent: false,
			finished: false,

			writeHead(
				code: number,
				statusMessage?: string | Record<string, string>,
				headersObj?: Record<string, string>,
			) {
				statusCode = code;
				if (typeof statusMessage === "string") {
					// statusMessage is statusMessage
				} else if (statusMessage) {
					headers = { ...headers, ...statusMessage };
				}
				if (headersObj) {
					headers = { ...headers, ...headersObj };
				}
				headersSent = true;
				return this;
			},

			setHeader(name: string, value: string | number | string[]) {
				headers[name.toLowerCase()] = Array.isArray(value)
					? value.join(", ")
					: String(value);
				return this;
			},

			getHeader(name: string) {
				return headers[name.toLowerCase()];
			},

			removeHeader(name: string) {
				delete headers[name.toLowerCase()];
			},

			write(chunk: string | Buffer | Uint8Array) {
				if (typeof chunk === "string") {
					chunks.push(new TextEncoder().encode(chunk));
				} else {
					chunks.push(new Uint8Array(chunk));
				}
				return true;
			},

			end(data?: string | Buffer | Uint8Array, callback?: () => void) {
				if (data) {
					if (typeof data === "string") {
						chunks.push(new TextEncoder().encode(data));
					} else {
						chunks.push(new Uint8Array(data));
					}
				}
				finished = true;
				this.finished = true;

				const body = chunks.length > 0 ? Buffer.concat(chunks) : null;
				const response = new Response(body, {
					status: statusCode,
					headers,
				});

				resolvePromise.resolve(response);
				callback?.();
				return this;
			},

			destroy(error?: Error) {
				if (error) {
					resolvePromise.reject(error);
				} else {
					resolvePromise.resolve(new Response(null, { status: 500 }));
				}
			},

			on(event: string, callback: (...args: any[]) => void) {
				return this;
			},

			once(event: string, callback: (...args: any[]) => void) {
				return this;
			},

			emit(event: string, ...args: any[]) {
				return false;
			},

			socket: {
				destroy: () => {},
				end: () => {},
			},
		} as unknown as http.ServerResponse;

		return { mockResponse, responsePromise };
	}

	/**
	 * Read session ID from Bun Request
	 */
	private readSessionIdFromBunRequest(req: Request): string {
		if (this.isolatedProxyForSessionId) return this.isolatedProxyForSessionId;

		const authHeader = req.headers.get("proxy-authorization");
		if (!authHeader) {
			// Try to get from URL query params for Bun requests
			const url = new URL(req.url);
			const sessionIdFromQuery = url.searchParams.get("sessionId");
			if (sessionIdFromQuery) return sessionIdFromQuery;
			return "";
		}

		const [, sessionId] = Buffer.from(authHeader.split(" ")[1], "base64")
			.toString()
			.split(":");
		return sessionId;
	}

	/**
	 * Get the HTTPS port (works for both Node.js and Bun)
	 */
	public get httpsPort(): number | undefined {
		if (this.bunHttpsServer) {
			return this.bunHttpsServer.port;
		}
		return (this.httpsServer.address() as net.AddressInfo)?.port;
	}

	/**
	 * Get the HTTP/2 port (works for both Node.js and Bun)
	 */
	public get http2Port(): number | undefined {
		if (this.bunHttp2Server) {
			return this.bunHttp2Server.port;
		}
		return (this.http2Server.address() as net.AddressInfo)?.port;
	}

	private async onHttpRequest(
		isSSL: boolean,
		clientToProxyRequest: http.IncomingMessage | http2.Http2ServerRequest,
		proxyToClientResponse: http.ServerResponse | http2.Http2ServerResponse,
	): Promise<void> {
		const sessionId = this.readSessionId(
			clientToProxyRequest.headers,
			clientToProxyRequest.socket.remotePort,
		);
		if (!sessionId) {
			return RequestSession.sendNeedsAuth(proxyToClientResponse.socket);
		}

		const requestSession = this.sessionById[sessionId];
		if (requestSession?.isClosing) return;

		if (!requestSession) {
			console.warn("[MitmProxy.RequestWithoutSession]", {
				sessionId,
				isSSL,
				host:
					clientToProxyRequest.headers.host ??
					clientToProxyRequest.headers[":authority"],
				url: clientToProxyRequest.url,
			});
			proxyToClientResponse.writeHead(504);
			proxyToClientResponse.end();
			return;
		}

		if (requestSession.bypassAllWithEmptyResponse) {
			proxyToClientResponse.end(emptyResponse);
			return;
		}

		try {
			await HttpRequestHandler.onRequest({
				isSSL,
				requestSession,
				clientToProxyRequest,
				proxyToClientResponse,
			});
		} catch (error) {
			// this can only happen during processing of request
			console.warn("[MitmProxy.ErrorProcessingRequest]", {
				sessionId,
				isSSL,
				error,
				host:
					clientToProxyRequest.headers.host ??
					clientToProxyRequest.headers[":authority"],
				url: clientToProxyRequest.url,
			});
			try {
				proxyToClientResponse.writeHead(400);
				proxyToClientResponse.end("Bad request");
			} catch (e) {
				// don't double throw or log
			}
		}
	}

	private async onHttpUpgrade(
		isSSL: boolean,
		clientToProxyRequest: IncomingMessage,
		socket: Socket,
		head: Buffer,
	): Promise<void> {
		// socket resumes in HttpUpgradeHandler.upgradeResponseHandler
		socket.pause();
		const sessionId = this.readSessionId(
			clientToProxyRequest.headers,
			clientToProxyRequest.socket.remotePort,
		);
		if (!sessionId) {
			return RequestSession.sendNeedsAuth(socket);
		}
		const requestSession = this.sessionById[sessionId];
		if (requestSession?.isClosing) return;

		if (!requestSession) {
			console.warn("[MitmProxy.UpgradeRequestWithoutSession]", {
				sessionId,
				isSSL,
				host: clientToProxyRequest.headers.host,
				url: clientToProxyRequest.url,
			});
			socket.end("HTTP/1.1 504 Proxy Error\r\n\r\n");
			return;
		}

		try {
			await HttpUpgradeHandler.onUpgrade({
				isSSL,
				socket,
				head,
				requestSession,
				clientToProxyRequest,
			});
		} catch (error) {
			this.onClientError(false, error, socket);
		}
	}

	private async onHttpConnect(
		request: http.IncomingMessage,
		socket: net.Socket,
		head: Buffer,
	): Promise<void> {
		if (this.isClosing) return this.tryCloseConnectSocket(socket);

		const sessionId = this.readSessionId(
			request.headers,
			request.socket.remotePort,
		);
		if (!sessionId) {
			return RequestSession.sendNeedsAuth(socket);
		}
		this.serverConnects.add(socket);
		socket.on("error", (error) => {
			this.onConnectError(request.url, "ClientToProxy.ConnectError", error);
			this.serverConnects.delete(socket);
		});

		socket.write("HTTP/1.1 200 Connection established\r\n\r\n");
		// we need first byte of data to detect if request is SSL encrypted
		if (!head || head.length === 0) {
			head = await new Promise<Buffer>((resolve) =>
				socket.once("data", resolve),
			);
		}

		socket.pause();

		let proxyToProxyPort = this.httpPort;

		// for https we create a new connect back to the https server so we can have the proper cert and see the traffic
		if (MitmProxy.isTlsByte(head)) {
			proxyToProxyPort = this.httpsPort;
			// URL is in the form 'hostname:port'
			const [hostname, port] = request.url.split(":", 2);

			try {
				const [isHttp2] = await Promise.all([
					this.isHttp2(sessionId, hostname, port),
					this.addSecureContext(hostname),
				]);
				if (isHttp2) {
					proxyToProxyPort = this.http2Port;
				}
			} catch (error) {
				if (!(error instanceof CanceledPromiseError)) {
					this.onConnectError(
						request.url,
						"ClientToProxy.GenerateCertError",
						error,
					);
				}
				return this.tryCloseConnectSocket(socket);
			}
		}

		if (!proxyToProxyPort && this.isClosing) return;

		try {
			const connectedPromise = createPromise();
			const proxyConnection = net.connect(
				{ port: proxyToProxyPort, allowHalfOpen: false },
				connectedPromise.resolve,
			);
			this.serverConnects.add(proxyConnection);
			proxyConnection.on("error", (error) => {
				this.onConnectError(request.url, "ProxyToProxy.ConnectError", error);
				if (!socket.destroyed && socket.writable && socket.readable) {
					socket.destroy(error);
				}
			});

			proxyConnection.once("end", () =>
				this.serverConnects.delete(proxyConnection),
			);
			socket.once("end", () => this.serverConnects.delete(socket));

			proxyConnection.once("close", () => destroyConnection(socket));
			socket.once("close", () => destroyConnection(proxyConnection));

			await connectedPromise;
			this.registerProxySession(proxyConnection, sessionId);

			socket.setNoDelay(true);
			proxyConnection.setNoDelay(true);
			// create a tunnel back to the same proxy
			socket.pipe(proxyConnection).pipe(socket);
			if (head.length) socket.emit("data", head);
			socket.resume();
		} catch (error) {
			if (this.isClosing) return;
			if (!(error instanceof CanceledPromiseError)) {
				this.onConnectError(
					request.url,
					"ClientToProxy.HttpConnectError",
					error,
				);
			}
			this.tryCloseConnectSocket(socket);
		}
	}

	private onHttp2Session(session: http2.ServerHttp2Session): void {
		this.http2Sessions.add(session);
		this.events.once(session, "close", () =>
			this.http2Sessions.delete(session),
		);
	}

	private async isHttp2(
		sessionId: string,
		hostname: string,
		port: string,
	): Promise<boolean> {
		try {
			const requestSession = this.sessionById[sessionId];
			if (
				requestSession.bypassAllWithEmptyResponse ||
				(await requestSession.willInterceptRequest(
					new URL(`https://${hostname}:${port}`),
				)) ||
				(await requestSession.willInterceptRequest(
					new URL(`https://${hostname}`),
				))
			) {
				return false;
			}

			return await requestSession.requestAgent.isHostAlpnH2(hostname, port);
		} catch (error) {
			if (error instanceof CanceledPromiseError) {
				return false;
			}
			console.warn("[Connect.AlpnLookupError]", {
				hostname,
				error,
				sessionId,
			});
		}
		return false;
	}

	/////// ERROR HANDLING ///////////////////////////////////////////////////////

	private onGenericHttpError(isHttp2: boolean, error: Error): void {
		if (this.isClosing) {
			console.info(`[Mitm.Http${isHttp2 ? "2" : ""}ServerError]`, {
				sessionId: this.isolatedProxyForSessionId,
				error,
			});
		} else {
			console.error(`[Mitm.Http${isHttp2 ? "2" : ""}ServerError]`, {
				sessionId: this.isolatedProxyForSessionId,
				error,
			});
		}
	}

	private tryCloseConnectSocket(socket: net.Socket): void {
		try {
			// socket.end();
			this.serverConnects.delete(socket);
		} catch (err) {}
	}

	private onClientError(
		isHttp2: boolean,
		error: Error,
		socket: net.Socket,
	): void {
		if ((error as any).code === "ECONNRESET" || !socket.writable) {
			return;
		}
		const kind = isHttp2 ? "Http2.SessionError" : "Http.ClientError";
		console.error(`[Mitm.${kind}]`, {
			sessionId: this.isolatedProxyForSessionId,
			error,
			socketAddress: socket.address(),
		});

		try {
			socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
		} catch (e) {
			// just drown these
		}
	}

	private onConnectError(
		hostname: string,
		errorKind: string,
		error: Error,
	): void {
		const errorCodes = [(error as any).errno, (error as any).code];
		if (errorCodes.includes("ECONNRESET")) {
			console.info(`[Got ECONNRESET on Proxy Connect, ignoring.]`, {
				sessionId: this.isolatedProxyForSessionId,
				hostname,
			});
		} else if (errorCodes.includes("ECONNABORTED")) {
			console.info(`[Got ECONNABORTED on Proxy Connect, ignoring.]`, {
				sessionId: this.isolatedProxyForSessionId,
				hostname,
			});
		} else if (errorCodes.includes("ERR_STREAM_UNSHIFT_AFTER_END_EVENT")) {
			console.info(
				`[Got ERR_STREAM_UNSHIFT_AFTER_END_EVENT on Proxy Connect, ignoring.]`,
				{
					sessionId: this.isolatedProxyForSessionId,
					hostname,
					errorKind,
				},
			);
		} else if (errorCodes.includes("EPIPE")) {
			console.info(`[Got EPIPE on Proxy Connect, ignoring.]`, {
				sessionId: this.isolatedProxyForSessionId,
				hostname,
				errorKind,
			});
		} else {
			if (this.isClosing) {
				console.info("[MitmConnectError]", {
					sessionId: this.isolatedProxyForSessionId,
					errorKind,
					error,
					errorCodes,
					hostname,
				});
			} else {
				console.error("[MitmConnectError]", {
					sessionId: this.isolatedProxyForSessionId,
					errorKind,
					error,
					errorCodes,
					hostname,
				});
			}
		}
	}

	private async addSecureContext(hostname: string): Promise<void> {
		if (this.isClosing) return;
		if (hostname.includes(":")) {
			hostname = hostname.split(":").shift()!;
		}

		this.secureContexts[hostname] ??= (async () => {
			if (this.isBunRuntime) {
				// Bun: Generate certificate and reload server
				const tlsConfig = await this.tlsCertificateManager.getCertificate(hostname);
				this.reloadBunTlsServers();
			} else {
				// Node.js: Use addContext
				const cert = await this.certificateGenerator.getCertificate(hostname);
				if (!cert.cert) return;

				this.http2Server.addContext(hostname, cert);
				this.httpsServer.addContext(hostname, cert);
			}
		})();

		try {
			await this.secureContexts[hostname];
		} catch (error) {
			if (error instanceof CanceledPromiseError || this.isClosing) return;
			throw error;
		}
	}

	/**
	 * Reload Bun TLS servers with updated certificate list
	 */
	private reloadBunTlsServers(): void {
		if (!this.isBunRuntime) return;

		const tlsConfigs = this.tlsCertificateManager.getAllCached();

		if (this.bunHttpsServer) {
			this.bunHttpsServer.reload({
				fetch: this.handleBunHttpsRequest.bind(this),
				tls: tlsConfigs,
			});
		}

		if (this.bunHttp2Server) {
			this.bunHttp2Server.reload({
				fetch: this.handleBunHttpsRequest.bind(this),
				tls: tlsConfigs,
			});
		}
	}

	/////// SESSION ID MGMT //////////////////////////////////////////////////////////////////////////////////////////////

	private readSessionId(
		requestHeaders: { [key: string]: string | string[] | undefined },
		remotePort: number,
	): string {
		if (this.isolatedProxyForSessionId) return this.isolatedProxyForSessionId;

		const authHeader = requestHeaders["proxy-authorization"] as string;
		if (!authHeader) {
			return this.sessionIdByPort[remotePort];
		}

		const [, sessionId] = Buffer.from(authHeader.split(" ")[1], "base64")
			.toString()
			.split(":");
		return sessionId;
	}

	private registerProxySession(
		loopbackProxySocket: net.Socket,
		sessionId: string,
	): void {
		// local port is the side that originates from our http server
		this.portsBySessionId[sessionId] ??= new Set();
		this.portsBySessionId[sessionId].add(loopbackProxySocket.localPort);
		this.sessionIdByPort[loopbackProxySocket.localPort] = sessionId;
	}

	public static createCertificateGenerator(
		store?: ICertificateStore,
		sslCaDir?: string,
	): CertificateGenerator {
		sslCaDir ??= env.defaultStorageDirectory;

		return new CertificateGenerator({ storageDir: sslCaDir });
	}

	public static async start(
		certificateGenerator: ICertificateGenerator,
	): Promise<MitmProxy> {
		const proxy = new MitmProxy({ certificateGenerator });

		await proxy.listen();
		return proxy;
	}

	private static isTlsByte(buffer: Buffer): boolean {
		// check for clienthello byte
		return buffer[0] === 0x16;
	}
}

function destroyConnection(socket: net.Socket): void {
	try {
		socket.unref().destroy();
	} catch (e) {
		// nothing to do
	}
}

function startServer(
	server: http.Server | http2.Http2SecureServer,
	listenPort?: number,
): Promise<void> {
	return new Promise<void>((resolve, reject) => {
		try {
			server.once("error", reject);
			server.listen(listenPort, resolve);
		} catch (err) {
			reject(err);
		}
	});
}
