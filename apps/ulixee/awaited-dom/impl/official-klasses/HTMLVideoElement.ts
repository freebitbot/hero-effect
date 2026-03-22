import type {
	IHTMLVideoElement,
	IVideoPlaybackQuality,
} from "../../base/interfaces/official";
import {
	HTMLVideoElementGenerator,
	type IHTMLVideoElementProperties,
} from "../../base/official-klasses/HTMLVideoElement";
import StateMachine from "../../base/StateMachine";
import { createVideoPlaybackQuality } from "../create";
import HTMLMediaElement from "./HTMLMediaElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLVideoElement,
	IHTMLVideoElementProperties
>();
const HTMLVideoElementBaseClass = HTMLVideoElementGenerator(HTMLMediaElement);

export default class HTMLVideoElement
	extends HTMLVideoElementBaseClass
	implements IHTMLVideoElement
{
	constructor() {
		super();
	}

	// methods

	public getVideoPlaybackQuality(): IVideoPlaybackQuality {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createVideoPlaybackQuality(
			awaitedPath.addMethod(this, "getVideoPlaybackQuality"),
			awaitedOptions,
		);
	}
}
