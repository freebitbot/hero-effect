import type {
	IAudioTrack,
	IAudioTrackList,
} from "../../base/interfaces/official";
import {
	AudioTrackListGenerator,
	type IAudioTrackListProperties,
} from "../../base/official-klasses/AudioTrackList";
import StateMachine from "../../base/StateMachine";
import { createAudioTrack } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IAudioTrackList,
	IAudioTrackListProperties
>();
const AudioTrackListBaseClass = AudioTrackListGenerator();

export default class AudioTrackList
	extends AudioTrackListBaseClass
	implements IAudioTrackList
{
	public getTrackById(id: string): IAudioTrack {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createAudioTrack(
			awaitedPath.addMethod(this, "getTrackById", id),
			awaitedOptions,
		);
	}
}
