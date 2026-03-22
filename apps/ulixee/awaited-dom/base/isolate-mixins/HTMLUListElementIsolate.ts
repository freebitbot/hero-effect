import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLUListElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLUListElementIsolate,
	IHTMLUListElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLUListElementIsolate>(
	"HTMLUListElementIsolate",
	getState,
	setState,
);

export default class HTMLUListElementIsolate
	implements IHTMLUListElementIsolate
{
	public get compact(): Promise<boolean> {
		return awaitedHandler.getProperty<boolean>(this, "compact", false);
	}

	public get type(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "type", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLUListElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly compact?: Promise<boolean>;
	readonly type?: Promise<string>;
}

export const HTMLUListElementIsolatePropertyKeys = ["compact", "type"];

export const HTMLUListElementIsolateConstantKeys = [];
