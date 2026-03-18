import type IApiHandlers from "./IApiHandlers";
import type { IApiSpec } from "./IApiHandlers";
import type UnixTime from "./IUnixTime";

export default interface ICoreRequestPayload<
	Handlers extends IApiHandlers,
	Api extends keyof Handlers,
> {
	command: Api;
	commandId?: number;
	messageId: string;
	startTime?: UnixTime;
	sendTime: UnixTime;
	args: IApiSpec<Handlers>[Api]["args"];
}
