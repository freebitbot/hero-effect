import type { IHTMLInputElementIsolate } from "../../base/interfaces/isolate";
import type {
	IFileList,
	IHTMLFormElement,
} from "../../base/interfaces/official";
import type {
	ISuperHTMLElement,
	ISuperNodeList,
} from "../../base/interfaces/super";
import HTMLInputElementIsolateBase, {
	type IHTMLInputElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLInputElementIsolate";
import StateMachine from "../../base/StateMachine";
import {
	createFileList,
	createHTMLFormElement,
	createSuperHTMLElement,
	createSuperNodeList,
} from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLInputElementIsolate,
	IHTMLInputElementIsolateProperties
>();

export default class HTMLInputElementIsolate
	extends HTMLInputElementIsolateBase
	implements IHTMLInputElementIsolate
{
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
