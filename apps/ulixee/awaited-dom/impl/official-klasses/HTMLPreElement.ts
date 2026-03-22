import type { IHTMLPreElement } from "../../base/interfaces/official";
import {
	HTMLPreElementGenerator,
	type IHTMLPreElementProperties,
} from "../../base/official-klasses/HTMLPreElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLPreElement,
	IHTMLPreElementProperties
>();
const HTMLPreElementBaseClass = HTMLPreElementGenerator(HTMLElement);

export default class HTMLPreElement
	extends HTMLPreElementBaseClass
	implements IHTMLPreElement
{
	constructor() {
		super();
	}
}
