import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type { IHTMLElement, IHTMLFrameElement } from "../interfaces/official";
import type { ISuperDocument } from "../interfaces/super";
import NodeFactory from "../NodeFactory";
import StateMachine from "../StateMachine";
import {
	HTMLElementConstantKeys,
	HTMLElementPropertyKeys,
	type IHTMLElementProperties,
} from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFrameElement,
	IHTMLFrameElementProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLFrameElement>(
	"HTMLFrameElement",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<IHTMLFrameElement>(
	getState,
	setState,
	awaitedHandler,
);

export function HTMLFrameElementGenerator(
	HTMLElement: Constructable<IHTMLElement>,
) {
	return class HTMLFrameElement
		extends HTMLElement
		implements IHTMLFrameElement, PromiseLike<IHTMLFrameElement>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createHTMLFrameElement",
			});
		}

		// properties

		public get contentDocument(): ISuperDocument {
			throw new Error(
				"HTMLFrameElement.contentDocument getter not implemented",
			);
		}

		public get frameBorder(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "frameBorder", false);
		}

		public get longDesc(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "longDesc", false);
		}

		public get marginHeight(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "marginHeight", false);
		}

		public get marginWidth(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "marginWidth", false);
		}

		public get name(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "name", false);
		}

		public get noResize(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "noResize", false);
		}

		public get scrolling(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "scrolling", false);
		}

		public get src(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "src", false);
		}

		public then<TResult1 = IHTMLFrameElement, TResult2 = never>(
			onfulfilled?:
				| ((value: IHTMLFrameElement) => PromiseLike<TResult1> | TResult1)
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
				HTMLFrameElementPropertyKeys,
				HTMLFrameElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFrameElementProperties extends IHTMLElementProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;

	readonly contentDocument?: ISuperDocument;
	readonly frameBorder?: Promise<string>;
	readonly longDesc?: Promise<string>;
	readonly marginHeight?: Promise<string>;
	readonly marginWidth?: Promise<string>;
	readonly name?: Promise<string>;
	readonly noResize?: Promise<boolean>;
	readonly scrolling?: Promise<string>;
	readonly src?: Promise<string>;
}

export const HTMLFrameElementPropertyKeys = [
	...HTMLElementPropertyKeys,
	"contentDocument",
	"frameBorder",
	"longDesc",
	"marginHeight",
	"marginWidth",
	"name",
	"noResize",
	"scrolling",
	"src",
];

export const HTMLFrameElementConstantKeys = [...HTMLElementConstantKeys];
