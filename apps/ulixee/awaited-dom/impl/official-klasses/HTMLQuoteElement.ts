import type { IHTMLQuoteElement } from "../../base/interfaces/official";
import {
	HTMLQuoteElementGenerator,
	type IHTMLQuoteElementProperties,
} from "../../base/official-klasses/HTMLQuoteElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLQuoteElement,
	IHTMLQuoteElementProperties
>();
const HTMLQuoteElementBaseClass = HTMLQuoteElementGenerator(HTMLElement);

export default class HTMLQuoteElement
	extends HTMLQuoteElementBaseClass
	implements IHTMLQuoteElement
{
	constructor() {
		super();
	}
}
