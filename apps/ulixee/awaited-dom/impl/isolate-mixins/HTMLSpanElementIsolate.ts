import type { IHTMLSpanElementIsolate } from "../../base/interfaces/isolate";
import HTMLSpanElementIsolateBase, {
	type IHTMLSpanElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLSpanElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLSpanElementIsolate,
	IHTMLSpanElementIsolateProperties
>();

export default class HTMLSpanElementIsolate
	extends HTMLSpanElementIsolateBase
	implements IHTMLSpanElementIsolate {}
