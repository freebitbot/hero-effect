import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IText, ICDATASection } from '../interfaces';
import { ITextProperties, ITextReadonlyProperties, TextPropertyKeys, TextConstantKeys } from './Text';

export const { getState, setState, setHiddenState, setReadonlyOfCDATASection } = StateMachine<
  ICDATASection,
  ICDATASectionProperties,
  ICDATASectionReadonlyProperties
>('CDATASection');
export const internalHandler = new InternalHandler<ICDATASection>('CDATASection', getState, setState);

// tslint:disable-next-line:variable-name
export function CDATASectionGenerator(Text: Constructable<IText>) {
  return class CDATASection extends Text implements ICDATASection {constructor() {
      super();
      initializeConstantsAndPrototypes<CDATASection>(CDATASection, this, internalHandler, CDATASectionConstantKeys, CDATASectionPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ICDATASectionProperties extends ITextProperties {}

export interface ICDATASectionReadonlyProperties extends ITextReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const CDATASectionPropertyKeys = [...TextPropertyKeys];

// tslint:disable-next-line:variable-name
export const CDATASectionConstantKeys = [...TextConstantKeys];
