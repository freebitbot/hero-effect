import type { IBoundLog } from "@ulixee/commons/interfaces/ILog";
import type IDatastoreCoreConfigureOptions from "@ulixee/datastore-core/interfaces/IDatastoreCoreConfigureOptions";
import type NodeRegistry from "../lib/NodeRegistry";
import type NodeTracker from "../lib/NodeTracker";
import type ICloudConfiguration from "./ICloudConfiguration";

export default interface ICloudApiContext {
	logger: IBoundLog;
	nodeTracker: NodeTracker;
	nodeRegistry: NodeRegistry;
	cloudConfiguration: ICloudConfiguration;
	datastoreConfiguration: IDatastoreCoreConfigureOptions;
	nodeAddress: URL;
	hostedServicesAddress: URL;
	version: string;
}
