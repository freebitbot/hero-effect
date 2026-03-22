import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type { IHTMLTableSectionElementIsolate } from "../interfaces/isolate";
import type { ISuperHTMLCollection } from "../interfaces/super";
import StateMachine from "../StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTableSectionElementIsolate,
	IHTMLTableSectionElementIsolateProperties
>();
export const awaitedHandler =
	new AwaitedHandler<IHTMLTableSectionElementIsolate>(
		"HTMLTableSectionElementIsolate",
		getState,
		setState,
	);

export default class HTMLTableSectionElementIsolate
	implements IHTMLTableSectionElementIsolate
{
	public get align(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "align", false);
	}

	public get ch(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "ch", false);
	}

	public get chOff(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "chOff", false);
	}

	public get rows(): Promise<string> | ISuperHTMLCollection | Promise<number> {
		throw new Error(
			"HTMLTableSectionElementIsolate.rows getter not implemented",
		);
	}

	public get vAlign(): Promise<string> {
		return awaitedHandler.getProperty<string>(this, "vAlign", false);
	}
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTableSectionElementIsolateProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly align?: Promise<string>;
	readonly ch?: Promise<string>;
	readonly chOff?: Promise<string>;
	readonly rows?: Promise<string> | ISuperHTMLCollection | Promise<number>;
	readonly vAlign?: Promise<string>;
}

export const HTMLTableSectionElementIsolatePropertyKeys = [
	"align",
	"ch",
	"chOff",
	"rows",
	"vAlign",
];

export const HTMLTableSectionElementIsolateConstantKeys = [];
