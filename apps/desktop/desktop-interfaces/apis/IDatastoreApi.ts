import type IDatastoreOutputEvent from "../events/IDatastoreOutputEvent";
import type IDatastoreCollectedAssets from "../IDatastoreCollectedAssets";

export default interface IDatastoreApi {
	getOutput(): IDatastoreOutputEvent;
	getCollectedAssets(): Promise<IDatastoreCollectedAssets>;
	rerunExtractor(): Promise<{
		success: boolean;
		error?: Error;
	}>;
}
