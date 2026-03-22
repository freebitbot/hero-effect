import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLFrameSetElementIsolate } from "../interfaces/isolate";
import type { ISuperHTMLCollection } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLFrameSetElementIsolate,
	IHTMLFrameSetElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLFrameSetElementIsolate>(
	"HTMLFrameSetElementIsolate",
	getState,
	setState,
);

export default class HTMLFrameSetElementIsolate
	implements IHTMLFrameSetElementIsolate
{
	public get cols(): Promise<string> | Promise<number> {
		return awaitedHandler.getProperty<string>(this, "cols", false);
	}

	public get rows(): Promise<string> | ISuperHTMLCollection | Promise<number> {
		return awaitedHandler.getProperty<string>(this, "rows", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLFrameSetElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly cols?: Promise<string> | Promise<number>;
	readonly rows?: Promise<string> | ISuperHTMLCollection | Promise<number>;
}

export const HTMLFrameSetElementIsolatePropertyKeys = ["cols", "rows"];

export const HTMLFrameSetElementIsolateConstantKeys = [];
