import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type { IHTMLElement, IHTMLHeadElement } from "../interfaces/official";
import NodeFactory from "../NodeFactory";
import StateMachine from "../StateMachine";
import {
	HTMLElementConstantKeys,
	HTMLElementPropertyKeys,
	type IHTMLElementProperties,
} from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHeadElement,
	IHTMLHeadElementProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLHeadElement>(
	"HTMLHeadElement",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<IHTMLHeadElement>(
	getState,
	setState,
	awaitedHandler,
);

export function HTMLHeadElementGenerator(
	HTMLElement: Constructable<IHTMLElement>,
) {
	return class HTMLHeadElement
		extends HTMLElement
		implements IHTMLHeadElement, PromiseLike<IHTMLHeadElement>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createHTMLHeadElement",
			});
		}

		public then<TResult1 = IHTMLHeadElement, TResult2 = never>(
			onfulfilled?:
				| ((value: IHTMLHeadElement) => PromiseLike<TResult1> | TResult1)
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
				HTMLHeadElementPropertyKeys,
				HTMLHeadElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLHeadElementProperties extends IHTMLElementProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;
}

export const HTMLHeadElementPropertyKeys = [...HTMLElementPropertyKeys];

export const HTMLHeadElementConstantKeys = [...HTMLElementConstantKeys];
