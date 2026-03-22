import type { IHTMLUListElementIsolate } from "../../base/interfaces/isolate";
import HTMLUListElementIsolateBase, {
	type IHTMLUListElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLUListElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLUListElementIsolate,
	IHTMLUListElementIsolateProperties
>();

export default class HTMLUListElementIsolate
	extends HTMLUListElementIsolateBase
	implements IHTMLUListElementIsolate {}
