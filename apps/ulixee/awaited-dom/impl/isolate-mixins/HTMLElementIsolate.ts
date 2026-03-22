import type { IHTMLElementIsolate } from "../../base/interfaces/isolate";
import type { ISuperElement } from "../../base/interfaces/super";
import HTMLElementIsolateBase, {
	type IHTMLElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperElement } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLElementIsolate,
	IHTMLElementIsolateProperties
>();

export default class HTMLElementIsolate
	extends HTMLElementIsolateBase
	implements IHTMLElementIsolate
{
	public get offsetParent(): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addProperty(this, "offsetParent"),
			awaitedOptions,
		);
	}
}
