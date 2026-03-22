import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IHTMLCollection,
	IHTMLCollectionBase,
} from "../interfaces/official";
import type { ISuperElement } from "../interfaces/super";
import StateMachine from "../StateMachine";
import {
	HTMLCollectionBaseConstantKeys,
	HTMLCollectionBasePropertyKeys,
	type IHTMLCollectionBaseProperties,
} from "./HTMLCollectionBase";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLCollection,
	IHTMLCollectionProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollection>(
	"HTMLCollection",
	getState,
	setState,
);

export function HTMLCollectionGenerator(
	HTMLCollectionBase: Constructable<IHTMLCollectionBase>,
) {
	return class HTMLCollection
		extends HTMLCollectionBase
		implements IHTMLCollection
	{
		constructor() {
			super();
			// proxy supports indexed property access
			const proxy = new Proxy(this, {
				get(target, prop) {
					if (prop in target) {
						// @ts-expect-error
						const value: any = target[prop];
						if (typeof value === "function") return value.bind(target);
						return value;
					}

					// delegate to indexer property
					if (
						(typeof prop === "string" || typeof prop === "number") &&
						!isNaN(prop as unknown as number)
					) {
						const param = parseInt(prop as string, 10);
						return target.item(param);
					}

					// delegate to string indexer
					if (typeof prop === "string") {
						return target.namedItem(prop as string);
					}
				},
			});

			return proxy;
		}

		// methods

		public namedItem(name: string): ISuperElement {
			throw new Error("HTMLCollection.namedItem not implemented");
		}

		[index: number]: ISuperElement;

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				HTMLCollectionPropertyKeys,
				HTMLCollectionConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionProperties
	extends IHTMLCollectionBaseProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLCollectionPropertyKeys = [...HTMLCollectionBasePropertyKeys];

export const HTMLCollectionConstantKeys = [...HTMLCollectionBaseConstantKeys];
