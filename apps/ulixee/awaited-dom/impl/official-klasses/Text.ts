import type { IText } from "../../base/interfaces/official";
import {
	type ITextProperties,
	TextGenerator,
} from "../../base/official-klasses/Text";
import StateMachine from "../../base/StateMachine";
import Slotable from "../official-mixins/Slotable";
import CharacterData from "./CharacterData";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IText, ITextProperties>();
const TextBaseClass = TextGenerator(CharacterData, Slotable);

export default class Text extends TextBaseClass implements IText {
	constructor(_data?: string) {
		super(_data);
	}
}
