import type IncomingMessage from "@double-agent/tls-server/lib/IncomingMessage";
import type * as http from "http";
import type IRequestContext from "./IRequestContext";

export default interface IRequestTlsContext extends IRequestContext {
	req: IncomingMessage & http.IncomingMessage;
}
