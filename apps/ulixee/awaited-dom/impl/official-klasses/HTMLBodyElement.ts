import type { IHTMLBodyElement } from "../../base/interfaces/official";
import {
	HTMLBodyElementGenerator,
	type IHTMLBodyElementProperties,
} from "../../base/official-klasses/HTMLBodyElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLBodyElement,
	IHTMLBodyElementProperties
>();
const HTMLBodyElementBaseClass = HTMLBodyElementGenerator(HTMLElement);

export default class HTMLBodyElement
	extends HTMLBodyElementBaseClass
	implements IHTMLBodyElement
{
	constructor() {
		super();
	}
}
