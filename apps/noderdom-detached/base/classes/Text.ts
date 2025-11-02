import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ICharacterData, ISlotable, IText } from '../interfaces';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties, CharacterDataPropertyKeys, CharacterDataConstantKeys } from './CharacterData';
import { ISlotableProperties, ISlotableReadonlyProperties, SlotablePropertyKeys, SlotableConstantKeys } from '../mixins/Slotable';

export const { getState, setState, setHiddenState, setReadonlyOfText } = StateMachine<
  IText,
  ITextProperties,
  ITextReadonlyProperties
>('Text');
export const internalHandler = new InternalHandler<IText>('Text', getState, setState);

// tslint:disable-next-line:variable-name
export function TextGenerator(CharacterData: Constructable<ICharacterData>, Slotable: Constructable<ISlotable>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(CharacterData, [Slotable]) as unknown) as Constructable<ICharacterData & ISlotable>;

  return class Text extends Parent implements IText {
    constructor(_data?: string) {
      super();
      initializeConstantsAndPrototypes<Text>(Text, this, internalHandler, TextConstantKeys, TextPropertyKeys);
    }

    // properties

    public get wholeText(): string {
      return internalHandler.get<string>(this, 'wholeText', false);
    }

    // methods

    public splitText(offset: number): IText {
      return internalHandler.run<IText>(this, 'splitText', [offset]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ITextProperties extends ICharacterDataProperties, ISlotableProperties {
  wholeText?: string;
}

export interface ITextReadonlyProperties extends ICharacterDataReadonlyProperties, ISlotableReadonlyProperties {
  wholeText?: string;
}

// tslint:disable-next-line:variable-name
export const TextPropertyKeys = [...CharacterDataPropertyKeys, ...SlotablePropertyKeys, 'wholeText'];

// tslint:disable-next-line:variable-name
export const TextConstantKeys = [...CharacterDataConstantKeys, ...SlotableConstantKeys];
