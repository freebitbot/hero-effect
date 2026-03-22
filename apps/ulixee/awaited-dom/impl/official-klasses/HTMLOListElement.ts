import type { IHTMLOListElement } from "../../base/interfaces/official";
import {
	HTMLOListElementGenerator,
	type IHTMLOListElementProperties,
} from "../../base/official-klasses/HTMLOListElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOListElement,
	IHTMLOListElementProperties
>();
const HTMLOListElementBaseClass = HTMLOListElementGenerator(HTMLElement);

export default class HTMLOListElement
	extends HTMLOListElementBaseClass
	implements IHTMLOListElement
{
	constructor() {
		super();
	}
}
