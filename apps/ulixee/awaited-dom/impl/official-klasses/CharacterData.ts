import type { ICharacterData } from "../../base/interfaces/official";
import {
	CharacterDataGenerator,
	type ICharacterDataProperties,
} from "../../base/official-klasses/CharacterData";
import StateMachine from "../../base/StateMachine";
import NonDocumentTypeChildNode from "../official-mixins/NonDocumentTypeChildNode";
import Node from "./Node";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ICharacterData,
	ICharacterDataProperties
>();
const CharacterDataBaseClass = CharacterDataGenerator(
	Node,
	NonDocumentTypeChildNode,
);

export default class CharacterData
	extends CharacterDataBaseClass
	implements ICharacterData
{
	constructor() {
		super();
	}
}
