import type { IHTMLHtmlElement } from "../../base/interfaces/official";
import {
	HTMLHtmlElementGenerator,
	type IHTMLHtmlElementProperties,
} from "../../base/official-klasses/HTMLHtmlElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHtmlElement,
	IHTMLHtmlElementProperties
>();
const HTMLHtmlElementBaseClass = HTMLHtmlElementGenerator(HTMLElement);

export default class HTMLHtmlElement
	extends HTMLHtmlElementBaseClass
	implements IHTMLHtmlElement
{
	constructor() {
		super();
	}
}
