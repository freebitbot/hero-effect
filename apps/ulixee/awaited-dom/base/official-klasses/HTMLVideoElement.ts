import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type {
	IHTMLMediaElement,
	IHTMLVideoElement,
	IVideoPlaybackQuality,
} from "../interfaces/official";
import StateMachine from "../StateMachine";
import {
	HTMLMediaElementConstantKeys,
	HTMLMediaElementPropertyKeys,
	type IHTMLMediaElementProperties,
} from "./HTMLMediaElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLVideoElement,
	IHTMLVideoElementProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLVideoElement>(
	"HTMLVideoElement",
	getState,
	setState,
);

export function HTMLVideoElementGenerator(
	HTMLMediaElement: Constructable<IHTMLMediaElement>,
) {
	return class HTMLVideoElement
		extends HTMLMediaElement
		implements IHTMLVideoElement
	{
		constructor() {
			super();
		}

		// properties

		public get height(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "height", false);
		}

		public get poster(): Promise<string> {
			return awaitedHandler.getProperty<string>(this, "poster", false);
		}

		public get videoHeight(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "videoHeight", false);
		}

		public get videoWidth(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "videoWidth", false);
		}

		public get width(): Promise<number> {
			return awaitedHandler.getProperty<number>(this, "width", false);
		}

		// methods

		public getVideoPlaybackQuality(): IVideoPlaybackQuality {
			throw new Error(
				"HTMLVideoElement.getVideoPlaybackQuality not implemented",
			);
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				HTMLVideoElementPropertyKeys,
				HTMLVideoElementConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLVideoElementProperties
	extends IHTMLMediaElementProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
	readonly height?: Promise<number>;
	readonly poster?: Promise<string>;
	readonly videoHeight?: Promise<number>;
	readonly videoWidth?: Promise<number>;
	readonly width?: Promise<number>;
}

export const HTMLVideoElementPropertyKeys = [
	...HTMLMediaElementPropertyKeys,
	"height",
	"poster",
	"videoHeight",
	"videoWidth",
	"width",
];

export const HTMLVideoElementConstantKeys = [...HTMLMediaElementConstantKeys];
