import type {
	IHTMLFormElement,
	IHTMLLabelElement,
} from "../../base/interfaces/official";
import type { ISuperHTMLElement } from "../../base/interfaces/super";
import {
	HTMLLabelElementGenerator,
	type IHTMLLabelElementProperties,
} from "../../base/official-klasses/HTMLLabelElement";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement, createSuperHTMLElement } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLabelElement,
	IHTMLLabelElementProperties
>();
const HTMLLabelElementBaseClass = HTMLLabelElementGenerator(HTMLElement);

export default class HTMLLabelElement
	extends HTMLLabelElementBaseClass
	implements IHTMLLabelElement
{
	constructor() {
		super();
	}

	// properties

	public get control(): ISuperHTMLElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLElement(
			awaitedPath.addProperty(this, "control"),
			awaitedOptions,
		);
	}

	public get form(): IHTMLFormElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createHTMLFormElement(
			awaitedPath.addProperty(this, "form"),
			awaitedOptions,
		);
	}
}
