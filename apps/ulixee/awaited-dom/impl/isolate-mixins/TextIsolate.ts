import type { ITextIsolate } from "../../base/interfaces/isolate";
import TextIsolateBase, {
	type ITextIsolateProperties,
} from "../../base/isolate-mixins/TextIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ITextIsolate,
	ITextIsolateProperties
>();

export default class TextIsolate
	extends TextIsolateBase
	implements ITextIsolate {}
