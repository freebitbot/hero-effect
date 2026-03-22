import type { ITextTrackList } from "../../base/interfaces/official";
import {
	type ITextTrackListProperties,
	TextTrackListGenerator,
} from "../../base/official-klasses/TextTrackList";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ITextTrackList,
	ITextTrackListProperties
>();
const TextTrackListBaseClass = TextTrackListGenerator();

export default class TextTrackList
	extends TextTrackListBaseClass
	implements ITextTrackList {}
