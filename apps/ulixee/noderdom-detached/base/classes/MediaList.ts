import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IMediaList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfMediaList } = StateMachine<
  IMediaList,
  IMediaListProperties,
  IMediaListReadonlyProperties
>('MediaList');
export const internalHandler = new InternalHandler<IMediaList>('MediaList', getState, setState);

export default class MediaList implements IMediaList {
  constructor() {
    initializeConstantsAndPrototypes<MediaList>(MediaList, this, internalHandler, MediaListConstantKeys, MediaListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  public get mediaText(): string {
    return internalHandler.get<string>(this, 'mediaText', false);
  }

  public set mediaText(value: string) {
    internalHandler.set<string>(this, 'mediaText', value);
  }

  // methods

  public appendMedium(medium: string): void {
    internalHandler.run<void>(this, 'appendMedium', [medium]);
  }

  public deleteMedium(medium: string): void {
    internalHandler.run<void>(this, 'deleteMedium', [medium]);
  }

  public item(index: number): string | null {
    return internalHandler.run<string | null>(this, 'item', [index]);
  }

  public toString(): string {
    return internalHandler.run<string>(this, 'string', []);
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return internalHandler.run<IterableIterator<string>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: string;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IMediaListProperties {
  length?: number;
  mediaText?: string;
}

export interface IMediaListReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const MediaListPropertyKeys = ['length', 'mediaText'];

// tslint:disable-next-line:variable-name
export const MediaListConstantKeys = [];
