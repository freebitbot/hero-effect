import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import ClassMixer from "../ClassMixer";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	ICSSStyleSheetIsolate,
	IStyleSheetIsolate,
} from "../interfaces/isolate";
import type { ISuperStyleSheet } from "../interfaces/super";
import {
	CSSStyleSheetIsolateConstantKeys,
	CSSStyleSheetIsolatePropertyKeys,
	type ICSSStyleSheetIsolateProperties,
} from "../isolate-mixins/CSSStyleSheetIsolate";
import {
	type IStyleSheetIsolateProperties,
	StyleSheetIsolateConstantKeys,
	StyleSheetIsolatePropertyKeys,
} from "../isolate-mixins/StyleSheetIsolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ISuperStyleSheet,
	ISuperStyleSheetProperties
>();
export const awaitedHandler = new AwaitedHandler<ISuperStyleSheet>(
	"SuperStyleSheet",
	getState,
	setState,
);

export function SuperStyleSheetGenerator(
	CSSStyleSheetIsolate: Constructable<ICSSStyleSheetIsolate>,
	StyleSheetIsolate: Constructable<IStyleSheetIsolate>,
) {
	const Parent = ClassMixer(CSSStyleSheetIsolate, [
		StyleSheetIsolate,
	]) as unknown as Constructable<ICSSStyleSheetIsolate & IStyleSheetIsolate>;

	return class SuperStyleSheet extends Parent implements ISuperStyleSheet {
		constructor() {
			super();
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				SuperStyleSheetPropertyKeys,
				SuperStyleSheetConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperStyleSheetProperties
	extends ICSSStyleSheetIsolateProperties,
		IStyleSheetIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const SuperStyleSheetPropertyKeys = [
	...CSSStyleSheetIsolatePropertyKeys,
	...StyleSheetIsolatePropertyKeys,
];

export const SuperStyleSheetConstantKeys = [
	...CSSStyleSheetIsolateConstantKeys,
	...StyleSheetIsolateConstantKeys,
];
