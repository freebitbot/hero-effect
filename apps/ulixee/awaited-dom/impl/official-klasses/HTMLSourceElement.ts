import type { IHTMLSourceElement } from "../../base/interfaces/official";
import {
	HTMLSourceElementGenerator,
	type IHTMLSourceElementProperties,
} from "../../base/official-klasses/HTMLSourceElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLSourceElement,
	IHTMLSourceElementProperties
>();
const HTMLSourceElementBaseClass = HTMLSourceElementGenerator(HTMLElement);

export default class HTMLSourceElement
	extends HTMLSourceElementBaseClass
	implements IHTMLSourceElement
{
	constructor() {
		super();
	}
}
