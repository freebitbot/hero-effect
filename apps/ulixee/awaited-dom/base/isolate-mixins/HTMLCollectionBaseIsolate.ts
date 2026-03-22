import AwaitedHandler from "../AwaitedHandler";
import AwaitedIterator from "../AwaitedIterator";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLCollectionBaseIsolate } from "../interfaces/isolate";
import type { ISuperElement } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLCollectionBaseIsolate,
	IHTMLCollectionBaseIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollectionBaseIsolate>(
	"HTMLCollectionBaseIsolate",
	getState,
	setState,
);
export const awaitedIterator = new AwaitedIterator<
	IHTMLCollectionBaseIsolate,
	ISuperElement
>(getState, setState, awaitedHandler);

export default class HTMLCollectionBaseIsolate
	implements IHTMLCollectionBaseIsolate
{
	public get length(): Promise<number> {
		return awaitedHandler.getProperty<number>(this, "length", false);
	}

	// methods

	public item(index: number): ISuperElement {
		throw new Error("HTMLCollectionBaseIsolate.item not implemented");
	}

	public [Symbol.iterator](): Iterator<ISuperElement> {
		return awaitedIterator.iterateNodePointers(this);
	}

	[index: number]: ISuperElement;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionBaseIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	createInstanceName: string;
	createIterableName: string;

	readonly length?: Promise<number>;
}

export const HTMLCollectionBaseIsolatePropertyKeys = ["length"];

export const HTMLCollectionBaseIsolateConstantKeys = [];
