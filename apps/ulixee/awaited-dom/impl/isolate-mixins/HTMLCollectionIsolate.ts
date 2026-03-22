import type { IHTMLCollectionIsolate } from "../../base/interfaces/isolate";
import type { ISuperElement } from "../../base/interfaces/super";
import HTMLCollectionIsolateBase, {
	type IHTMLCollectionIsolateProperties,
} from "../../base/isolate-mixins/HTMLCollectionIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLCollectionIsolate,
	IHTMLCollectionIsolateProperties
>();

export default class HTMLCollectionIsolate
	extends HTMLCollectionIsolateBase
	implements IHTMLCollectionIsolate
{
	public namedItem(name: string): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addMethod(this, "namedItem", name),
			awaitedOptions,
		);
	}
}
