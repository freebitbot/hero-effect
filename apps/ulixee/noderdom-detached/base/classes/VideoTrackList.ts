import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventTarget, IVideoTrackListEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IVideoTrack, IEvent, IVideoTrackList } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties, EventTargetPropertyKeys, EventTargetConstantKeys } from './EventTarget';

export const { getState, setState, setHiddenState, setReadonlyOfVideoTrackList } = StateMachine<
  IVideoTrackList,
  IVideoTrackListProperties,
  IVideoTrackListReadonlyProperties
>('VideoTrackList');
export const internalHandler = new InternalHandler<IVideoTrackList>('VideoTrackList', getState, setState);

// tslint:disable-next-line:variable-name
export function VideoTrackListGenerator(EventTarget: Constructable<IEventTarget>) {
  return class VideoTrackList extends EventTarget implements IVideoTrackList {
    constructor() {
      super();
      initializeConstantsAndPrototypes<VideoTrackList>(VideoTrackList, this, internalHandler, VideoTrackListConstantKeys, VideoTrackListPropertyKeys);
    }

    // properties

    public get length(): number {
      return internalHandler.get<number>(this, 'length', false);
    }

    public get onaddtrack(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', true);
    }

    public set onaddtrack(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onaddtrack', value);
    }

    public get onchange(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onchange', true);
    }

    public set onchange(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onchange', value);
    }

    public get onremovetrack(): ((this: IVideoTrackList, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', true);
    }

    public set onremovetrack(value: ((this: IVideoTrackList, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IVideoTrackList, ev: IEvent) => any) | null>(this, 'onremovetrack', value);
    }

    public get selectedIndex(): number {
      return internalHandler.get<number>(this, 'selectedIndex', false);
    }

    // methods

    public getTrackById(id: string): IVideoTrack | null {
      return internalHandler.run<IVideoTrack | null>(this, 'getTrackById', [id]);
    }

    public addEventListener<K extends keyof IVideoTrackListEventMap>(type: K, listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IVideoTrackListEventMap>(type: K, listener: (this: IVideoTrackList, ev: IVideoTrackListEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }

    public [Symbol.iterator](): IterableIterator<IVideoTrack> {
      return internalHandler.run<IterableIterator<IVideoTrack>>(this, '[Symbol.iterator]', []);
    }

    [index: number]: IVideoTrack;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IVideoTrackListProperties extends IEventTargetProperties {
  length?: number;
  onaddtrack?: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  onchange?: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  onremovetrack?: ((this: IVideoTrackList, ev: IEvent) => any) | null;
  selectedIndex?: number;
}

export interface IVideoTrackListReadonlyProperties extends IEventTargetReadonlyProperties {
  length?: number;
  selectedIndex?: number;
}

// tslint:disable-next-line:variable-name
export const VideoTrackListPropertyKeys = [...EventTargetPropertyKeys, 'length', 'onaddtrack', 'onchange', 'onremovetrack', 'selectedIndex'];

// tslint:disable-next-line:variable-name
export const VideoTrackListConstantKeys = [...EventTargetConstantKeys];
