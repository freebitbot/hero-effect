import type { IHTMLHtmlElementIsolate } from "../../base/interfaces/isolate";
import HTMLHtmlElementIsolateBase, {
	type IHTMLHtmlElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLHtmlElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHtmlElementIsolate,
	IHTMLHtmlElementIsolateProperties
>();

export default class HTMLHtmlElementIsolate
	extends HTMLHtmlElementIsolateBase
	implements IHTMLHtmlElementIsolate {}
