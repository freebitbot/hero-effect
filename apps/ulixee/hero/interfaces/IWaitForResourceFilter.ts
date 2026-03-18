import type IResourceType from "@ulixee/unblocked-specification/agent/net/IResourceType";
import type Resource from "../lib/Resource";

export default interface IWaitForResourceFilter {
	url?: string | RegExp;
	type?: IResourceType;
	filterFn?: (resource: Resource) => Promise<boolean> | boolean;
}
