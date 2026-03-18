import type IBaseProfile from "@double-agent/collect/interfaces/IBaseProfile";
import type IHeaderDataPage from "@double-agent/collect/interfaces/IHeaderDataPage";

type IProfile = IBaseProfile<IProfileData>;

export default IProfile;

export type IProfileData = {
	testedHeaders: string[];
	headers: IHeaderDataPage[];
	jsHighEntropyHints: object;
};
