import type { IHTMLProgressElementIsolate } from "../../base/interfaces/isolate";
import type { ISuperNodeList } from "../../base/interfaces/super";
import HTMLProgressElementIsolateBase, {
	type IHTMLProgressElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLProgressElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperNodeList } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLProgressElementIsolate,
	IHTMLProgressElementIsolateProperties
>();

export default class HTMLProgressElementIsolate
	extends HTMLProgressElementIsolateBase
	implements IHTMLProgressElementIsolate
{
	public get labels(): ISuperNodeList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNodeList(
			awaitedPath.addProperty(this, "labels"),
			awaitedOptions,
		);
	}
}
