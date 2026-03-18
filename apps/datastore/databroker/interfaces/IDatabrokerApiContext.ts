import type { IBoundLog } from "@ulixee/commons/interfaces/ILog";
import type DatastoreApiClients from "@ulixee/datastore/lib/DatastoreApiClients";
import type LocalchainWithSync from "@ulixee/datastore/payments/LocalchainWithSync";
import type DatabrokerDb from "../db";
import type DatastoreWhitelistDb from "../db/DatastoreWhitelistDb";
import type IDatabrokerCoreConfigureOptions from "./IDatabrokerCoreConfigureOptions";

export default interface IDatabrokerApiContext {
	logger: IBoundLog;
	configuration: IDatabrokerCoreConfigureOptions;
	localchain: LocalchainWithSync;
	db: DatabrokerDb;
	datastoreWhitelist: DatastoreWhitelistDb;
	datastoreApiClients: DatastoreApiClients;
}
