import type IHttpHeaders from "@ulixee/unblocked-specification/agent/net/IHttpHeaders";
import type IHttpResourceLoadDetails from "@ulixee/unblocked-specification/agent/net/IHttpResourceLoadDetails";
import type IResourceType from "@ulixee/unblocked-specification/agent/net/IResourceType";

export default interface IResourceOverview {
	id: number;
	tabId: number;
	frameId: number;
	url: string;
	documentUrl: string;
	type: IResourceType;
	postDataBytes: number;
	requestHeaders: IHttpHeaders;
	method: string;
	statusCode: number;
	responseHeaders: IHttpHeaders;
	responseBodyBytes: number;
	browserServedFromCache?: IHttpResourceLoadDetails["browserServedFromCache"];
	browserLoadFailure?: string;
	receivedAtCommandId: number;
	originalRequestHeaders: string;
	didMitmModifyHeaders: boolean;
}
