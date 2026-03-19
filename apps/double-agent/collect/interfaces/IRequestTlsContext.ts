import type * as http from "node:http";
import type IncomingMessage from "@double-agent/tls-server/lib/IncomingMessage";
import type IRequestContext from "./IRequestContext";

export default interface IRequestTlsContext extends IRequestContext {
	req: IncomingMessage & http.IncomingMessage;
}
