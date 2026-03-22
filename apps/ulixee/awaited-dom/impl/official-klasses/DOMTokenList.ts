import type { IDOMTokenList } from "../../base/interfaces/official";
import {
	DOMTokenListGenerator,
	type IDOMTokenListProperties,
} from "../../base/official-klasses/DOMTokenList";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDOMTokenList,
	IDOMTokenListProperties
>();
const DOMTokenListBaseClass = DOMTokenListGenerator();

export default class DOMTokenList
	extends DOMTokenListBaseClass
	implements IDOMTokenList {}
