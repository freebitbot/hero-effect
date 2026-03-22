import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import ClassMixer from "../ClassMixer";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IDOMTokenList,
	IHTMLAreaElement,
	IHTMLElement,
	IHTMLHyperlinkElementUtils,
} from "../interfaces/official";
import NodeFactory from "../NodeFactory";
import {
	HTMLHyperlinkElementUtilsConstantKeys,
	HTMLHyperlinkElementUtilsPropertyKeys,
	type IHTMLHyperlinkElementUtilsProperties,
} from "../official-mixins/HTMLHyperlinkElementUtils";
import StateMachine from "../StateMachine";
import {
	HTMLElementConstantKeys,
	HTMLElementPropertyKeys,
	type IHTMLElementProperties,
} from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAreaElement,
	IHTMLAreaElementProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLAreaElement>(
	"HTMLAreaElement",
	getState,
	setState,
);
export const nodeFactory = new NodeFactory<IHTMLAreaElement>(
	getState,
	setState,
	awaitedHandler,
);

export function HTMLAreaElementGenerator(
	HTMLElement: Constructable<IHTMLElement>,
	HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>,
) {
	const Parent = ClassMixer(HTMLElement, [
		HTMLHyperlinkElementUtils,
	]) as unknown as Constructable<IHTMLElement & IHTMLHyperlinkElementUtils>;

	return class HTMLAreaElement
		extends Parent
		implements IHTMLAreaElement, PromiseLike<IHTMLAreaElement>
	{
		constructor() {
			super();
			setState(this, {
				createInstanceName: "createHTMLAreaElement",
			});
		}

		// properties

		public get alt(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "alt", false);
		}

		public get coords(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "coords", false);
		}

		public get download(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "download", false);
		}

		public get hreflang(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "hreflang", false);
		}

		public get noHref(): Promise<boolean> {
			return awaitedHandler.getProperty<boolean>(this, "noHref", false);
		}

		public get referrerPolicy(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "referrerPolicy", false);
		}

		public get rel(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "rel", false);
		}

		public get relList(): IDOMTokenList {
			throw new Error("HTMLAreaElement.relList getter not implemented");
		}

		public get shape(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "shape", false);
		}

		public get target(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "target", false);
		}

		public get type(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "type", false);
		}

		public then<TResult1 = IHTMLAreaElement, TResult2 = never>(
			onfulfilled?:
				| ((value: IHTMLAreaElement) => PromiseLike<TResult1> | TResult1)
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
				HTMLAreaElementPropertyKeys,
				HTMLAreaElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAreaElementProperties
	extends IHTMLElementProperties,
		IHTMLHyperlinkElementUtilsProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;

	readonly alt?: Promise<string>;
	readonly coords?: Promise<string>;
	readonly download?: Promise<string>;
	readonly hreflang?: Promise<string>;
	readonly noHref?: Promise<boolean>;
	readonly referrerPolicy?: Promise<string>;
	readonly rel?: Promise<string>;
	readonly relList?: IDOMTokenList;
	readonly shape?: Promise<string>;
	readonly target?: Promise<string>;
	readonly type?: Promise<string>;
}

export const HTMLAreaElementPropertyKeys = [
	...HTMLElementPropertyKeys,
	...HTMLHyperlinkElementUtilsPropertyKeys,
	"alt",
	"coords",
	"download",
	"hreflang",
	"noHref",
	"referrerPolicy",
	"rel",
	"relList",
	"shape",
	"target",
	"type",
];

export const HTMLAreaElementConstantKeys = [
	...HTMLElementConstantKeys,
	...HTMLHyperlinkElementUtilsConstantKeys,
];
