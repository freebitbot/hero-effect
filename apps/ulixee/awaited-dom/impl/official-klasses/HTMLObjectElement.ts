import type {
	IHTMLFormElement,
	IHTMLObjectElement,
} from "../../base/interfaces/official";
import type { ISuperDocument } from "../../base/interfaces/super";
import {
	HTMLObjectElementGenerator,
	type IHTMLObjectElementProperties,
} from "../../base/official-klasses/HTMLObjectElement";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement, createSuperDocument } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLObjectElement,
	IHTMLObjectElementProperties
>();
const HTMLObjectElementBaseClass = HTMLObjectElementGenerator(HTMLElement);

export default class HTMLObjectElement
	extends HTMLObjectElementBaseClass
	implements IHTMLObjectElement
{
	constructor() {
		super();
	}

	// properties

	public get contentDocument(): ISuperDocument {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperDocument(
			awaitedPath.addProperty(this, "contentDocument"),
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
