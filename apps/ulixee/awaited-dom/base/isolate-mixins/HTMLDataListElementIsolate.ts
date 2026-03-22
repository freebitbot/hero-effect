import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLDataListElementIsolate } from "../interfaces/isolate";
import type { IHTMLOptionsCollection } from "../interfaces/official";
import type { ISuperHTMLCollection } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDataListElementIsolate,
	IHTMLDataListElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLDataListElementIsolate>(
	"HTMLDataListElementIsolate",
	getState,
	setState,
);

export default class HTMLDataListElementIsolate
	implements IHTMLDataListElementIsolate
{
	public get options(): Promise<ISuperHTMLCollection> | IHTMLOptionsCollection {
		return awaitedHandler.getProperty<ISuperHTMLCollection>(
			this,
			"options",
			false,
		);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDataListElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly options?: Promise<ISuperHTMLCollection> | IHTMLOptionsCollection;
}

export const HTMLDataListElementIsolatePropertyKeys = ["options"];

export const HTMLDataListElementIsolateConstantKeys = [];
