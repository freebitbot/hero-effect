import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLCollectionIsolate } from "../interfaces/isolate";
import type { ISuperElement } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLCollectionIsolate,
	IHTMLCollectionIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLCollectionIsolate>(
	"HTMLCollectionIsolate",
	getState,
	setState,
);

export default class HTMLCollectionIsolate implements IHTMLCollectionIsolate {
	public namedItem(name: string): ISuperElement {
		throw new Error("HTMLCollectionIsolate.namedItem not implemented");
	}

	[index: number]: ISuperElement;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLCollectionIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLCollectionIsolatePropertyKeys = [];

export const HTMLCollectionIsolateConstantKeys = [];
