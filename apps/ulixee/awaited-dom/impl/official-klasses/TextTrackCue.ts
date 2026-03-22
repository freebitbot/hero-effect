import type { ITextTrack, ITextTrackCue } from "../../base/interfaces/official";
import {
	type ITextTrackCueProperties,
	TextTrackCueGenerator,
} from "../../base/official-klasses/TextTrackCue";
import StateMachine from "../../base/StateMachine";
import { createTextTrack } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ITextTrackCue,
	ITextTrackCueProperties
>();
const TextTrackCueBaseClass = TextTrackCueGenerator();

export default class TextTrackCue
	extends TextTrackCueBaseClass
	implements ITextTrackCue
{
	public get track(): ITextTrack {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createTextTrack(
			awaitedPath.addProperty(this, "track"),
			awaitedOptions,
		);
	}
}
