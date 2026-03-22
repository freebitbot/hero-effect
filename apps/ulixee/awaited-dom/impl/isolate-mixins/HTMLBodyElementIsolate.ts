import type { IHTMLBodyElementIsolate } from "../../base/interfaces/isolate";
import HTMLBodyElementIsolateBase, {
	type IHTMLBodyElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLBodyElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLBodyElementIsolate,
	IHTMLBodyElementIsolateProperties
>();

export default class HTMLBodyElementIsolate
	extends HTMLBodyElementIsolateBase
	implements IHTMLBodyElementIsolate {}
