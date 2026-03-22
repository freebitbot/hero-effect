import type { IHTMLParamElementIsolate } from "../../base/interfaces/isolate";
import HTMLParamElementIsolateBase, {
	type IHTMLParamElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLParamElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLParamElementIsolate,
	IHTMLParamElementIsolateProperties
>();

export default class HTMLParamElementIsolate
	extends HTMLParamElementIsolateBase
	implements IHTMLParamElementIsolate {}
