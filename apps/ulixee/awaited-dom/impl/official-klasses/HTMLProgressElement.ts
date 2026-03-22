import type { IHTMLProgressElement } from "../../base/interfaces/official";
import type { ISuperNodeList } from "../../base/interfaces/super";
import {
	HTMLProgressElementGenerator,
	type IHTMLProgressElementProperties,
} from "../../base/official-klasses/HTMLProgressElement";
import StateMachine from "../../base/StateMachine";
import { createSuperNodeList } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLProgressElement,
	IHTMLProgressElementProperties
>();
const HTMLProgressElementBaseClass = HTMLProgressElementGenerator(HTMLElement);

export default class HTMLProgressElement
	extends HTMLProgressElementBaseClass
	implements IHTMLProgressElement
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
