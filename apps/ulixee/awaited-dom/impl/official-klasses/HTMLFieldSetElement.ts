import type {
	IHTMLFieldSetElement,
	IHTMLFormElement,
} from "../../base/interfaces/official";
import type { ISuperHTMLCollection } from "../../base/interfaces/super";
import {
	HTMLFieldSetElementGenerator,
	type IHTMLFieldSetElementProperties,
} from "../../base/official-klasses/HTMLFieldSetElement";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement, createSuperHTMLCollection } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFieldSetElement,
	IHTMLFieldSetElementProperties
>();
const HTMLFieldSetElementBaseClass = HTMLFieldSetElementGenerator(HTMLElement);

export default class HTMLFieldSetElement
	extends HTMLFieldSetElementBaseClass
	implements IHTMLFieldSetElement
{
	constructor() {
		super();
	}

	// properties

	public get elements(): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addProperty(this, "elements"),
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
