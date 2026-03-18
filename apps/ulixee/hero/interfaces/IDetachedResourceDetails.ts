import type IWebsocketMessage from "@ulixee/hero-interfaces/IWebsocketMessage";
import type IResourceMeta from "@ulixee/unblocked-specification/agent/net/IResourceMeta";

export default interface IDetachedResourceDetails
	extends Required<IResourceMeta>,
		IResponseBody {
	response: Required<IResourceMeta["response"]> & IResponseBody;
	messages?: IWebsocketMessage[];
}

interface IResponseBody {
	text: string;
	json: any;
}
