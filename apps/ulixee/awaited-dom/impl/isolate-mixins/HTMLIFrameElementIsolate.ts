import type { IHTMLIFrameElementIsolate } from "../../base/interfaces/isolate";
import type {
	IDOMTokenList,
	IFeaturePolicy,
} from "../../base/interfaces/official";
import type { ISuperDocument } from "../../base/interfaces/super";
import HTMLIFrameElementIsolateBase, {
	type IHTMLIFrameElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLIFrameElementIsolate";
import StateMachine from "../../base/StateMachine";
import {
	createDOMTokenList,
	createFeaturePolicy,
	createSuperDocument,
} from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLIFrameElementIsolate,
	IHTMLIFrameElementIsolateProperties
>();

export default class HTMLIFrameElementIsolate
	extends HTMLIFrameElementIsolateBase
	implements IHTMLIFrameElementIsolate
{
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
