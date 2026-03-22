import type { INodeIsolate } from "../../base/interfaces/isolate";
import type {
	IXPathEvaluatorBase,
	IXPathExpression,
	IXPathNSResolver,
	IXPathResult,
} from "../../base/interfaces/official";
import XPathEvaluatorBaseBase, {
	type IXPathEvaluatorBaseProperties,
} from "../../base/official-mixins/XPathEvaluatorBase";
import StateMachine from "../../base/StateMachine";
import { createXPathExpression, createXPathResult } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IXPathEvaluatorBase,
	IXPathEvaluatorBaseProperties
>();

export default class XPathEvaluatorBase
	extends XPathEvaluatorBaseBase
	implements IXPathEvaluatorBase
{
	public createExpression(
		expression: string,
		resolver?: IXPathNSResolver | null,
	): IXPathExpression {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createXPathExpression(
			awaitedPath.addMethod(this, "createExpression", expression, resolver),
			awaitedOptions,
		);
	}

	public evaluate(
		expression: string,
		contextNode: INodeIsolate,
		resolver?: IXPathNSResolver | null,
		type?: number,
		result?: IXPathResult | null,
	): IXPathResult {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createXPathResult(
			awaitedPath.addMethod(
				this,
				"evaluate",
				expression,
				contextNode,
				resolver,
				type,
				result,
			),
			awaitedOptions,
		);
	}
}
