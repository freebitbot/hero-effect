import type { IXPathEvaluator } from "../../base/interfaces/official";
import {
	type IXPathEvaluatorProperties,
	XPathEvaluatorGenerator,
} from "../../base/official-klasses/XPathEvaluator";
import StateMachine from "../../base/StateMachine";
import XPathEvaluatorBase from "../official-mixins/XPathEvaluatorBase";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IXPathEvaluator,
	IXPathEvaluatorProperties
>();
const XPathEvaluatorBaseClass = XPathEvaluatorGenerator(XPathEvaluatorBase);

export default class XPathEvaluator
	extends XPathEvaluatorBaseClass
	implements IXPathEvaluator
{
	constructor() {
		super();
	}
}
