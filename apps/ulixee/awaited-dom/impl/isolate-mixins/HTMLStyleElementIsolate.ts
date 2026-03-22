import type { IHTMLStyleElementIsolate } from "../../base/interfaces/isolate";
import HTMLStyleElementIsolateBase, {
	type IHTMLStyleElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLStyleElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLStyleElementIsolate,
	IHTMLStyleElementIsolateProperties
>();

export default class HTMLStyleElementIsolate
	extends HTMLStyleElementIsolateBase
	implements IHTMLStyleElementIsolate {}
