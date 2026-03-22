import type { IHTMLDataElementIsolate } from "../../base/interfaces/isolate";
import HTMLDataElementIsolateBase, {
	type IHTMLDataElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLDataElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDataElementIsolate,
	IHTMLDataElementIsolateProperties
>();

export default class HTMLDataElementIsolate
	extends HTMLDataElementIsolateBase
	implements IHTMLDataElementIsolate {}
