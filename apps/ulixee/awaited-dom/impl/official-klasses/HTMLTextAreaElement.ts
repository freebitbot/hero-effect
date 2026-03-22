import type {
	IHTMLFormElement,
	IHTMLTextAreaElement,
} from "../../base/interfaces/official";
import type { ISuperNodeList } from "../../base/interfaces/super";
import {
	HTMLTextAreaElementGenerator,
	type IHTMLTextAreaElementProperties,
} from "../../base/official-klasses/HTMLTextAreaElement";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement, createSuperNodeList } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTextAreaElement,
	IHTMLTextAreaElementProperties
>();
const HTMLTextAreaElementBaseClass = HTMLTextAreaElementGenerator(HTMLElement);

export default class HTMLTextAreaElement
	extends HTMLTextAreaElementBaseClass
	implements IHTMLTextAreaElement
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

	public get labels(): ISuperNodeList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNodeList(
			awaitedPath.addProperty(this, "labels"),
			awaitedOptions,
		);
	}
}
