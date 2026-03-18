import type ISourceCodeLocation from "@ulixee/commons/interfaces/ISourceCodeLocation";
import type ICoreRequestPayload from "@ulixee/net/interfaces/ICoreRequestPayload";
import type ISessionMeta from "./ISessionMeta";

export default interface ICoreCommandRequestPayload
	extends ICoreRequestPayload<any, any> {
	meta?: ISessionMeta;
	callsite?: ISourceCodeLocation[];
	retryNumber?: number;
	activeFlowHandlerId?: number;
	flowCommandId?: number;
	recordCommands?: Omit<
		ICoreCommandRequestPayload,
		"meta" | "messageId" | "sendTime"
	>[];
}
