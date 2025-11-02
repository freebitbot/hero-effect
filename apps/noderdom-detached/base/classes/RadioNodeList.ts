import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INodeList, IRadioNodeList } from '../interfaces';
import { INodeListProperties, INodeListReadonlyProperties, NodeListPropertyKeys, NodeListConstantKeys } from './NodeList';

export const { getState, setState, setHiddenState, setReadonlyOfRadioNodeList } = StateMachine<
  IRadioNodeList,
  IRadioNodeListProperties,
  IRadioNodeListReadonlyProperties
>('RadioNodeList');
export const internalHandler = new InternalHandler<IRadioNodeList>('RadioNodeList', getState, setState);

// tslint:disable-next-line:variable-name
export function RadioNodeListGenerator(NodeList: Constructable<INodeList>) {
  return class RadioNodeList extends NodeList implements IRadioNodeList {
    constructor() {
      super();
      initializeConstantsAndPrototypes<RadioNodeList>(RadioNodeList, this, internalHandler, RadioNodeListConstantKeys, RadioNodeListPropertyKeys);
    }

    // properties

    public get value(): string {
      return internalHandler.get<string>(this, 'value', false);
    }

    public set value(value: string) {
      internalHandler.set<string>(this, 'value', value);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IRadioNodeListProperties extends INodeListProperties {
  value?: string;
}

export interface IRadioNodeListReadonlyProperties extends INodeListReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const RadioNodeListPropertyKeys = [...NodeListPropertyKeys, 'value'];

// tslint:disable-next-line:variable-name
export const RadioNodeListConstantKeys = [...NodeListConstantKeys];
