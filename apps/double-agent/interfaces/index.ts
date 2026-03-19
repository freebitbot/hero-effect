// Interfaces

export {
	AssignmentType,
	default as IAssignment,
	type IAssignmentType,
} from "./interfaces/IAssignment";
export { default as IBaseProfile } from "./interfaces/IBaseProfile";
export { default as ISessionPage } from "./interfaces/ISessionPage";
export {
	default as IUserAgentToTest,
	type IUserAgentToTestPickType,
	type IUserAgentToTestUsagePercent,
	UserAgentToTestPickType,
} from "./interfaces/IUserAgentToTest";
export {
	extractProfilePathsMap,
	type IProfilePath,
	type IProfilePathsMap,
	importProfile,
} from "./lib/ProfileUtils";
// Utilities
export {
	createUserAgentIdFromIds,
	createUserAgentIdFromString,
} from "./lib/userAgentIds";
