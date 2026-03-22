import type { IHTMLHeadElementIsolate } from "../../base/interfaces/isolate";
import HTMLHeadElementIsolateBase, {
	type IHTMLHeadElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLHeadElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHeadElementIsolate,
	IHTMLHeadElementIsolateProperties
>();

export default class HTMLHeadElementIsolate
	extends HTMLHeadElementIsolateBase
	implements IHTMLHeadElementIsolate {}
