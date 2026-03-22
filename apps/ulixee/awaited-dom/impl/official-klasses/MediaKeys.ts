import type { IMediaKeys } from "../../base/interfaces/official";
import {
	type IMediaKeysProperties,
	MediaKeysGenerator,
} from "../../base/official-klasses/MediaKeys";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IMediaKeys,
	IMediaKeysProperties
>();
const MediaKeysBaseClass = MediaKeysGenerator();

export default class MediaKeys
	extends MediaKeysBaseClass
	implements IMediaKeys {}
