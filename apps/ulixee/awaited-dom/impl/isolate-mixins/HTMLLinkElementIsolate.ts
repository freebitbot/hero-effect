import type { IHTMLLinkElementIsolate } from "../../base/interfaces/isolate";
import type { IDOMTokenList } from "../../base/interfaces/official";
import HTMLLinkElementIsolateBase, {
	type IHTMLLinkElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLLinkElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createDOMTokenList } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLinkElementIsolate,
	IHTMLLinkElementIsolateProperties
>();

export default class HTMLLinkElementIsolate
	extends HTMLLinkElementIsolateBase
	implements IHTMLLinkElementIsolate
{
	public get relList(): IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "relList"),
			awaitedOptions,
		);
	}

	public get sizes(): Promise<string> | IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "sizes"),
			awaitedOptions,
		);
	}
}
