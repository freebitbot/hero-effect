import type { IncomingMessage, ServerResponse } from "node:http";
import type { IBoundLog } from "@ulixee/commons/interfaces/ILog";
import Logger from "@ulixee/commons/lib/Logger";
import type IApiHandler from "../interfaces/IApiHandler";
import type { IAsyncFunc } from "../interfaces/IApiHandlers";
import type ICoreRequestPayload from "../interfaces/ICoreRequestPayload";
import type ITransport from "../interfaces/ITransport";
import ConnectionToClient from "./ConnectionToClient";
import HttpTransportToClient from "./HttpTransportToClient";

const { log } = Logger(module);

export default class ApiRegistry<IHandlerMetadata = any> {
	public apiHandlerMetadataFn: (
		apiRequest: ICoreRequestPayload<any, any>,
		logger: IBoundLog,
		remoteId: string,
	) => IHandlerMetadata;

	public handlersByCommand: { [command: string]: IAsyncFunc } = {};

	constructor(endpoints: IApiHandler[] = []) {
		this.register(...endpoints);
	}

	public hasHandlerForPath(path: string): boolean {
		return !!this.handlersByCommand[path.substring(1)];
	}

	public register(...endpoints: IApiHandler[]): void {
		for (const endpoint of endpoints) {
			this.handlersByCommand[endpoint.command] = endpoint.handler.bind(
				endpoint,
			) as any;
		}
	}

	public createConnection(
		transport: ITransport,
		handlerMetadata?: IHandlerMetadata,
	): ConnectionToClient<any, any> {
		const connection = new ConnectionToClient(
			transport,
			this.handlersByCommand,
		);
		connection.handlerMetadata = handlerMetadata;
		return connection;
	}

	public async handleHttpRoute(
		req: IncomingMessage,
		res: ServerResponse,
	): Promise<boolean> {
		const startTime = Date.now();

		const transport = new HttpTransportToClient(req, res);
		const apiRequest = await transport.readRequest();
		const { command, messageId } = apiRequest;
		const handler = this.handlersByCommand[command];
		if (!handler) return false;

		const logger = log.createChild(module, {
			remote: transport.remoteId,
			messageId,
			command,
		});

		let data: any;
		try {
			logger.info(`api/${apiRequest.command}`, {
				path: req.url,
				apiRequest,
			});

			let args = apiRequest.args;
			if (!Array.isArray(args)) args = [apiRequest.args];

			const handlerMetadata = this.apiHandlerMetadataFn
				? this.apiHandlerMetadataFn(apiRequest, logger, transport.remoteId)
				: { logger };
			data = await handler(...args, handlerMetadata);
		} catch (error) {
			logger.error(`api/${apiRequest.command}:ERROR`, {
				error,
			});
			data = error;
		}

		await transport.send({
			responseId: messageId,
			data,
		});

		logger.stats(`api/${apiRequest.command}:END`, {
			data,
			millis: Date.now() - startTime,
		});
		return true;
	}
}
