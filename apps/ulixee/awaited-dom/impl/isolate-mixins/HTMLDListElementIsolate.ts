import type { IHTMLDListElementIsolate } from "../../base/interfaces/isolate";
import HTMLDListElementIsolateBase, {
	type IHTMLDListElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLDListElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDListElementIsolate,
	IHTMLDListElementIsolateProperties
>();

export default class HTMLDListElementIsolate
	extends HTMLDListElementIsolateBase
	implements IHTMLDListElementIsolate {}
