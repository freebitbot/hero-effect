import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventTarget, IAudioTrackListEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IAudioTrack, IEvent, IAudioTrackList } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties, EventTargetPropertyKeys, EventTargetConstantKeys } from './EventTarget';

export const { getState, setState, setHiddenState, setReadonlyOfAudioTrackList } = StateMachine<
  IAudioTrackList,
  IAudioTrackListProperties,
  IAudioTrackListReadonlyProperties
>('AudioTrackList');
export const internalHandler = new InternalHandler<IAudioTrackList>('AudioTrackList', getState, setState);

// tslint:disable-next-line:variable-name
export function AudioTrackListGenerator(EventTarget: Constructable<IEventTarget>) {
  return class AudioTrackList extends EventTarget implements IAudioTrackList {
    constructor() {
      super();
      initializeConstantsAndPrototypes<AudioTrackList>(AudioTrackList, this, internalHandler, AudioTrackListConstantKeys, AudioTrackListPropertyKeys);
    }

    // properties

    public get length(): number {
      return internalHandler.get<number>(this, 'length', false);
    }

    public get onaddtrack(): ((this: IAudioTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', true);
    }

    public set onaddtrack(value: ((this: IAudioTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', value);
    }

    public get onchange(): ((this: IAudioTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onchange', true);
    }

    public set onchange(value: ((this: IAudioTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onchange', value);
    }

    public get onremovetrack(): ((this: IAudioTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', true);
    }

    public set onremovetrack(value: ((this: IAudioTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IAudioTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', value);
    }

    // methods

    public getTrackById(id: string): IAudioTrack | null {
      return internalHandler.run<IAudioTrack | null>(this, 'getTrackById', [id]);
    }

    public addEventListener<K extends keyof IAudioTrackListEventMap>(type: K, listener: (this: IAudioTrackList, ev: IAudioTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IAudioTrackListEventMap>(type: K, listener: (this: IAudioTrackList, ev: IAudioTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }

    public [Symbol.iterator](): IterableIterator<IAudioTrack> {
      return internalHandler.run<IterableIterator<IAudioTrack>>(this, '[Symbol.iterator]', []);
    }

    [index: number]: IAudioTrack;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IAudioTrackListProperties extends IEventTargetProperties {
  length?: number;
  onaddtrack?: ((this: IAudioTrackList, ev: IEvent) => any) | null;
  onchange?: ((this: IAudioTrackList, ev: IEvent) => any) | null;
  onremovetrack?: ((this: IAudioTrackList, ev: IEvent) => any) | null;
}

export interface IAudioTrackListReadonlyProperties extends IEventTargetReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const AudioTrackListPropertyKeys = [...EventTargetPropertyKeys, 'length', 'onaddtrack', 'onchange', 'onremovetrack'];

// tslint:disable-next-line:variable-name
export const AudioTrackListConstantKeys = [...EventTargetConstantKeys];
