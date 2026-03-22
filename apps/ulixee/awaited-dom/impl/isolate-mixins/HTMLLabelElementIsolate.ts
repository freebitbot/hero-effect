import type { IHTMLLabelElementIsolate } from "../../base/interfaces/isolate";
import type { IHTMLFormElement } from "../../base/interfaces/official";
import type { ISuperHTMLElement } from "../../base/interfaces/super";
import HTMLLabelElementIsolateBase, {
	type IHTMLLabelElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLLabelElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement, createSuperHTMLElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLabelElementIsolate,
	IHTMLLabelElementIsolateProperties
>();

export default class HTMLLabelElementIsolate
	extends HTMLLabelElementIsolateBase
	implements IHTMLLabelElementIsolate
{
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
