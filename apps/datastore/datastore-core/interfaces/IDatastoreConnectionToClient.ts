import type IDatastoreEvents from "@ulixee/datastore/interfaces/IDatastoreEvents";
import type ConnectionToClient from "@ulixee/net/lib/ConnectionToClient";
import type { IDatastoreApis } from "@ulixee/platform-specification/datastore";
import type IDatastoreApiContext from "./IDatastoreApiContext";

export default interface IDatastoreConnectionToClient
	extends ConnectionToClient<
		IDatastoreApis,
		IDatastoreEvents,
		IDatastoreApiContext
	> {}
