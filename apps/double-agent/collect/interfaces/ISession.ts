import type IAsset from "./IAsset";
import type IRequestDetails from "./IRequestDetails";
import type IUserIdentifiers from "./IUserIdentifier";

export default interface ISession {
	requests: IRequestDetails[];
	identifiers: IUserIdentifiers[];
	assetsNotLoaded: IAsset[];
	expectedAssets: (IAsset & { fromUrl?: string })[];
	pluginsRun: Set<string>;
	userAgentString: string;
	expectedUserAgentString: string;
	id: string;
}
