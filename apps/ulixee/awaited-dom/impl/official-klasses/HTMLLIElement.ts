import type { IHTMLLIElement } from "../../base/interfaces/official";
import {
	HTMLLIElementGenerator,
	type IHTMLLIElementProperties,
} from "../../base/official-klasses/HTMLLIElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLIElement,
	IHTMLLIElementProperties
>();
const HTMLLIElementBaseClass = HTMLLIElementGenerator(HTMLElement);

export default class HTMLLIElement
	extends HTMLLIElementBaseClass
	implements IHTMLLIElement
{
	constructor() {
		super();
	}
}
