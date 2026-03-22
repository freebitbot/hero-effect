import type { IHTMLTextAreaElementIsolate } from "../../base/interfaces/isolate";
import type { IHTMLFormElement } from "../../base/interfaces/official";
import type { ISuperNodeList } from "../../base/interfaces/super";
import HTMLTextAreaElementIsolateBase, {
	type IHTMLTextAreaElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTextAreaElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement, createSuperNodeList } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTextAreaElementIsolate,
	IHTMLTextAreaElementIsolateProperties
>();

export default class HTMLTextAreaElementIsolate
	extends HTMLTextAreaElementIsolateBase
	implements IHTMLTextAreaElementIsolate
{
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
