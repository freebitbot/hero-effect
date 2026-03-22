import type { IHTMLScriptElementIsolate } from "../../base/interfaces/isolate";
import HTMLScriptElementIsolateBase, {
	type IHTMLScriptElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLScriptElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLScriptElementIsolate,
	IHTMLScriptElementIsolateProperties
>();

export default class HTMLScriptElementIsolate
	extends HTMLScriptElementIsolateBase
	implements IHTMLScriptElementIsolate {}
