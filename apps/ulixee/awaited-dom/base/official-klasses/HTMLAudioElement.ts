import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IHTMLAudioElement,
	IHTMLMediaElement,
} from "../interfaces/official";
import StateMachine from "../StateMachine";
import {
	HTMLMediaElementConstantKeys,
	HTMLMediaElementPropertyKeys,
	type IHTMLMediaElementProperties,
} from "./HTMLMediaElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLAudioElement,
	IHTMLAudioElementProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLAudioElement>(
	"HTMLAudioElement",
	getState,
	setState,
);

export function HTMLAudioElementGenerator(
	HTMLMediaElement: Constructable<IHTMLMediaElement>,
) {
	return class HTMLAudioElement
		extends HTMLMediaElement
		implements IHTMLAudioElement
	{
		constructor() {
			super();
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				HTMLAudioElementPropertyKeys,
				HTMLAudioElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAudioElementProperties
	extends IHTMLMediaElementProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLAudioElementPropertyKeys = [...HTMLMediaElementPropertyKeys];

export const HTMLAudioElementConstantKeys = [...HTMLMediaElementConstantKeys];
