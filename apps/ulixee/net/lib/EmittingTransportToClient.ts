import type ITypedEventEmitter from "@ulixee/commons/interfaces/ITypedEventEmitter";
import addGlobalInstance from "@ulixee/commons/lib/addGlobalInstance";
import { TypedEventEmitter } from "@ulixee/commons/lib/eventUtils";
import "@ulixee/commons/lib/SourceMapSupport";
import type ITransport from "../interfaces/ITransport";
import type { ITransportEvents } from "../interfaces/ITransport";

let counter = 0;

type TEvents = ITransportEvents & {
	outbound: any;
};

export default class EmittingTransportToClient
	extends TypedEventEmitter<TEvents>
	implements ITransport, ITypedEventEmitter<TEvents>
{
	remoteId = String((counter += 1));
	isConnected = true;

	send(message: any): Promise<void> {
		this.emit("outbound", message);
		return Promise.resolve();
	}
}

addGlobalInstance(EmittingTransportToClient);
