import type { IHTMLTitleElement } from "../../base/interfaces/official";
import {
	HTMLTitleElementGenerator,
	type IHTMLTitleElementProperties,
} from "../../base/official-klasses/HTMLTitleElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTitleElement,
	IHTMLTitleElementProperties
>();
const HTMLTitleElementBaseClass = HTMLTitleElementGenerator(HTMLElement);

export default class HTMLTitleElement
	extends HTMLTitleElementBaseClass
	implements IHTMLTitleElement
{
	constructor() {
		super();
	}
}
