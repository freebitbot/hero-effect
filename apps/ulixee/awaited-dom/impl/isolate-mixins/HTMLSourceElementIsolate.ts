import type { IHTMLSourceElementIsolate } from "../../base/interfaces/isolate";
import HTMLSourceElementIsolateBase, {
	type IHTMLSourceElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLSourceElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLSourceElementIsolate,
	IHTMLSourceElementIsolateProperties
>();

export default class HTMLSourceElementIsolate
	extends HTMLSourceElementIsolateBase
	implements IHTMLSourceElementIsolate {}
