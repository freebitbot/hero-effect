import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventTarget, ITextTrackEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITextTrackKind, ITextTrackMode, ITextTrackCueList, ITextTrackCue, IEvent, ITextTrack } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties, EventTargetPropertyKeys, EventTargetConstantKeys } from './EventTarget';

export const { getState, setState, setHiddenState, setReadonlyOfTextTrack } = StateMachine<
  ITextTrack,
  ITextTrackProperties,
  ITextTrackReadonlyProperties
>('TextTrack');
export const internalHandler = new InternalHandler<ITextTrack>('TextTrack', getState, setState);

// tslint:disable-next-line:variable-name
export function TextTrackGenerator(EventTarget: Constructable<IEventTarget>) {
  return class TextTrack extends EventTarget implements ITextTrack {
    constructor() {
      super();
      initializeConstantsAndPrototypes<TextTrack>(TextTrack, this, internalHandler, TextTrackConstantKeys, TextTrackPropertyKeys);
    }

    // properties

    public get activeCues(): ITextTrackCueList | null {
      return internalHandler.get<ITextTrackCueList | null>(this, 'activeCues', true);
    }

    public get cues(): ITextTrackCueList | null {
      return internalHandler.get<ITextTrackCueList | null>(this, 'cues', true);
    }

    public get id(): string {
      return internalHandler.get<string>(this, 'id', false);
    }

    public get inBandMetadataTrackDispatchType(): string {
      return internalHandler.get<string>(this, 'inBandMetadataTrackDispatchType', false);
    }

    public get kind(): ITextTrackKind {
      return internalHandler.get<ITextTrackKind>(this, 'kind', false);
    }

    public get label(): string {
      return internalHandler.get<string>(this, 'label', false);
    }

    public get language(): string {
      return internalHandler.get<string>(this, 'language', false);
    }

    public get mode(): ITextTrackMode {
      return internalHandler.get<ITextTrackMode>(this, 'mode', false);
    }

    public set mode(value: ITextTrackMode) {
      internalHandler.set<ITextTrackMode>(this, 'mode', value);
    }

    public get oncuechange(): ((this: ITextTrack, ev: IEvent) => any) | null {
      return internalHandler.get<((this: ITextTrack, ev: IEvent) => any) | null>(this, 'oncuechange', true);
    }

    public set oncuechange(value: ((this: ITextTrack, ev: IEvent) => any) | null) {
      internalHandler.set<((this: ITextTrack, ev: IEvent) => any) | null>(this, 'oncuechange', value);
    }

    // methods

    public addCue(cue: ITextTrackCue): void {
      internalHandler.run<void>(this, 'addCue', [cue]);
    }

    public removeCue(cue: ITextTrackCue): void {
      internalHandler.run<void>(this, 'removeCue', [cue]);
    }

    public addEventListener<K extends keyof ITextTrackEventMap>(type: K, listener: (this: ITextTrack, ev: ITextTrackEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof ITextTrackEventMap>(type: K, listener: (this: ITextTrack, ev: ITextTrackEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ITextTrackProperties extends IEventTargetProperties {
  activeCues?: ITextTrackCueList | null;
  cues?: ITextTrackCueList | null;
  id?: string;
  inBandMetadataTrackDispatchType?: string;
  kind?: ITextTrackKind;
  label?: string;
  language?: string;
  mode?: ITextTrackMode;
  oncuechange?: ((this: ITextTrack, ev: IEvent) => any) | null;
}

export interface ITextTrackReadonlyProperties extends IEventTargetReadonlyProperties {
  activeCues?: ITextTrackCueList | null;
  cues?: ITextTrackCueList | null;
  id?: string;
  inBandMetadataTrackDispatchType?: string;
  kind?: ITextTrackKind;
  label?: string;
  language?: string;
}

// tslint:disable-next-line:variable-name
export const TextTrackPropertyKeys = [...EventTargetPropertyKeys, 'activeCues', 'cues', 'id', 'inBandMetadataTrackDispatchType', 'kind', 'label', 'language', 'mode', 'oncuechange'];

// tslint:disable-next-line:variable-name
export const TextTrackConstantKeys = [...EventTargetConstantKeys];
