import type { IMediaList } from "../../base/interfaces/official";
import {
	type IMediaListProperties,
	MediaListGenerator,
} from "../../base/official-klasses/MediaList";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IMediaList,
	IMediaListProperties
>();
const MediaListBaseClass = MediaListGenerator();

export default class MediaList
	extends MediaListBaseClass
	implements IMediaList {}
