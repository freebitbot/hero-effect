import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISupportedType, IDocument, IDOMParser } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfDOMParser } = StateMachine<
  IDOMParser,
  IDOMParserProperties,
  IDOMParserReadonlyProperties
>('DOMParser');
export const internalHandler = new InternalHandler<IDOMParser>('DOMParser', getState, setState);

export default class DOMParser implements IDOMParser {
  constructor() {
    initializeConstantsAndPrototypes<DOMParser>(DOMParser, this, internalHandler, DOMParserConstantKeys, DOMParserPropertyKeys);
  }

  // methods

  public parseFromString(str: string, type: ISupportedType): IDocument {
    return internalHandler.run<IDocument>(this, 'parseFromString', [str, type]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMParserProperties {}

export interface IDOMParserReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const DOMParserPropertyKeys = [];

// tslint:disable-next-line:variable-name
export const DOMParserConstantKeys = [];
