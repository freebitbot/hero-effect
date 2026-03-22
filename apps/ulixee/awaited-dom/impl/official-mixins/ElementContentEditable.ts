import type { IElementContentEditable } from "../../base/interfaces/official";
import ElementContentEditableBase, {
	type IElementContentEditableProperties,
} from "../../base/official-mixins/ElementContentEditable";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IElementContentEditable,
	IElementContentEditableProperties
>();

export default class ElementContentEditable
	extends ElementContentEditableBase
	implements IElementContentEditable {}
