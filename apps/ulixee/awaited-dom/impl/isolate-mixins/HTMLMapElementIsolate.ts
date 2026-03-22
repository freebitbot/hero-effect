import type { IHTMLMapElementIsolate } from "../../base/interfaces/isolate";
import type { ISuperHTMLCollection } from "../../base/interfaces/super";
import HTMLMapElementIsolateBase, {
	type IHTMLMapElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLMapElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperHTMLCollection } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLMapElementIsolate,
	IHTMLMapElementIsolateProperties
>();

export default class HTMLMapElementIsolate
	extends HTMLMapElementIsolateBase
	implements IHTMLMapElementIsolate
{
	public get areas(): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addProperty(this, "areas"),
			awaitedOptions,
		);
	}
}
