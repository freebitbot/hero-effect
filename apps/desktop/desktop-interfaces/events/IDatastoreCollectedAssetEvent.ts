import type IDataSnippet from "@ulixee/hero-interfaces/IDataSnippet";
import type IDetachedElement from "@ulixee/hero-interfaces/IDetachedElement";
import type IDetachedResource from "@ulixee/hero-interfaces/IDetachedResource";
import type ISourceCodeReference from "@ulixee/hero-interfaces/ISourceCodeReference";

export default interface IDatastoreCollectedAssetEvent {
	detachedResource?: IDetachedResource & ISourceCodeReference;
	detachedElement?: IDetachedElement & ISourceCodeReference;
	snippet?: IDataSnippet & ISourceCodeReference;
}
