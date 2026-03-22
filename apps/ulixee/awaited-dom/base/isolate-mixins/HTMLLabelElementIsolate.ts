import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLLabelElementIsolate } from "../interfaces/isolate";
import type { IHTMLFormElement } from "../interfaces/official";
import type { ISuperHTMLElement } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLabelElementIsolate,
	IHTMLLabelElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLLabelElementIsolate>(
	"HTMLLabelElementIsolate",
	getState,
	setState,
);

export default class HTMLLabelElementIsolate
	implements IHTMLLabelElementIsolate
{
	public get control(): ISuperHTMLElement {
		throw new Error("HTMLLabelElementIsolate.control getter not implemented");
	}

	public get form(): IHTMLFormElement {
		throw new Error("HTMLLabelElementIsolate.form getter not implemented");
	}

	public get htmlFor(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "htmlFor", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLabelElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly control?: ISuperHTMLElement;
	readonly form?: IHTMLFormElement;
	readonly htmlFor?: Promise<string>;
}

export const HTMLLabelElementIsolatePropertyKeys = [
	"control",
	"form",
	"htmlFor",
];

export const HTMLLabelElementIsolateConstantKeys = [];
