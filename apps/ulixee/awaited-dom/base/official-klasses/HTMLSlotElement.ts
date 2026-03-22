import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IAssignedNodesOptions,
	IHTMLElement,
	IHTMLSlotElement,
} from "../interfaces/official";
import type { ISuperElement, ISuperNode } from "../interfaces/super";
import NodeFactory from "../NodeFactory";
import StateMachine from "../StateMachine";
import {
	HTMLElementConstantKeys,
	HTMLElementPropertyKeys,
	type IHTMLElementProperties,
} from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLSlotElement,
	IHTMLSlotElementProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLSlotElement>(
	"HTMLSlotElement",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<IHTMLSlotElement>(
	getState,
	setState,
	awaitedHandler,
);

export function HTMLSlotElementGenerator(
	HTMLElement: Constructable<IHTMLElement>,
) {
	return class HTMLSlotElement
		extends HTMLElement
		implements IHTMLSlotElement, PromiseLike<IHTMLSlotElement>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createHTMLSlotElement",
			});
		}

		// properties

		public get name(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "name", false);
		}

		// methods

		public assignedElements(
			options?: IAssignedNodesOptions,
		): Promise<Iterable<ISuperElement>> {
			return awaitedHandler.runMethod<Iterable<ISuperElement>>(
				this,
				"assignedElements",
				[options],
			);
		}

		public assignedNodes(
			options?: IAssignedNodesOptions,
		): Promise<Iterable<ISuperNode>> {
			return awaitedHandler.runMethod<Iterable<ISuperNode>>(
				this,
				"assignedNodes",
				[options],
			);
		}

		public then<TResult1 = IHTMLSlotElement, TResult2 = never>(
			onfulfilled?:
				| ((value: IHTMLSlotElement) => PromiseLike<TResult1> | TResult1)
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
				HTMLSlotElementPropertyKeys,
				HTMLSlotElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLSlotElementProperties extends IHTMLElementProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;

	readonly name?: Promise<string>;
}

export const HTMLSlotElementPropertyKeys = [...HTMLElementPropertyKeys, "name"];

export const HTMLSlotElementConstantKeys = [...HTMLElementConstantKeys];
