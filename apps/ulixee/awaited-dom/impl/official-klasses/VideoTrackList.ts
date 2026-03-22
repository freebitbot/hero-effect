import type {
	IVideoTrack,
	IVideoTrackList,
} from "../../base/interfaces/official";
import {
	type IVideoTrackListProperties,
	VideoTrackListGenerator,
} from "../../base/official-klasses/VideoTrackList";
import StateMachine from "../../base/StateMachine";
import { createVideoTrack } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IVideoTrackList,
	IVideoTrackListProperties
>();
const VideoTrackListBaseClass = VideoTrackListGenerator();

export default class VideoTrackList
	extends VideoTrackListBaseClass
	implements IVideoTrackList
{
	public getTrackById(id: string): IVideoTrack {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createVideoTrack(
			awaitedPath.addMethod(this, "getTrackById", id),
			awaitedOptions,
		);
	}
}
