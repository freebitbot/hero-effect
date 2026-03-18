import type IBaseProfile from "@double-agent/collect/interfaces/IBaseProfile";
import type ICodecSupport from "./ICodecSupport";
import type IWebRTCCodec from "./IWebRTCCodec";

type IProfile = IBaseProfile<IProfileData>;

export default IProfile;

export interface IProfileData {
	audioSupport: ICodecSupport;
	videoSupport: ICodecSupport;
	webRtcVideoCodecs: IWebRTCCodec[];
	webRtcAudioCodecs: IWebRTCCodec[];
}
