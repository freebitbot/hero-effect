import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ICharacterData, IProcessingInstruction } from '../interfaces';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from './CharacterData';

export const { getState, setState, setHiddenState, setReadonlyOfProcessingInstruction } = StateMachine<
  IProcessingInstruction,
  IProcessingInstructionProperties,
  IProcessingInstructionReadonlyProperties
>('ProcessingInstruction');
export const internalHandler = new InternalHandler<IProcessingInstruction>('ProcessingInstruction', getState, setState);

// tslint:disable-next-line:variable-name
export function ProcessingInstructionGenerator(CharacterData: Constructable<ICharacterData>) {
  return class ProcessingInstruction extends CharacterData implements IProcessingInstruction {
    constructor() {
      super();
      initializeConstantsAndPrototypes<ProcessingInstruction>(ProcessingInstruction, this, internalHandler, ProcessingInstructionConstantKeys, ProcessingInstructionPropertyKeys);
    }

    // properties

    public get target(): string {
      return internalHandler.get<string>(this, 'target', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IProcessingInstructionProperties extends ICharacterDataProperties {
  target?: string;
}

export interface IProcessingInstructionReadonlyProperties extends ICharacterDataReadonlyProperties {
  target?: string;
}

// tslint:disable-next-line:variable-name
export const ProcessingInstructionPropertyKeys = [...CharacterDataPropertyKeys, 'target'];

// tslint:disable-next-line:variable-name
export const ProcessingInstructionConstantKeys = [...CharacterDataConstantKeys];
