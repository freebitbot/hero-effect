import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type { IStyleSheet } from "../interfaces/official";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IStyleSheet,
	IStyleSheetProperties
>();
export const awaitedHandler = new AwaitedHandler<IStyleSheet>(
	"StyleSheet",
	getState,
	setState,
);

export function StyleSheetGenerator() {
	return class StyleSheet implements IStyleSheet {
		constructor() {}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				StyleSheetPropertyKeys,
				StyleSheetConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStyleSheetProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const StyleSheetPropertyKeys = [];

export const StyleSheetConstantKeys = [];
