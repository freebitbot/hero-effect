import type { IMediaError } from "../../base/interfaces/official";
import {
	type IMediaErrorProperties,
	MediaErrorGenerator,
} from "../../base/official-klasses/MediaError";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IMediaError,
	IMediaErrorProperties
>();
const MediaErrorBaseClass = MediaErrorGenerator();

export default class MediaError
	extends MediaErrorBaseClass
	implements IMediaError {}
