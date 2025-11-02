import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventTarget, ITextTrackCueEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITextTrack, IEvent, ITextTrackCue } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties, EventTargetPropertyKeys, EventTargetConstantKeys } from './EventTarget';

export const { getState, setState, setHiddenState, setReadonlyOfTextTrackCue } = StateMachine<
  ITextTrackCue,
  ITextTrackCueProperties,
  ITextTrackCueReadonlyProperties
>('TextTrackCue');
export const internalHandler = new InternalHandler<ITextTrackCue>('TextTrackCue', getState, setState);

// tslint:disable-next-line:variable-name
export function TextTrackCueGenerator(EventTarget: Constructable<IEventTarget>) {
  return class TextTrackCue extends EventTarget implements ITextTrackCue {
    constructor() {
      super();
      initializeConstantsAndPrototypes<TextTrackCue>(TextTrackCue, this, internalHandler, TextTrackCueConstantKeys, TextTrackCuePropertyKeys);
    }

    // properties

    public get endTime(): number {
      return internalHandler.get<number>(this, 'endTime', false);
    }

    public set endTime(value: number) {
      internalHandler.set<number>(this, 'endTime', value);
    }

    public get id(): string {
      return internalHandler.get<string>(this, 'id', false);
    }

    public set id(value: string) {
      internalHandler.set<string>(this, 'id', value);
    }

    public get onenter(): ((this: ITextTrackCue, ev: IEvent) => any) | null {
      return internalHandler.get<((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onenter', true);
    }

    public set onenter(value: ((this: ITextTrackCue, ev: IEvent) => any) | null) {
      internalHandler.set<((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onenter', value);
    }

    public get onexit(): ((this: ITextTrackCue, ev: IEvent) => any) | null {
      return internalHandler.get<((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onexit', true);
    }

    public set onexit(value: ((this: ITextTrackCue, ev: IEvent) => any) | null) {
      internalHandler.set<((this: ITextTrackCue, ev: IEvent) => any) | null>(this, 'onexit', value);
    }

    public get pauseOnExit(): boolean {
      return internalHandler.get<boolean>(this, 'pauseOnExit', false);
    }

    public set pauseOnExit(value: boolean) {
      internalHandler.set<boolean>(this, 'pauseOnExit', value);
    }

    public get startTime(): number {
      return internalHandler.get<number>(this, 'startTime', false);
    }

    public set startTime(value: number) {
      internalHandler.set<number>(this, 'startTime', value);
    }

    public get track(): ITextTrack | null {
      return internalHandler.get<ITextTrack | null>(this, 'track', true);
    }

    public addEventListener<K extends keyof ITextTrackCueEventMap>(type: K, listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof ITextTrackCueEventMap>(type: K, listener: (this: ITextTrackCue, ev: ITextTrackCueEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ITextTrackCueProperties extends IEventTargetProperties {
  endTime?: number;
  id?: string;
  onenter?: ((this: ITextTrackCue, ev: IEvent) => any) | null;
  onexit?: ((this: ITextTrackCue, ev: IEvent) => any) | null;
  pauseOnExit?: boolean;
  startTime?: number;
  track?: ITextTrack | null;
}

export interface ITextTrackCueReadonlyProperties extends IEventTargetReadonlyProperties {
  track?: ITextTrack | null;
}

// tslint:disable-next-line:variable-name
export const TextTrackCuePropertyKeys = [...EventTargetPropertyKeys, 'endTime', 'id', 'onenter', 'onexit', 'pauseOnExit', 'startTime', 'track'];

// tslint:disable-next-line:variable-name
export const TextTrackCueConstantKeys = [...EventTargetConstantKeys];
