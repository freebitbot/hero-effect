import type ITypedEventEmitter from "@ulixee/commons/interfaces/ITypedEventEmitter";
import type IApiHandlers from "./IApiHandlers";
import type ICoreEventPayload from "./ICoreEventPayload";
import type ICoreRequestPayload from "./ICoreRequestPayload";
import type ICoreResponsePayload from "./ICoreResponsePayload";
import type ITransport from "./ITransport";

export default interface IConnectionToClient<
	IClientApiSpec extends IApiHandlers = IApiHandlers,
	IEventSpec = any,
> extends ITypedEventEmitter<IConnectionToClientEvents> {
	apiHandlers?: IClientApiSpec;
	transport: ITransport;
	disconnectPromise: Promise<void>;
	disconnect(error?: Error): Promise<void>;
	sendEvent<T extends keyof IEventSpec>(
		event: ICoreEventPayload<IEventSpec, T>,
	): void;
}

export interface IConnectionToClientEvents<
	IClientApiSpec extends IApiHandlers = IApiHandlers,
	TKeys extends keyof IClientApiSpec & string = keyof IClientApiSpec & string,
	TEventSpec = unknown,
> {
	"send-error": Error;
	disconnected: Error | null;
	request: { request: ICoreRequestPayload<IClientApiSpec, TKeys> };
	response: {
		request: ICoreRequestPayload<IClientApiSpec, TKeys>;
		response: ICoreResponsePayload<IClientApiSpec, TKeys>;
		metadata: {
			milliseconds: number;
			startTime: number;
			messageId: string;
		};
	};
	event: { event: ICoreEventPayload<TEventSpec> };
}
