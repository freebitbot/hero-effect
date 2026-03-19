import type { IBoundLog } from "@ulixee/commons/interfaces/ILog";
import type ICloudConfiguration from "./ICloudConfiguration";

export default interface ICloudApiContext {
	logger: IBoundLog;
	cloudConfiguration: ICloudConfiguration;
	nodeAddress: URL;
	version: string;
}
