import type { IHTMLLIElementIsolate } from "../../base/interfaces/isolate";
import HTMLLIElementIsolateBase, {
	type IHTMLLIElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLLIElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLIElementIsolate,
	IHTMLLIElementIsolateProperties
>();

export default class HTMLLIElementIsolate
	extends HTMLLIElementIsolateBase
	implements IHTMLLIElementIsolate {}
