import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLLegendElementIsolate } from "../interfaces/isolate";
import type { IHTMLFormElement } from "../interfaces/official";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLLegendElementIsolate,
	IHTMLLegendElementIsolateProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLLegendElementIsolate>(
	"HTMLLegendElementIsolate",
	getState,
	setState,
);

export default class HTMLLegendElementIsolate
	implements IHTMLLegendElementIsolate
{
	public get align(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "align", false);
	}

	public get form(): IHTMLFormElement {
		throw new Error("HTMLLegendElementIsolate.form getter not implemented");
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLegendElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly align?: Promise<string>;
	readonly form?: IHTMLFormElement;
}

export const HTMLLegendElementIsolatePropertyKeys = ["align", "form"];

export const HTMLLegendElementIsolateConstantKeys = [];
