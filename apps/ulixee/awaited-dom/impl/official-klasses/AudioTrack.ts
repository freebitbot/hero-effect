import type { IAudioTrack } from "../../base/interfaces/official";
import {
	AudioTrackGenerator,
	type IAudioTrackProperties,
} from "../../base/official-klasses/AudioTrack";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IAudioTrack,
	IAudioTrackProperties
>();
const AudioTrackBaseClass = AudioTrackGenerator();

export default class AudioTrack
	extends AudioTrackBaseClass
	implements IAudioTrack {}
