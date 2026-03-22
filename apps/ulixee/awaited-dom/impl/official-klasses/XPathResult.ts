import type { IXPathResult } from "../../base/interfaces/official";
import type { ISuperNode } from "../../base/interfaces/super";
import {
	type IXPathResultProperties,
	XPathResultGenerator,
} from "../../base/official-klasses/XPathResult";
import StateMachine from "../../base/StateMachine";
import { createSuperNode } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IXPathResult,
	IXPathResultProperties
>();
const XPathResultBaseClass = XPathResultGenerator();

export default class XPathResult
	extends XPathResultBaseClass
	implements IXPathResult
{
	public get singleNodeValue(): ISuperNode {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNode(
			awaitedPath.addProperty(this, "singleNodeValue"),
			awaitedOptions,
		);
	}

	// methods

	public iterateNext(): ISuperNode {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNode(
			awaitedPath.addMethod(this, "iterateNext"),
			awaitedOptions,
		);
	}

	public snapshotItem(index: number): ISuperNode {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createSuperNode(
			awaitedPath.addMethod(this, "snapshotItem", index),
			awaitedOptions,
		);
	}
}
