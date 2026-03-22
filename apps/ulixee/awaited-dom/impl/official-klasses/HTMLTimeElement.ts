import type { IHTMLTimeElement } from "../../base/interfaces/official";
import {
	HTMLTimeElementGenerator,
	type IHTMLTimeElementProperties,
} from "../../base/official-klasses/HTMLTimeElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTimeElement,
	IHTMLTimeElementProperties
>();
const HTMLTimeElementBaseClass = HTMLTimeElementGenerator(HTMLElement);

export default class HTMLTimeElement
	extends HTMLTimeElementBaseClass
	implements IHTMLTimeElement
{
	constructor() {
		super();
	}
}
