import type { IHTMLMediaElementIsolate } from "../../base/interfaces/isolate";
import type {
	IAudioTrackList,
	IDOMTokenList,
	IMediaError,
	IMediaKeys,
	ITextTrackList,
	ITimeRanges,
	IVideoTrackList,
} from "../../base/interfaces/official";
import HTMLMediaElementIsolateBase, {
	type IHTMLMediaElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLMediaElementIsolate";
import StateMachine from "../../base/StateMachine";
import {
	createAudioTrackList,
	createDOMTokenList,
	createMediaError,
	createMediaKeys,
	createTextTrackList,
	createTimeRanges,
	createVideoTrackList,
} from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLMediaElementIsolate,
	IHTMLMediaElementIsolateProperties
>();

export default class HTMLMediaElementIsolate
	extends HTMLMediaElementIsolateBase
	implements IHTMLMediaElementIsolate
{
	public get audioTracks(): IAudioTrackList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createAudioTrackList(
			awaitedPath.addProperty(this, "audioTracks"),
			awaitedOptions,
		);
	}

	public get buffered(): ITimeRanges {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createTimeRanges(
			awaitedPath.addProperty(this, "buffered"),
			awaitedOptions,
		);
	}

	public get controlsList(): IDOMTokenList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createDOMTokenList(
			awaitedPath.addProperty(this, "controlsList"),
			awaitedOptions,
		);
	}

	public get error(): IMediaError {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createMediaError(
			awaitedPath.addProperty(this, "error"),
			awaitedOptions,
		);
	}

	public get mediaKeys(): IMediaKeys {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createMediaKeys(
			awaitedPath.addProperty(this, "mediaKeys"),
			awaitedOptions,
		);
	}

	public get played(): ITimeRanges {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createTimeRanges(
			awaitedPath.addProperty(this, "played"),
			awaitedOptions,
		);
	}

	public get seekable(): ITimeRanges {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createTimeRanges(
			awaitedPath.addProperty(this, "seekable"),
			awaitedOptions,
		);
	}

	public get textTracks(): ITextTrackList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createTextTrackList(
			awaitedPath.addProperty(this, "textTracks"),
			awaitedOptions,
		);
	}

	public get videoTracks(): IVideoTrackList {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createVideoTrackList(
			awaitedPath.addProperty(this, "videoTracks"),
			awaitedOptions,
		);
	}
}
