import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IHTMLDataListElement,
	IHTMLElement,
} from "../interfaces/official";
import type { ISuperHTMLCollection } from "../interfaces/super";
import NodeFactory from "../NodeFactory";
import StateMachine from "../StateMachine";
import {
	HTMLElementConstantKeys,
	HTMLElementPropertyKeys,
	type IHTMLElementProperties,
} from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDataListElement,
	IHTMLDataListElementProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLDataListElement>(
	"HTMLDataListElement",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<IHTMLDataListElement>(
	getState,
	setState,
	awaitedHandler,
);

export function HTMLDataListElementGenerator(
	HTMLElement: Constructable<IHTMLElement>,
) {
	return class HTMLDataListElement
		extends HTMLElement
		implements IHTMLDataListElement, PromiseLike<IHTMLDataListElement>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createHTMLDataListElement",
			});
		}

		// properties

		public get options(): Promise<ISuperHTMLCollection> {
			return awaitedHandler.getProperty<ISuperHTMLCollection>(
				this,
				"options",
				false,
			);
		}

		public then<TResult1 = IHTMLDataListElement, TResult2 = never>(
			onfulfilled?:
				| ((value: IHTMLDataListElement) => PromiseLike<TResult1> | TResult1)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => PromiseLike<TResult2> | TResult2)
				| undefined
				| null,
		): Promise<TResult1 | TResult2> {
			return nodeFactory
				.createInstanceWithNodePointer(this)
				.then(onfulfilled, onrejected);
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				HTMLDataListElementPropertyKeys,
				HTMLDataListElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDataListElementProperties extends IHTMLElementProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;

	readonly options?: Promise<ISuperHTMLCollection>;
}

export const HTMLDataListElementPropertyKeys = [
	...HTMLElementPropertyKeys,
	"options",
];

export const HTMLDataListElementConstantKeys = [...HTMLElementConstantKeys];
