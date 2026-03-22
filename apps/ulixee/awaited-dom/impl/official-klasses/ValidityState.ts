import type { IValidityState } from "../../base/interfaces/official";
import {
	type IValidityStateProperties,
	ValidityStateGenerator,
} from "../../base/official-klasses/ValidityState";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IValidityState,
	IValidityStateProperties
>();
const ValidityStateBaseClass = ValidityStateGenerator();

export default class ValidityState
	extends ValidityStateBaseClass
	implements IValidityState {}
