import type { IHTMLBRElementIsolate } from "../../base/interfaces/isolate";
import HTMLBRElementIsolateBase, {
	type IHTMLBRElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLBRElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLBRElementIsolate,
	IHTMLBRElementIsolateProperties
>();

export default class HTMLBRElementIsolate
	extends HTMLBRElementIsolateBase
	implements IHTMLBRElementIsolate {}
