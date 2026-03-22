import type {
	IHTMLFormElement,
	IHTMLOptionElement,
} from "../../base/interfaces/official";
import {
	HTMLOptionElementGenerator,
	type IHTMLOptionElementProperties,
} from "../../base/official-klasses/HTMLOptionElement";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOptionElement,
	IHTMLOptionElementProperties
>();
const HTMLOptionElementBaseClass = HTMLOptionElementGenerator(HTMLElement);

export default class HTMLOptionElement
	extends HTMLOptionElementBaseClass
	implements IHTMLOptionElement
{
	constructor() {
		super();
	}

	// properties

	public get form(): IHTMLFormElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createHTMLFormElement(
			awaitedPath.addProperty(this, "form"),
			awaitedOptions,
		);
	}
}
