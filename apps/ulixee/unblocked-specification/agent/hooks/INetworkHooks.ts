import type * as http from "node:http";
import type * as http2 from "node:http2";
import type { URL } from "node:url";
import type IDnsSettings from "../net/IDnsSettings";
import type IHttp2ConnectSettings from "../net/IHttp2ConnectSettings";
import type IHttpResourceLoadDetails from "../net/IHttpResourceLoadDetails";
import type IHttpSocketAgent from "../net/IHttpSocketAgent";
import type IResourceType from "../net/IResourceType";
import type ITcpSettings from "../net/ITcpSettings";
import type ITlsSettings from "../net/ITlsSettings";

export default interface INetworkHooks {
	onDnsConfiguration?(settings: IDnsSettings): void;

	onTcpConfiguration?(settings: ITcpSettings): void;

	onTlsConfiguration?(settings: ITlsSettings): void;

	onHttpAgentInitialized?(agent: IHttpSocketAgent): Promise<any> | void;

	onHttp2SessionConnect?(
		request: IHttpResourceLoadDetails,
		settings: IHttp2ConnectSettings,
	): Promise<any> | void;

	shouldInterceptRequest?(
		url: URL,
		resourceTypeIfKnown?: IResourceType,
	): Promise<boolean> | boolean;

	handleInterceptedRequest?(
		url: URL,
		type: IResourceType,
		request: http.IncomingMessage | http2.Http2ServerRequest,
		response: http.ServerResponse | http2.Http2ServerResponse,
	): Promise<boolean> | boolean;

	beforeHttpRequest?(request: IHttpResourceLoadDetails): Promise<any> | void;
	beforeHttpRequestBody?(
		request: IHttpResourceLoadDetails,
	): Promise<any> | void;
	beforeHttpResponse?(resource: IHttpResourceLoadDetails): Promise<any> | void;
	beforeHttpResponseBody?(
		response: IHttpResourceLoadDetails,
	): Promise<any> | void;
	afterHttpResponse?(resource: IHttpResourceLoadDetails): Promise<any> | void;
	websiteHasFirstPartyInteraction?(url: URL): Promise<any> | void; // needed for implementing first-party cookies
}
