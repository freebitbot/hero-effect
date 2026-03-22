import type {
	ITextTrackCue,
	ITextTrackCueList,
} from "../../base/interfaces/official";
import {
	type ITextTrackCueListProperties,
	TextTrackCueListGenerator,
} from "../../base/official-klasses/TextTrackCueList";
import StateMachine from "../../base/StateMachine";
import { createTextTrackCue } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ITextTrackCueList,
	ITextTrackCueListProperties
>();
const TextTrackCueListBaseClass = TextTrackCueListGenerator();

export default class TextTrackCueList
	extends TextTrackCueListBaseClass
	implements ITextTrackCueList
{
	public getCueById(id: string): ITextTrackCue {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createTextTrackCue(
			awaitedPath.addMethod(this, "getCueById", id),
			awaitedOptions,
		);
	}
}
