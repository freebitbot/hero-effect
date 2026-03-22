import type { IHTMLDivElementIsolate } from "../../base/interfaces/isolate";
import HTMLDivElementIsolateBase, {
	type IHTMLDivElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLDivElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDivElementIsolate,
	IHTMLDivElementIsolateProperties
>();

export default class HTMLDivElementIsolate
	extends HTMLDivElementIsolateBase
	implements IHTMLDivElementIsolate {}
