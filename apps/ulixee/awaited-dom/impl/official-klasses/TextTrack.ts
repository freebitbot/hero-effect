import type { ITextTrack } from "../../base/interfaces/official";
import {
	type ITextTrackProperties,
	TextTrackGenerator,
} from "../../base/official-klasses/TextTrack";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ITextTrack,
	ITextTrackProperties
>();
const TextTrackBaseClass = TextTrackGenerator();

export default class TextTrack
	extends TextTrackBaseClass
	implements ITextTrack {}
