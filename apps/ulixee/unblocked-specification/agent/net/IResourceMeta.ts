import type IResourceRequest from "./IResourceRequest";
import type IResourceResponse from "./IResourceResponse";
import type IResourceType from "./IResourceType";

export default interface IResourceMeta {
	id: number;
	tabId: number;
	frameId: number;
	url: string;
	request: IResourceRequest;
	response?: IResourceResponse;
	type: IResourceType;
	documentUrl: string;
	isRedirect?: boolean;
	receivedAtCommandId?: number;
	seenAtCommandId?: number;
}
