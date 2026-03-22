import type { IHTMLParagraphElementIsolate } from "../../base/interfaces/isolate";
import HTMLParagraphElementIsolateBase, {
	type IHTMLParagraphElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLParagraphElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLParagraphElementIsolate,
	IHTMLParagraphElementIsolateProperties
>();

export default class HTMLParagraphElementIsolate
	extends HTMLParagraphElementIsolateBase
	implements IHTMLParagraphElementIsolate {}
