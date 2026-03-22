import type { IHTMLMeterElementIsolate } from "../../base/interfaces/isolate";
import type { ISuperNodeList } from "../../base/interfaces/super";
import HTMLMeterElementIsolateBase, {
	type IHTMLMeterElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLMeterElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createSuperNodeList } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLMeterElementIsolate,
	IHTMLMeterElementIsolateProperties
>();

export default class HTMLMeterElementIsolate
	extends HTMLMeterElementIsolateBase
	implements IHTMLMeterElementIsolate
{
	public get labels(): ISuperNodeList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNodeList(
			awaitedPath.addProperty(this, "labels"),
			awaitedOptions,
		);
	}
}
