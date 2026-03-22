import type { ITimeRanges } from "../../base/interfaces/official";
import {
	type ITimeRangesProperties,
	TimeRangesGenerator,
} from "../../base/official-klasses/TimeRanges";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	ITimeRanges,
	ITimeRangesProperties
>();
const TimeRangesBaseClass = TimeRangesGenerator();

export default class TimeRanges
	extends TimeRangesBaseClass
	implements ITimeRanges {}
