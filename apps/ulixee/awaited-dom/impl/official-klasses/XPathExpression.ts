import type { INodeIsolate } from "../../base/interfaces/isolate";
import type {
	IXPathExpression,
	IXPathResult,
} from "../../base/interfaces/official";
import {
	type IXPathExpressionProperties,
	XPathExpressionGenerator,
} from "../../base/official-klasses/XPathExpression";
import StateMachine from "../../base/StateMachine";
import { createXPathResult } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IXPathExpression,
	IXPathExpressionProperties
>();
const XPathExpressionBaseClass = XPathExpressionGenerator();

export default class XPathExpression
	extends XPathExpressionBaseClass
	implements IXPathExpression
{
	public evaluate(
		contextNode: INodeIsolate,
		type?: number,
		result?: IXPathResult | null,
	): IXPathResult {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createXPathResult(
			awaitedPath.addMethod(this, "evaluate", contextNode, type, result),
			awaitedOptions,
		);
	}
}
