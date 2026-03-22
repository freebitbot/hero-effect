import type { IHTMLFrameElementIsolate } from "../../base/interfaces/isolate";
import type { ISuperDocument } from "../../base/interfaces/super";
import HTMLFrameElementIsolateBase, {
	type IHTMLFrameElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLFrameElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperDocument } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFrameElementIsolate,
	IHTMLFrameElementIsolateProperties
>();

export default class HTMLFrameElementIsolate
	extends HTMLFrameElementIsolateBase
	implements IHTMLFrameElementIsolate
{
	public get contentDocument(): ISuperDocument {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperDocument(
			awaitedPath.addProperty(this, "contentDocument"),
			awaitedOptions,
		);
	}
}
