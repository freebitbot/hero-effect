import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	ICSSRule,
	ICSSRuleList,
	ICSSStyleSheet,
	IStyleSheet,
} from "../interfaces/official";
import StateMachine from "../StateMachine";
import {
	type IStyleSheetProperties,
	StyleSheetConstantKeys,
	StyleSheetPropertyKeys,
} from "./StyleSheet";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ICSSStyleSheet,
	ICSSStyleSheetProperties
>();
export const awaitedHandler = new AwaitedHandler<ICSSStyleSheet>(
	"CSSStyleSheet",
	getState,
	setState,
);

export function CSSStyleSheetGenerator(StyleSheet: Constructable<IStyleSheet>) {
	return class CSSStyleSheet extends StyleSheet implements ICSSStyleSheet {
		constructor() {
			super();
		}

		// properties

		public get cssRules(): ICSSRuleList {
			throw new Error("CSSStyleSheet.cssRules getter not implemented");
		}

		public get ownerRule(): ICSSRule {
			throw new Error("CSSStyleSheet.ownerRule getter not implemented");
		}

		// methods

		public deleteRule(index: number): Promise<void> {
			return awaitedHandler.runMethod<void>(this, "deleteRule", [index]);
		}

		public insertRule(rule: string, index?: number): Promise<number> {
			return awaitedHandler.runMethod<number>(this, "insertRule", [
				rule,
				index,
			]);
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				CSSStyleSheetPropertyKeys,
				CSSStyleSheetConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSStyleSheetProperties extends IStyleSheetProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly cssRules?: ICSSRuleList;
	readonly ownerRule?: ICSSRule;
}

export const CSSStyleSheetPropertyKeys = [
	...StyleSheetPropertyKeys,
	"cssRules",
	"ownerRule",
];

export const CSSStyleSheetConstantKeys = [...StyleSheetConstantKeys];
