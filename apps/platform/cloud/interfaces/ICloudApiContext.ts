import type ICloudConfiguration from "./ICloudConfiguration";

export default interface ICloudApiContext {
	cloudConfiguration: ICloudConfiguration;
	nodeAddress: URL;
	version: string;
}
