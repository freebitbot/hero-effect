import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IAbstractRange, IStaticRangeInit, IStaticRange } from '../interfaces';
import { IAbstractRangeProperties, IAbstractRangeReadonlyProperties, AbstractRangePropertyKeys, AbstractRangeConstantKeys } from './AbstractRange';

export const { getState, setState, setHiddenState, setReadonlyOfStaticRange } = StateMachine<
  IStaticRange,
  IStaticRangeProperties,
  IStaticRangeReadonlyProperties
>('StaticRange');
export const internalHandler = new InternalHandler<IStaticRange>('StaticRange', getState, setState);

// tslint:disable-next-line:variable-name
export function StaticRangeGenerator(AbstractRange: Constructable<IAbstractRange>) {
  return class StaticRange extends AbstractRange implements IStaticRange {
    constructor(_init: IStaticRangeInit) {
      super();
      initializeConstantsAndPrototypes<StaticRange>(StaticRange, this, internalHandler, StaticRangeConstantKeys, StaticRangePropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IStaticRangeProperties extends IAbstractRangeProperties {}

export interface IStaticRangeReadonlyProperties extends IAbstractRangeReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const StaticRangePropertyKeys = [...AbstractRangePropertyKeys];

// tslint:disable-next-line:variable-name
export const StaticRangeConstantKeys = [...AbstractRangeConstantKeys];
