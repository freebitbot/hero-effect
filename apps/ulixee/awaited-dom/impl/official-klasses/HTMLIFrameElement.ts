import type {
	IDOMTokenList,
	IFeaturePolicy,
	IHTMLIFrameElement,
} from "../../base/interfaces/official";
import type { ISuperDocument } from "../../base/interfaces/super";
import {
	HTMLIFrameElementGenerator,
	type IHTMLIFrameElementProperties,
} from "../../base/official-klasses/HTMLIFrameElement";
import StateMachine from "../../base/StateMachine";
import {
	createDOMTokenList,
	createFeaturePolicy,
	createSuperDocument,
} from "../create";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLIFrameElement,
	IHTMLIFrameElementProperties
>();
const HTMLIFrameElementBaseClass = HTMLIFrameElementGenerator(HTMLElement);

export default class HTMLIFrameElement
	extends HTMLIFrameElementBaseClass
	implements IHTMLIFrameElement
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

	public get featurePolicy(): IFeaturePolicy {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createFeaturePolicy(
			awaitedPath.addProperty(this, "featurePolicy"),
			awaitedOptions,
		);
	}

	public get sandbox(): IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "sandbox"),
			awaitedOptions,
		);
	}
}
