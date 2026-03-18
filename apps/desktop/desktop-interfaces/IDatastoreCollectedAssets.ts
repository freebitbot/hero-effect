import type IDataSnippet from "@ulixee/hero-interfaces/IDataSnippet";
import type IDetachedElement from "@ulixee/hero-interfaces/IDetachedElement";
import type IDetachedResource from "@ulixee/hero-interfaces/IDetachedResource";
import type ISourceCodeReference from "@ulixee/hero-interfaces/ISourceCodeReference";

export default interface IDatastoreCollectedAssetsResponse {
	detachedElements: (IDetachedElement & ISourceCodeReference)[];
	detachedResources: (IDetachedResource & ISourceCodeReference)[];
	snippets: (IDataSnippet & ISourceCodeReference)[];
}
