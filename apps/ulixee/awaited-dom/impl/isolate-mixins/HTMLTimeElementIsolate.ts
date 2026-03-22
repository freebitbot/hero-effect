import type { IHTMLTimeElementIsolate } from "../../base/interfaces/isolate";
import HTMLTimeElementIsolateBase, {
	type IHTMLTimeElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTimeElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTimeElementIsolate,
	IHTMLTimeElementIsolateProperties
>();

export default class HTMLTimeElementIsolate
	extends HTMLTimeElementIsolateBase
	implements IHTMLTimeElementIsolate {}
