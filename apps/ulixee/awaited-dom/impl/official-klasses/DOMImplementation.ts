import type { IDOMImplementation } from "../../base/interfaces/official";
import {
	DOMImplementationGenerator,
	type IDOMImplementationProperties,
} from "../../base/official-klasses/DOMImplementation";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IDOMImplementation,
	IDOMImplementationProperties
>();
const DOMImplementationBaseClass = DOMImplementationGenerator();

export default class DOMImplementation
	extends DOMImplementationBaseClass
	implements IDOMImplementation {}
