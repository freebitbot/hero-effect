import type { IHTMLPreElementIsolate } from "../../base/interfaces/isolate";
import HTMLPreElementIsolateBase, {
	type IHTMLPreElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLPreElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLPreElementIsolate,
	IHTMLPreElementIsolateProperties
>();

export default class HTMLPreElementIsolate
	extends HTMLPreElementIsolateBase
	implements IHTMLPreElementIsolate {}
