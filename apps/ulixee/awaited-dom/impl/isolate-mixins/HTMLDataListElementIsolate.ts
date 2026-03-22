import type { IHTMLDataListElementIsolate } from "../../base/interfaces/isolate";
import HTMLDataListElementIsolateBase, {
	type IHTMLDataListElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLDataListElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDataListElementIsolate,
	IHTMLDataListElementIsolateProperties
>();

export default class HTMLDataListElementIsolate
	extends HTMLDataListElementIsolateBase
	implements IHTMLDataListElementIsolate {}
