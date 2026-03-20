import type { Http2Session } from "node:http2";
import type { IEventSubscriber } from "@ulixee/commons/interfaces/IRegisteredEventListener";
import { bindFunctions } from "@ulixee/commons/lib/utils";

export default class Http2SessionBinding {
	constructor(
		readonly clientSession: Http2Session,
		readonly serverSession: Http2Session,
		readonly events: IEventSubscriber,
		_logData: any,
	) {
		bindFunctions(this);
		this.bind();
	}

	private bind(): void {
		const clientSession = this.clientSession;
		const serverSession = this.serverSession;

		if (clientSession) this.events.on(clientSession, "ping", this.pingServer);

		this.events.on(serverSession, "error", this.onServerError);
		this.events.on(serverSession, "close", this.onServerClose);
		this.events.on(serverSession, "goaway", this.onServerGoaway);

		this.events.on(serverSession, "remoteSettings", (remoteSettings) => {
			console.log("[Http2Client.remoteSettings]", { remoteSettings });
		});

		this.events.on(serverSession, "frameError", (frameType, errorCode) => {
			console.warn("[Http2Client.frameError]", { frameType, errorCode });
		});

		this.events.on(serverSession, "altsvc", (alt, altOrigin) => {
			console.log("[Http2.altsvc]", { altOrigin, alt });
		});

		this.events.on(serverSession, "origin", (origins) => {
			console.log("[Http2.origin]", { origins });
		});
	}

	private pingServer(bytes: Buffer): void {
		if (this.serverSession.destroyed) return;
		this.serverSession.ping(bytes, () => null);
	}

	private onServerClose(): void {
		console.info("[Http2Client.close]");
		if (!this.clientSession || this.clientSession.destroyed) return;
		this.clientSession.close();
	}

	private onServerError(error: Error): void {
		console.warn("[Http2Client.error]", { error });
		if (!this.clientSession || this.clientSession.destroyed) return;
		this.clientSession.destroy(error);
	}

	private onServerGoaway(
		code: number,
		lastStreamID?: number,
		opaqueData?: NodeJS.ArrayBufferView,
	): void {
		console.log("[Http2.goaway]", {
			code,
			lastStreamID,
			opaqueData: opaqueData
				? Buffer.from(opaqueData.buffer).toString()
				: undefined,
		});
		if (!this.clientSession || this.clientSession.destroyed) return;
		this.clientSession.goaway(code);
	}
}
