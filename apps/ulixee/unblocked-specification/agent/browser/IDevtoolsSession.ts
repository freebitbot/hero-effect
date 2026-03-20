import type ITypedEventEmitter from "@ulixee/commons/interfaces/ITypedEventEmitter";
import type Protocol from "devtools-protocol";
import type { ProtocolMapping } from "devtools-protocol/types/protocol-mapping";

export declare type DevtoolsEvents = {
	[Key in keyof ProtocolMapping.Events]: ProtocolMapping.Events[Key][0];
} & { disconnected: void };

type FilterFlags<Base, Condition> = {
	[Key in keyof Base]: Base[Key] extends Condition ? Key : never;
};

type FilterOutFlags<Base, Condition> = {
	[Key in keyof Base]: Base[Key] extends Condition ? never : Key;
};
type DevtoolsCommandParams = {
	[Key in keyof ProtocolMapping.Commands]: ProtocolMapping.Commands[Key]["paramsType"][0];
};

type OptionalParamsCommands = keyof FilterFlags<
	DevtoolsCommandParams,
	void | never
>;
type RequiredParamsCommands = keyof FilterOutFlags<
	DevtoolsCommandParams,
	void | never
>;

export default interface IDevtoolsSession
	extends Omit<ITypedEventEmitter<DevtoolsEvents>, "waitOn"> {
	id: string;
	disposeRemoteObject(object: Protocol.Runtime.RemoteObject): void;

	send<T extends RequiredParamsCommands>(
		method: T,
		params: DevtoolsCommandParams[T],
		sendInitiator?: object,
	): Promise<ProtocolMapping.Commands[T]["returnType"]>;
	send<T extends OptionalParamsCommands>(
		method: T,
		params?: DevtoolsCommandParams[T],
		sendInitiator?: object,
	): Promise<ProtocolMapping.Commands[T]["returnType"]>;

	onMessage(object: IDevtoolsResponseMessage & IDevtoolsEventMessage): void;
}

export type { Protocol };

export interface IDevtoolsResponseMessage {
	sessionId: string;
	id: number;
	error?: { message: string; data: any };
	result?: any;
	timestamp: Date;
}

export interface IDevtoolsEventMessage {
	sessionId: string;
	method: string;
	params: any;
	timestamp: Date;
}
