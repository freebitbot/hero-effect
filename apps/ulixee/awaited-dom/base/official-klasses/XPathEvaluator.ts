import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IXPathEvaluator,
	IXPathEvaluatorBase,
} from "../interfaces/official";
import {
	type IXPathEvaluatorBaseProperties,
	XPathEvaluatorBaseConstantKeys,
	XPathEvaluatorBasePropertyKeys,
} from "../official-mixins/XPathEvaluatorBase";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IXPathEvaluator,
	IXPathEvaluatorProperties
>();
export const awaitedHandler = new AwaitedHandler<IXPathEvaluator>(
	"XPathEvaluator",
	getState,
	setState,
);

export function XPathEvaluatorGenerator(
	XPathEvaluatorBase: Constructable<IXPathEvaluatorBase>,
) {
	return class XPathEvaluator
		extends XPathEvaluatorBase
		implements IXPathEvaluator
	{
		constructor() {
			super();
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				XPathEvaluatorPropertyKeys,
				XPathEvaluatorConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXPathEvaluatorProperties
	extends IXPathEvaluatorBaseProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const XPathEvaluatorPropertyKeys = [...XPathEvaluatorBasePropertyKeys];

export const XPathEvaluatorConstantKeys = [...XPathEvaluatorBaseConstantKeys];
