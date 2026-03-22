import type { IDOMRectReadOnly } from "../../base/interfaces/official";
import {
	DOMRectReadOnlyGenerator,
	type IDOMRectReadOnlyProperties,
} from "../../base/official-klasses/DOMRectReadOnly";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDOMRectReadOnly,
	IDOMRectReadOnlyProperties
>();
const DOMRectReadOnlyBaseClass = DOMRectReadOnlyGenerator();

export default class DOMRectReadOnly
	extends DOMRectReadOnlyBaseClass
	implements IDOMRectReadOnly {}
