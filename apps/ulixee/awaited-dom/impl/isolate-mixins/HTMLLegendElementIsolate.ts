import type { IHTMLLegendElementIsolate } from "../../base/interfaces/isolate";
import type { IHTMLFormElement } from "../../base/interfaces/official";
import HTMLLegendElementIsolateBase, {
	type IHTMLLegendElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLLegendElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createHTMLFormElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLegendElementIsolate,
	IHTMLLegendElementIsolateProperties
>();

export default class HTMLLegendElementIsolate
	extends HTMLLegendElementIsolateBase
	implements IHTMLLegendElementIsolate
{
	public get form(): IHTMLFormElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createHTMLFormElement(
			awaitedPath.addProperty(this, "form"),
			awaitedOptions,
		);
	}
}
