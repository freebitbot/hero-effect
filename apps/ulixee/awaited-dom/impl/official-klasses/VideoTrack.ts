import type { IVideoTrack } from "../../base/interfaces/official";
import {
	type IVideoTrackProperties,
	VideoTrackGenerator,
} from "../../base/official-klasses/VideoTrack";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IVideoTrack,
	IVideoTrackProperties
>();
const VideoTrackBaseClass = VideoTrackGenerator();

export default class VideoTrack
	extends VideoTrackBaseClass
	implements IVideoTrack {}
