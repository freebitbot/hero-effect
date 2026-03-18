import addGlobalInstance from "@ulixee/commons/lib/addGlobalInstance";
import { ConnectionToCore, WsTransportToCore } from "@ulixee/net";
import type ITransport from "@ulixee/net/interfaces/ITransport";
import type {
	IChannelHoldApis,
	IChannelHoldEvents,
	IDatastoreApis,
} from "@ulixee/platform-specification/datastore";
import type IDatastoreEvents from "../interfaces/IDatastoreEvents";

interface IConnectionToCoreOptions {
	version?: string;
}

export default class ConnectionToDatastoreCore extends ConnectionToCore<
	IDatastoreApis & IChannelHoldApis,
	IDatastoreEvents & IChannelHoldEvents
> {
	public options: IConnectionToCoreOptions;

	constructor(transport: ITransport, options?: IConnectionToCoreOptions) {
		super(transport);
		this.options = options ?? {};
	}

	public static remote(host: string): ConnectionToDatastoreCore {
		const transport = new WsTransportToCore(`${host}/datastore`);
		return new ConnectionToDatastoreCore(transport);
	}
}

addGlobalInstance(ConnectionToDatastoreCore);
