import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventTarget, ITextTrackListEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITextTrack, IEvent, ITextTrackList } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties, EventTargetPropertyKeys, EventTargetConstantKeys } from './EventTarget';

export const { getState, setState, setHiddenState, setReadonlyOfTextTrackList } = StateMachine<
  ITextTrackList,
  ITextTrackListProperties,
  ITextTrackListReadonlyProperties
>('TextTrackList');
export const internalHandler = new InternalHandler<ITextTrackList>('TextTrackList', getState, setState);

// tslint:disable-next-line:variable-name
export function TextTrackListGenerator(EventTarget: Constructable<IEventTarget>) {
  return class TextTrackList extends EventTarget implements ITextTrackList {
    constructor() {
      super();
      initializeConstantsAndPrototypes<TextTrackList>(TextTrackList, this, internalHandler, TextTrackListConstantKeys, TextTrackListPropertyKeys);
    }

    // properties

    public get length(): number {
      return internalHandler.get<number>(this, 'length', false);
    }

    public get onaddtrack(): ((this: ITextTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', true);
    }

    public set onaddtrack(value: ((this: ITextTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', value);
    }

    public get onchange(): ((this: ITextTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onchange', true);
    }

    public set onchange(value: ((this: ITextTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onchange', value);
    }

    public get onremovetrack(): ((this: ITextTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', true);
    }

    public set onremovetrack(value: ((this: ITextTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: ITextTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', value);
    }

    // methods

    public getTrackById(id: string): ITextTrack | null {
      return internalHandler.run<ITextTrack | null>(this, 'getTrackById', [id]);
    }

    public addEventListener<K extends keyof ITextTrackListEventMap>(type: K, listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof ITextTrackListEventMap>(type: K, listener: (this: ITextTrackList, ev: ITextTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }

    public [Symbol.iterator](): IterableIterator<ITextTrack> {
      return internalHandler.run<IterableIterator<ITextTrack>>(this, '[Symbol.iterator]', []);
    }

    [index: number]: ITextTrack;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ITextTrackListProperties extends IEventTargetProperties {
  length?: number;
  onaddtrack?: ((this: ITextTrackList, ev: IEvent) => any) | null;
  onchange?: ((this: ITextTrackList, ev: IEvent) => any) | null;
  onremovetrack?: ((this: ITextTrackList, ev: IEvent) => any) | null;
}

export interface ITextTrackListReadonlyProperties extends IEventTargetReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const TextTrackListPropertyKeys = [...EventTargetPropertyKeys, 'length', 'onaddtrack', 'onchange', 'onremovetrack'];

// tslint:disable-next-line:variable-name
export const TextTrackListConstantKeys = [...EventTargetConstantKeys];
