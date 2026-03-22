import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLTemplateElementIsolate } from "../interfaces/isolate";
import type { IDocumentFragment } from "../interfaces/official";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTemplateElementIsolate,
	IHTMLTemplateElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLTemplateElementIsolate>(
	"HTMLTemplateElementIsolate",
	getState,
	setState,
);

export default class HTMLTemplateElementIsolate
	implements IHTMLTemplateElementIsolate
{
	public get content(): Promise<string> | IDocumentFragment {
		throw new Error(
			"HTMLTemplateElementIsolate.content getter not implemented",
		);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTemplateElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly content?: Promise<string> | IDocumentFragment;
}

export const HTMLTemplateElementIsolatePropertyKeys = ["content"];

export const HTMLTemplateElementIsolateConstantKeys = [];
