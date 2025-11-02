import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ITextTrackCue, ITextTrackCueList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfTextTrackCueList } = StateMachine<
  ITextTrackCueList,
  ITextTrackCueListProperties,
  ITextTrackCueListReadonlyProperties
>('TextTrackCueList');
export const internalHandler = new InternalHandler<ITextTrackCueList>('TextTrackCueList', getState, setState);

export default class TextTrackCueList implements ITextTrackCueList {
  constructor() {
    initializeConstantsAndPrototypes<TextTrackCueList>(TextTrackCueList, this, internalHandler, TextTrackCueListConstantKeys, TextTrackCueListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public getCueById(id: string): ITextTrackCue | null {
    return internalHandler.run<ITextTrackCue | null>(this, 'getCueById', [id]);
  }

  public [Symbol.iterator](): IterableIterator<ITextTrackCue> {
    return internalHandler.run<IterableIterator<ITextTrackCue>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: ITextTrackCue;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ITextTrackCueListProperties {
  length?: number;
}

export interface ITextTrackCueListReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const TextTrackCueListPropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const TextTrackCueListConstantKeys = [];
