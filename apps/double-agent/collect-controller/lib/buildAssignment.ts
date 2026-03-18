import type { IUserAgentToTestPickType } from "@double-agent/config/interfaces/IUserAgentToTest";
import RealUserAgents, { type IUserAgentMeta } from "@ulixee/real-user-agents";
import type IAssignment from "../interfaces/IAssignment";
import {
	AssignmentType,
	type IAssignmentType,
} from "../interfaces/IAssignment";

export default function buildAssignment(
	id: string,
	num: number,
	userAgentId: string,
	type: IAssignmentType = AssignmentType.Individual,
	userAgentString: string = null,
	pickType: IUserAgentToTestPickType = null,
	usagePercent: number = null,
): IAssignment {
	let browserMeta: IUserAgentMeta;

	try {
		// can't load browser meta for a regular user
		browserMeta = RealUserAgents.extractMetaFromUserAgentId(userAgentId);
		browserMeta.browserVersion.replace("-", ".");
		browserMeta.operatingSystemVersion.replace("-", ".");
	} catch (error) {}

	return {
		id,
		num,
		type,
		userAgentId,
		browserMeta,
		userAgentString,
		pickType,
		usagePercent,
	} as IAssignment;
}
