import type { IHTMLFontElement } from "../../base/interfaces/official";
import {
	HTMLFontElementGenerator,
	type IHTMLFontElementProperties,
} from "../../base/official-klasses/HTMLFontElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFontElement,
	IHTMLFontElementProperties
>();
const HTMLFontElementBaseClass = HTMLFontElementGenerator(HTMLElement);

export default class HTMLFontElement
	extends HTMLFontElementBaseClass
	implements IHTMLFontElement
{
	constructor() {
		super();
	}
}
