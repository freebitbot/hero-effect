import type { IWallet } from "@ulixee/datastore/interfaces/IPaymentService";
import type IQueryLogEntry from "@ulixee/datastore/interfaces/IQueryLogEntry";
import type IDatastoreDeployLogEntry from "@ulixee/datastore-core/interfaces/IDatastoreDeployLogEntry";
import type IArgonFile from "@ulixee/platform-specification/types/IArgonFile";
import type { ICloudConnected } from "../apis/IDesktopApis";

export default interface IDesktopAppPrivateEvents {
	"Datastore.onDeployed": IDatastoreDeployLogEntry;
	"User.onQuery": IQueryLogEntry;
	"Cloud.onConnected": ICloudConnected;
	"Argon.opened": IArgonFile;
	"Wallet.updated": { wallet: IWallet };
}
