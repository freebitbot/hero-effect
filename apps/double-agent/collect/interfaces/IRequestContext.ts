import type { IncomingMessage, ServerResponse } from "node:http";
import type * as http2 from "node:http2";
import type { URL } from "node:url";
import type { DomainType } from "../lib/DomainUtils";
import type { IPluginPage } from "../lib/Plugin";
import type Session from "../lib/Session";
import type BaseServer from "../servers/BaseServer";
import type IRequestDetails from "./IRequestDetails";

export default interface IRequestContext {
	server: BaseServer;
	req: IncomingMessage | http2.Http2ServerRequest;
	res: ServerResponse | http2.Http2ServerResponse;
	url: URL;
	requestDetails: IRequestDetails;
	session: Session;
	page: IPluginPage;
	nextPageLink: string;
	buildUrl: (
		path: string,
		domainType?: keyof typeof DomainType,
		protocol?: string,
	) => string;
}
