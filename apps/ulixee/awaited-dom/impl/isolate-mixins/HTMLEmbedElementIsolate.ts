import type { IHTMLEmbedElementIsolate } from "../../base/interfaces/isolate";
import HTMLEmbedElementIsolateBase, {
	type IHTMLEmbedElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLEmbedElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLEmbedElementIsolate,
	IHTMLEmbedElementIsolateProperties
>();

export default class HTMLEmbedElementIsolate
	extends HTMLEmbedElementIsolateBase
	implements IHTMLEmbedElementIsolate {}
