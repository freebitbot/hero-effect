import type {
	IHTMLFormElement,
	IHTMLLegendElement,
} from "../../base/interfaces/official";
import {
	HTMLLegendElementGenerator,
	type IHTMLLegendElementProperties,
} from "../../base/official-klasses/HTMLLegendElement";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLegendElement,
	IHTMLLegendElementProperties
>();
const HTMLLegendElementBaseClass = HTMLLegendElementGenerator(HTMLElement);

export default class HTMLLegendElement
	extends HTMLLegendElementBaseClass
	implements IHTMLLegendElement
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
