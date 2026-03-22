import type { IHTMLDivElement } from "../../base/interfaces/official";
import {
	HTMLDivElementGenerator,
	type IHTMLDivElementProperties,
} from "../../base/official-klasses/HTMLDivElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDivElement,
	IHTMLDivElementProperties
>();
const HTMLDivElementBaseClass = HTMLDivElementGenerator(HTMLElement);

export default class HTMLDivElement
	extends HTMLDivElementBaseClass
	implements IHTMLDivElement
{
	constructor() {
		super();
	}
}
