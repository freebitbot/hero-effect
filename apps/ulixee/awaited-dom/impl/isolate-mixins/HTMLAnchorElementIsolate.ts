import type { IHTMLAnchorElementIsolate } from "../../base/interfaces/isolate";
import type { IDOMTokenList } from "../../base/interfaces/official";
import HTMLAnchorElementIsolateBase, {
	type IHTMLAnchorElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLAnchorElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createDOMTokenList } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAnchorElementIsolate,
	IHTMLAnchorElementIsolateProperties
>();

export default class HTMLAnchorElementIsolate
	extends HTMLAnchorElementIsolateBase
	implements IHTMLAnchorElementIsolate
{
	public get relList(): IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "relList"),
			awaitedOptions,
		);
	}
}
