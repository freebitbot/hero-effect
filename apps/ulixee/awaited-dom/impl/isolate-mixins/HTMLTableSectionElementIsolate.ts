import type { IHTMLTableSectionElementIsolate } from "../../base/interfaces/isolate";
import type { ISuperHTMLCollection } from "../../base/interfaces/super";
import HTMLTableSectionElementIsolateBase, {
	type IHTMLTableSectionElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTableSectionElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperHTMLCollection } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableSectionElementIsolate,
	IHTMLTableSectionElementIsolateProperties
>();

export default class HTMLTableSectionElementIsolate
	extends HTMLTableSectionElementIsolateBase
	implements IHTMLTableSectionElementIsolate
{
	public get rows(): Promise<string> | ISuperHTMLCollection | Promise<number> {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addProperty(this, "rows"),
			awaitedOptions,
		);
	}
}
