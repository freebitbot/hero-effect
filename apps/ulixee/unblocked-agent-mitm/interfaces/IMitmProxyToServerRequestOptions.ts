import type * as http from "node:http";

export default interface IMitmProxyToServerRequestOptions
	extends http.ClientRequestArgs {
	headers: { [name: string]: string };
}
