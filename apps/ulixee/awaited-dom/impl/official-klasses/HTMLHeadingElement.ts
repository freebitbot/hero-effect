import type { IHTMLHeadingElement } from "../../base/interfaces/official";
import {
	HTMLHeadingElementGenerator,
	type IHTMLHeadingElementProperties,
} from "../../base/official-klasses/HTMLHeadingElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHeadingElement,
	IHTMLHeadingElementProperties
>();
const HTMLHeadingElementBaseClass = HTMLHeadingElementGenerator(HTMLElement);

export default class HTMLHeadingElement
	extends HTMLHeadingElementBaseClass
	implements IHTMLHeadingElement
{
	constructor() {
		super();
	}
}
