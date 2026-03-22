import type { IHTMLMeterElement } from "../../base/interfaces/official";
import type { ISuperNodeList } from "../../base/interfaces/super";
import {
	HTMLMeterElementGenerator,
	type IHTMLMeterElementProperties,
} from "../../base/official-klasses/HTMLMeterElement";
import StateMachine from "../../base/StateMachine";
import { createSuperNodeList } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLMeterElement,
	IHTMLMeterElementProperties
>();
const HTMLMeterElementBaseClass = HTMLMeterElementGenerator(HTMLElement);

export default class HTMLMeterElement
	extends HTMLMeterElementBaseClass
	implements IHTMLMeterElement
{
	constructor() {
		super();
	}

	// properties

	public get labels(): ISuperNodeList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNodeList(
			awaitedPath.addProperty(this, "labels"),
			awaitedOptions,
		);
	}
}
