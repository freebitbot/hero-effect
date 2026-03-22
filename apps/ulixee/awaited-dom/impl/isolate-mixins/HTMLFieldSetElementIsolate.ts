import type { IHTMLFieldSetElementIsolate } from "../../base/interfaces/isolate";
import type { IHTMLFormElement } from "../../base/interfaces/official";
import type { ISuperHTMLCollection } from "../../base/interfaces/super";
import HTMLFieldSetElementIsolateBase, {
	type IHTMLFieldSetElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLFieldSetElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement, createSuperHTMLCollection } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFieldSetElementIsolate,
	IHTMLFieldSetElementIsolateProperties
>();

export default class HTMLFieldSetElementIsolate
	extends HTMLFieldSetElementIsolateBase
	implements IHTMLFieldSetElementIsolate
{
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
