import type { IHTMLQuoteElementIsolate } from "../../base/interfaces/isolate";
import HTMLQuoteElementIsolateBase, {
	type IHTMLQuoteElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLQuoteElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLQuoteElementIsolate,
	IHTMLQuoteElementIsolateProperties
>();

export default class HTMLQuoteElementIsolate
	extends HTMLQuoteElementIsolateBase
	implements IHTMLQuoteElementIsolate {}
