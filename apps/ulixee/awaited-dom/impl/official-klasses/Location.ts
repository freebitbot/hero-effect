import type { ILocation } from "../../base/interfaces/official";
import {
	type ILocationProperties,
	LocationGenerator,
} from "../../base/official-klasses/Location";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ILocation,
	ILocationProperties
>();
const LocationBaseClass = LocationGenerator();

export default class Location extends LocationBaseClass implements ILocation {}
