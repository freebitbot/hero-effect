import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLBaseElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLBaseElementIsolate,
	IHTMLBaseElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLBaseElementIsolate>(
	"HTMLBaseElementIsolate",
	getState,
	setState,
);

export default class HTMLBaseElementIsolate implements IHTMLBaseElementIsolate {
	public get href(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "href", false);
	}

	public get target(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "target", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLBaseElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly href?: Promise<string>;
	readonly target?: Promise<string>;
}

export const HTMLBaseElementIsolatePropertyKeys = ["href", "target"];

export const HTMLBaseElementIsolateConstantKeys = [];
