import type { ICharacterDataIsolate } from "../../base/interfaces/isolate";
import CharacterDataIsolateBase, {
	type ICharacterDataIsolateProperties,
} from "../../base/isolate-mixins/CharacterDataIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ICharacterDataIsolate,
	ICharacterDataIsolateProperties
>();

export default class CharacterDataIsolate
	extends CharacterDataIsolateBase
	implements ICharacterDataIsolate {}
