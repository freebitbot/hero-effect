import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ITimeRanges } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfTimeRanges } = StateMachine<
  ITimeRanges,
  ITimeRangesProperties,
  ITimeRangesReadonlyProperties
>('TimeRanges');
export const internalHandler = new InternalHandler<ITimeRanges>('TimeRanges', getState, setState);

export default class TimeRanges implements ITimeRanges {
  constructor() {
    initializeConstantsAndPrototypes<TimeRanges>(TimeRanges, this, internalHandler, TimeRangesConstantKeys, TimeRangesPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public end(index: number): number {
    return internalHandler.run<number>(this, 'end', [index]);
  }

  public start(index: number): number {
    return internalHandler.run<number>(this, 'start', [index]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ITimeRangesProperties {
  length?: number;
}

export interface ITimeRangesReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const TimeRangesPropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const TimeRangesConstantKeys = [];
