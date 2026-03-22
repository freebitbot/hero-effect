import type { IHTMLOptGroupElementIsolate } from "../../base/interfaces/isolate";
import HTMLOptGroupElementIsolateBase, {
	type IHTMLOptGroupElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLOptGroupElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOptGroupElementIsolate,
	IHTMLOptGroupElementIsolateProperties
>();

export default class HTMLOptGroupElementIsolate
	extends HTMLOptGroupElementIsolateBase
	implements IHTMLOptGroupElementIsolate {}
