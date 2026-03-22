import type { IHTMLScriptElement } from "../../base/interfaces/official";
import {
	HTMLScriptElementGenerator,
	type IHTMLScriptElementProperties,
} from "../../base/official-klasses/HTMLScriptElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLScriptElement,
	IHTMLScriptElementProperties
>();
const HTMLScriptElementBaseClass = HTMLScriptElementGenerator(HTMLElement);

export default class HTMLScriptElement
	extends HTMLScriptElementBaseClass
	implements IHTMLScriptElement
{
	constructor() {
		super();
	}
}
