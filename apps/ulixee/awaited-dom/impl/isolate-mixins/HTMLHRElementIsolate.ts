import type { IHTMLHRElementIsolate } from "../../base/interfaces/isolate";
import HTMLHRElementIsolateBase, {
	type IHTMLHRElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLHRElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHRElementIsolate,
	IHTMLHRElementIsolateProperties
>();

export default class HTMLHRElementIsolate
	extends HTMLHRElementIsolateBase
	implements IHTMLHRElementIsolate {}
