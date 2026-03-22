import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type { IDOMImplementation } from "../interfaces/official";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDOMImplementation,
	IDOMImplementationProperties
>();
export const awaitedHandler = new AwaitedHandler<IDOMImplementation>(
	"DOMImplementation",
	getState,
	setState,
);

export function DOMImplementationGenerator() {
	return class DOMImplementation implements IDOMImplementation {
		constructor() {}

		// methods

		public hasFeature(): Promise<boolean> {
			return awaitedHandler.runMethod<boolean>(this, "hasFeature", []);
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				DOMImplementationPropertyKeys,
				DOMImplementationConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMImplementationProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const DOMImplementationPropertyKeys = [];

export const DOMImplementationConstantKeys = [];
