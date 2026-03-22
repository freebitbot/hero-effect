import type { IHTMLOListElementIsolate } from "../../base/interfaces/isolate";
import HTMLOListElementIsolateBase, {
	type IHTMLOListElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLOListElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOListElementIsolate,
	IHTMLOListElementIsolateProperties
>();

export default class HTMLOListElementIsolate
	extends HTMLOListElementIsolateBase
	implements IHTMLOListElementIsolate {}
