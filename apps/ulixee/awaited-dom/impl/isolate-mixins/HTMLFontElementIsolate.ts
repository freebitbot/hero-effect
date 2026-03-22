import type { IHTMLFontElementIsolate } from "../../base/interfaces/isolate";
import HTMLFontElementIsolateBase, {
	type IHTMLFontElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLFontElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFontElementIsolate,
	IHTMLFontElementIsolateProperties
>();

export default class HTMLFontElementIsolate
	extends HTMLFontElementIsolateBase
	implements IHTMLFontElementIsolate {}
