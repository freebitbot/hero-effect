import type { IVideoPlaybackQuality } from "../../base/interfaces/official";
import {
	type IVideoPlaybackQualityProperties,
	VideoPlaybackQualityGenerator,
} from "../../base/official-klasses/VideoPlaybackQuality";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IVideoPlaybackQuality,
	IVideoPlaybackQualityProperties
>();
const VideoPlaybackQualityBaseClass = VideoPlaybackQualityGenerator();

export default class VideoPlaybackQuality
	extends VideoPlaybackQualityBaseClass
	implements IVideoPlaybackQuality {}
