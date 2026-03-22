import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLParagraphElementIsolate } from "../interfaces/isolate";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLParagraphElementIsolate,
	IHTMLParagraphElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLParagraphElementIsolate>(
	"HTMLParagraphElementIsolate",
	getState,
	setState,
);

export default class HTMLParagraphElementIsolate
	implements IHTMLParagraphElementIsolate
{
	public get align(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "align", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLParagraphElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly align?: Promise<string>;
}

export const HTMLParagraphElementIsolatePropertyKeys = ["align"];

export const HTMLParagraphElementIsolateConstantKeys = [];
