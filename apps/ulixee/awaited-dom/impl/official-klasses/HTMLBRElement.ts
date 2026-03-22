import type { IHTMLBRElement } from "../../base/interfaces/official";
import {
	HTMLBRElementGenerator,
	type IHTMLBRElementProperties,
} from "../../base/official-klasses/HTMLBRElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLBRElement,
	IHTMLBRElementProperties
>();
const HTMLBRElementBaseClass = HTMLBRElementGenerator(HTMLElement);

export default class HTMLBRElement
	extends HTMLBRElementBaseClass
	implements IHTMLBRElement
{
	constructor() {
		super();
	}
}
