import type {
	IDOMRect,
	IDOMRectList,
	IDocumentFragment,
	IRange,
} from "../../base/interfaces/official";
import type { ISuperNode } from "../../base/interfaces/super";
import {
	type IRangeProperties,
	RangeGenerator,
} from "../../base/official-klasses/Range";
import StateMachine from "../../base/StateMachine";
import {
	createDOMRect,
	createDOMRectList,
	createDocumentFragment,
	createRange,
	createSuperNode,
} from "../create";
import AbstractRange from "./AbstractRange";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRange, IRangeProperties>();
const RangeBaseClass = RangeGenerator(AbstractRange);

export default class Range extends RangeBaseClass implements IRange {
	constructor() {
		super();
	}

	// properties

	public get commonAncestorContainer(): ISuperNode {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNode(
			awaitedPath.addProperty(this, "commonAncestorContainer"),
			awaitedOptions,
		);
	}

	// methods

	public cloneContents(): IDocumentFragment {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDocumentFragment(
			awaitedPath.addMethod(this, "cloneContents"),
			awaitedOptions,
		);
	}

	public cloneRange(): IRange {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createRange(
			awaitedPath.addMethod(this, "cloneRange"),
			awaitedOptions,
		);
	}

	public createContextualFragment(fragment: string): IDocumentFragment {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDocumentFragment(
			awaitedPath.addMethod(this, "createContextualFragment", fragment),
			awaitedOptions,
		);
	}

	public extractContents(): IDocumentFragment {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDocumentFragment(
			awaitedPath.addMethod(this, "extractContents"),
			awaitedOptions,
		);
	}

	public getBoundingClientRect(): IDOMRect {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMRect(
			awaitedPath.addMethod(this, "getBoundingClientRect"),
			awaitedOptions,
		);
	}

	public getClientRects(): IDOMRectList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMRectList(
			awaitedPath.addMethod(this, "getClientRects"),
			awaitedOptions,
		);
	}
}
