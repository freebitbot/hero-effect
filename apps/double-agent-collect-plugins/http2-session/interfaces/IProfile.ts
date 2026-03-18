import type IBaseProfile from "@double-agent/collect/interfaces/IBaseProfile";
import type { IHttp2SessionActivity } from "@double-agent/collect/servers/Http2Server";

type IProfile = IBaseProfile<IProfileData>;

export default IProfile;

export type IProfileData = {
	sessions: {
		id: string;
		activity: IHttp2SessionActivity[];
		origins?: string[];
	}[];
};
