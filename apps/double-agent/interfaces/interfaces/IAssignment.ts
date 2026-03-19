import type { IUserAgentMeta } from "@ulixee/real-user-agents";
import type ISessionPage from "./ISessionPage";
import type { IUserAgentToTestPickType } from "./IUserAgentToTest";

export enum AssignmentType {
	Individual = "Individual",
	OverTime = "OverTime",
}

export type IAssignmentType = keyof typeof AssignmentType;

export default interface IAssignment {
	id: string;
	num: number;
	type: IAssignmentType;
	userAgentId: string;
	userAgentString: string;
	browserMeta: IUserAgentMeta;
	pickType: IUserAgentToTestPickType;
	usagePercent: number;
	pagesByPlugin?: { [pluginId: string]: ISessionPage[] };
	sessionId?: string;
	dataDir?: string;
}
