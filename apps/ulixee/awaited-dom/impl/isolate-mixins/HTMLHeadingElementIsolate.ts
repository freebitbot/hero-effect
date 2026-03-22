import type { IHTMLHeadingElementIsolate } from "../../base/interfaces/isolate";
import HTMLHeadingElementIsolateBase, {
	type IHTMLHeadingElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLHeadingElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHeadingElementIsolate,
	IHTMLHeadingElementIsolateProperties
>();

export default class HTMLHeadingElementIsolate
	extends HTMLHeadingElementIsolateBase
	implements IHTMLHeadingElementIsolate {}
