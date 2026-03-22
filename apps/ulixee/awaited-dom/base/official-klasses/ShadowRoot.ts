import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import ClassMixer from "../ClassMixer";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IDocumentFragment,
	IDocumentOrShadowRoot,
	IShadowRoot,
	IShadowRootMode,
} from "../interfaces/official";
import type { ISuperElement } from "../interfaces/super";
import {
	DocumentOrShadowRootConstantKeys,
	DocumentOrShadowRootPropertyKeys,
	type IDocumentOrShadowRootProperties,
} from "../official-mixins/DocumentOrShadowRoot";
import StateMachine from "../StateMachine";
import {
	DocumentFragmentConstantKeys,
	DocumentFragmentPropertyKeys,
	type IDocumentFragmentProperties,
} from "./DocumentFragment";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IShadowRoot,
	IShadowRootProperties
>();
export const awaitedHandler = new AwaitedHandler<IShadowRoot>(
	"ShadowRoot",
	getState,
	setState,
);

export function ShadowRootGenerator(
	DocumentFragment: Constructable<IDocumentFragment>,
	DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>,
) {
	const Parent = ClassMixer(DocumentFragment, [
		DocumentOrShadowRoot,
	]) as unknown as Constructable<IDocumentFragment & IDocumentOrShadowRoot>;

	return class ShadowRoot extends Parent implements IShadowRoot {
		constructor() {
			super();
		}

		// properties

		public get delegatesFocus(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "delegatesFocus", false);
		}

		public get host(): ISuperElement {
			throw new Error("ShadowRoot.host getter not implemented");
		}

		public get innerHTML(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "innerHTML", false);
		}

		public get mode(): Promise<IShadowRootMode> {
			return awaitedHandler.getProperty<IShadowRootMode>(this, "mode", false);
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				ShadowRootPropertyKeys,
				ShadowRootConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IShadowRootProperties
	extends IDocumentFragmentProperties,
		IDocumentOrShadowRootProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly delegatesFocus?: Promise<boolean>;
	readonly host?: ISuperElement;
	readonly innerHTML?: Promise<string>;
	readonly mode?: Promise<IShadowRootMode>;
}

export const ShadowRootPropertyKeys = [
	...DocumentFragmentPropertyKeys,
	...DocumentOrShadowRootPropertyKeys,
	"delegatesFocus",
	"host",
	"innerHTML",
	"mode",
];

export const ShadowRootConstantKeys = [
	...DocumentFragmentConstantKeys,
	...DocumentOrShadowRootConstantKeys,
];
