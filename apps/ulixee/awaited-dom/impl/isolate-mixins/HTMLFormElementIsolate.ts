import type { IHTMLFormElementIsolate } from "../../base/interfaces/isolate";
import HTMLFormElementIsolateBase, {
	type IHTMLFormElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLFormElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFormElementIsolate,
	IHTMLFormElementIsolateProperties
>();

export default class HTMLFormElementIsolate
	extends HTMLFormElementIsolateBase
	implements IHTMLFormElementIsolate {}
