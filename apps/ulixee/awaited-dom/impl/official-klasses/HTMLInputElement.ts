import type {
	IFileList,
	IHTMLFormElement,
	IHTMLInputElement,
} from "../../base/interfaces/official";
import type {
	ISuperHTMLElement,
	ISuperNodeList,
} from "../../base/interfaces/super";
import {
	HTMLInputElementGenerator,
	type IHTMLInputElementProperties,
} from "../../base/official-klasses/HTMLInputElement";
import StateMachine from "../../base/StateMachine";
import {
	createFileList,
	createHTMLFormElement,
	createSuperHTMLElement,
	createSuperNodeList,
} from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLInputElement,
	IHTMLInputElementProperties
>();
const HTMLInputElementBaseClass = HTMLInputElementGenerator(HTMLElement);

export default class HTMLInputElement
	extends HTMLInputElementBaseClass
	implements IHTMLInputElement
{
	constructor() {
		super();
	}

	// properties

	public get files(): IFileList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createFileList(
			awaitedPath.addProperty(this, "files"),
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

	public get labels(): ISuperNodeList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNodeList(
			awaitedPath.addProperty(this, "labels"),
			awaitedOptions,
		);
	}

	public get list(): ISuperHTMLElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLElement(
			awaitedPath.addProperty(this, "list"),
			awaitedOptions,
		);
	}
}
