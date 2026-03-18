import type IBaseProfile from "@double-agent/collect/interfaces/IBaseProfile";
import type IClientHello from "@double-agent/tls-server/interfaces/IClientHello";

type IProfile = IBaseProfile<IProfileData>;

export default IProfile;

export interface IProfileData {
	clientHello: IClientHello;
}
