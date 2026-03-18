import type { IBoundLog } from "@ulixee/commons/interfaces/ILog";
import type IDatastoreHostLookup from "@ulixee/datastore/interfaces/IDatastoreHostLookup";
import type IExtractorPluginCore from "@ulixee/datastore/interfaces/IExtractorPluginCore";
import type IPaymentService from "@ulixee/datastore/interfaces/IPaymentService";
import type DatastoreApiClients from "@ulixee/datastore/lib/DatastoreApiClients";
import type IArgonPaymentProcessor from "@ulixee/datastore-core/interfaces/IArgonPaymentProcessor";
import type Identity from "@ulixee/platform-utils/lib/Identity";
import type DatastoreRegistry from "../lib/DatastoreRegistry";
import type DatastoreVm from "../lib/DatastoreVm";
import type StatsTracker from "../lib/StatsTracker";
import type StorageEngineRegistry from "../lib/StorageEngineRegistry";
import type WorkTracker from "../lib/WorkTracker";
import type IDatastoreConnectionToClient from "./IDatastoreConnectionToClient";
import type IDatastoreCoreConfigureOptions from "./IDatastoreCoreConfigureOptions";

export default interface IDatastoreApiContext {
	logger: IBoundLog;
	datastoreRegistry: DatastoreRegistry;
	argonPaymentProcessor?: IArgonPaymentProcessor;
	upstreamDatastorePaymentService: IPaymentService;
	datastoreLookup: IDatastoreHostLookup;
	storageEngineRegistry?: StorageEngineRegistry;
	workTracker: WorkTracker;
	configuration: IDatastoreCoreConfigureOptions;
	pluginCoresByName: { [name: string]: IExtractorPluginCore<unknown> };
	connectionToClient?: IDatastoreConnectionToClient;
	cloudNodeAddress: URL;
	cloudNodeIdentity?: Identity;
	vm: DatastoreVm;
	datastoreApiClients: DatastoreApiClients;
	statsTracker: StatsTracker;
}
