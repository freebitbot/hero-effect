import type { IHTMLDocumentIsolate } from "../../base/interfaces/isolate";
import HTMLDocumentIsolateBase, {
	type IHTMLDocumentIsolateProperties,
} from "../../base/isolate-mixins/HTMLDocumentIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDocumentIsolate,
	IHTMLDocumentIsolateProperties
>();

export default class HTMLDocumentIsolate
	extends HTMLDocumentIsolateBase
	implements IHTMLDocumentIsolate {}
