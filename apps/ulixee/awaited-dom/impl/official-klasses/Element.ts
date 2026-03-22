import type {
	IDOMTokenList,
	IElement,
	INamedNodeMap,
	IShadowRoot,
} from "../../base/interfaces/official";
import type {
	ISuperElement,
	ISuperHTMLCollection,
} from "../../base/interfaces/super";
import {
	ElementGenerator,
	type IElementProperties,
} from "../../base/official-klasses/Element";
import StateMachine from "../../base/StateMachine";
import {
	createDOMTokenList,
	createNamedNodeMap,
	createShadowRoot,
	createSuperElement,
	createSuperHTMLCollection,
} from "../create";
import NonDocumentTypeChildNode from "../official-mixins/NonDocumentTypeChildNode";
import ParentNode from "../official-mixins/ParentNode";
import Slotable from "../official-mixins/Slotable";
import Node from "./Node";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IElement,
	IElementProperties
>();
const ElementBaseClass = ElementGenerator(
	Node,
	NonDocumentTypeChildNode,
	ParentNode,
	Slotable,
);

export default class Element extends ElementBaseClass implements IElement {
	constructor() {
		super();
	}

	// properties

	public get attributes(): INamedNodeMap {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createNamedNodeMap(
			awaitedPath.addProperty(this, "attributes"),
			awaitedOptions,
		);
	}

	public get classList(): IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "classList"),
			awaitedOptions,
		);
	}

	public get part(): IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "part"),
			awaitedOptions,
		);
	}

	public get shadowRoot(): IShadowRoot {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createShadowRoot(
			awaitedPath.addProperty(this, "shadowRoot"),
			awaitedOptions,
		);
	}

	// methods

	public closest(selectors: string): ISuperElement {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperElement(
			awaitedPath.addMethod(this, "closest", selectors),
			awaitedOptions,
		);
	}

	public getElementsByClassName(classNames: string): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addMethod(this, "getElementsByClassName", classNames),
			awaitedOptions,
		);
	}

	public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addMethod(this, "getElementsByTagName", qualifiedName),
			awaitedOptions,
		);
	}

	public getElementsByTagNameNS(
		namespace: string | null,
		localName: string,
	): ISuperHTMLCollection {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperHTMLCollection(
			awaitedPath.addMethod(
				this,
				"getElementsByTagNameNS",
				namespace,
				localName,
			),
			awaitedOptions,
		);
	}
}
