import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLStyleElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLStyleElementIsolate,
	IHTMLStyleElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLStyleElementIsolate>(
	"HTMLStyleElementIsolate",
	getState,
	setState,
);

export default class HTMLStyleElementIsolate
	implements IHTMLStyleElementIsolate
{
	public get media(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "media", false);
	}

	public get type(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "type", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLStyleElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly media?: Promise<string>;
	readonly type?: Promise<string>;
}

export const HTMLStyleElementIsolatePropertyKeys = ["media", "type"];

export const HTMLStyleElementIsolateConstantKeys = [];
