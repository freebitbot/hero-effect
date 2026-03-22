import type { IHTMLVideoElementIsolate } from "../../base/interfaces/isolate";
import type { IVideoPlaybackQuality } from "../../base/interfaces/official";
import HTMLVideoElementIsolateBase, {
	type IHTMLVideoElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLVideoElementIsolate";
import StateMachine from "../../base/StateMachine";
import { createVideoPlaybackQuality } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLVideoElementIsolate,
	IHTMLVideoElementIsolateProperties
>();

export default class HTMLVideoElementIsolate
	extends HTMLVideoElementIsolateBase
	implements IHTMLVideoElementIsolate
{
	public getVideoPlaybackQuality(): IVideoPlaybackQuality {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createVideoPlaybackQuality(
			awaitedPath.addMethod(this, "getVideoPlaybackQuality"),
			awaitedOptions,
		);
	}
}
