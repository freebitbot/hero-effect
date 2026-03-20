import WebSocket = require("ws");

import type { IncomingMessage, ServerResponse } from "node:http";
import { toUrl } from "@ulixee/commons/lib/utils";
import type ICoreConfigureOptions from "@ulixee/hero-interfaces/ICoreConfigureOptions";
import type IConnectionToClient from "@ulixee/net/interfaces/IConnectionToClient";
import type ITransport from "@ulixee/net/interfaces/ITransport";
import WsTransportToClient from "@ulixee/net/lib/WsTransportToClient";
import type ICloudApiContext from "../interfaces/ICloudApiContext";
import type CloudNode from "./CloudNode";
import type { IHttpHandleFn } from "./RoutableServer";

export default class CoreRouter {
	// @deprecated - use CloudNode.heroConfiguration
	public set heroConfiguration(value: ICoreConfigureOptions) {
		this.cloudNode.heroConfiguration = value;
	}

	private nodeAddress!: URL;
	private isClosing!: Promise<void>;
	private readonly connections = new Set<IConnectionToClient<any, any>>();

	private wsConnectionByType = {
		hero: (transport: ITransport) =>
			this.cloudNode.heroCore.addConnection(transport),
	} as const;

	private httpRoutersByType: {
		[key: string]: IHttpHandleFn;
	} = {};

	constructor(private cloudNode: CloudNode) {}

	public async register(): Promise<void> {
		const cloudNodeAddress = await this.cloudNode.address;

		/// PUBLIC APIS /////////////
		this.cloudNode.publicServer.addWsRoute(
			"/hero",
			this.handleSocketRequest.bind(this, "hero"),
		);
		this.cloudNode.publicServer.addHttpRoute(
			"/server-details",
			"GET",
			this.handleHttpServerDetails.bind(this),
		);
		this.nodeAddress = toUrl(cloudNodeAddress);

		// last option
		this.cloudNode.publicServer.addHttpRoute(
			"/",
			"GET",
			this.handleHome.bind(this),
		);
	}

	public async close(): Promise<void> {
		this.isClosing ??= Promise.allSettled(
			[...this.connections].map((x) => x.disconnect()),
		).then(() => {});
		return this.isClosing;
	}

	private addHttpRoute(
		route: string | RegExp,
		method: "GET" | "OPTIONS" | "POST" | "UPDATE" | "DELETE",
		callbackFn: IHttpHandleFn,
	): void {
		const key = `${method}_${route.toString()}`;
		this.httpRoutersByType[key] = callbackFn;
		this.cloudNode.publicServer.addHttpRoute(
			route,
			method,
			this.handleHttpRequest.bind(this, key),
		);
	}

	private getApiContext(): ICloudApiContext {
		return {
			cloudConfiguration: this.cloudNode.cloudConfiguration,
			nodeAddress: this.nodeAddress,
			version: this.cloudNode.version,
		};
	}

	private handleHome(_req: IncomingMessage, res: ServerResponse): void {
		res.end(`Ulixee Cloud v${this.cloudNode.version}`);
	}

	private async handleSocketRequest(
		connectionType: keyof CoreRouter["wsConnectionByType"],
		ws: WebSocket,
		req: IncomingMessage,
	): Promise<void> {
		const transport = new WsTransportToClient(ws, req);
		const connection = await (this.wsConnectionByType[connectionType] as any)(
			transport,
			req,
		);
		if (!connection) {
			throw new Error(
				`Unknown connection protocol attempted "${connectionType}"`,
			);
		}
		this.connections.add(connection);
		connection.once("disconnected", () => this.connections.delete(connection));
	}

	private async handleHttpRequest(
		connectionType: keyof CoreRouter["httpRoutersByType"],
		req: IncomingMessage,
		res: ServerResponse,
		params: string[],
	): Promise<void | boolean> {
		const handler = this.httpRoutersByType[connectionType];
		if (!handler) {
			throw new Error(`No HTTP handler for ${connectionType}`);
		}
		return await handler(req, res, params);
	}

	private handleHttpServerDetails(
		_: IncomingMessage,
		res: ServerResponse,
	): void {
		res.setHeader("Content-Type", "application/json");
		res.end(
			JSON.stringify({
				ipAddress: this.nodeAddress.hostname,
				port: this.nodeAddress.port,
			}),
		);
	}
}
