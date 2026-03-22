import type { IHTMLTableCaptionElementIsolate } from "../../base/interfaces/isolate";
import HTMLTableCaptionElementIsolateBase, {
	type IHTMLTableCaptionElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTableCaptionElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableCaptionElementIsolate,
	IHTMLTableCaptionElementIsolateProperties
>();

export default class HTMLTableCaptionElementIsolate
	extends HTMLTableCaptionElementIsolateBase
	implements IHTMLTableCaptionElementIsolate {}
