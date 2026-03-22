import type { IHTMLFrameElement } from "../../base/interfaces/official";
import type { ISuperDocument } from "../../base/interfaces/super";
import {
	HTMLFrameElementGenerator,
	type IHTMLFrameElementProperties,
} from "../../base/official-klasses/HTMLFrameElement";
import StateMachine from "../../base/StateMachine";
import { createSuperDocument } from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFrameElement,
	IHTMLFrameElementProperties
>();
const HTMLFrameElementBaseClass = HTMLFrameElementGenerator(HTMLElement);

export default class HTMLFrameElement
	extends HTMLFrameElementBaseClass
	implements IHTMLFrameElement
{
	constructor() {
		super();
	}

	// properties

	public get contentDocument(): ISuperDocument {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperDocument(
			awaitedPath.addProperty(this, "contentDocument"),
			awaitedOptions,
		);
	}
}
