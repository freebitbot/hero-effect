import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ITimeRanges, IAudioTrackList, IVideoTrackList, ITextTrackList, ICanPlayTypeResult, ITextTrackKind, ITextTrack, IHTMLMediaElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLMediaElement } = StateMachine<
  IHTMLMediaElement,
  IHTMLMediaElementProperties,
  IHTMLMediaElementReadonlyProperties
>('HTMLMediaElement');
export const internalHandler = new InternalHandler<IHTMLMediaElement>('HTMLMediaElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLMediaElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLMediaElement extends HTMLElement implements IHTMLMediaElement {
    public static readonly HAVE_CURRENT_DATA: number = 2;
    public static readonly HAVE_ENOUGH_DATA: number = 4;
    public static readonly HAVE_FUTURE_DATA: number = 3;
    public static readonly HAVE_METADATA: number = 1;
    public static readonly HAVE_NOTHING: number = 0;
    public static readonly NETWORK_EMPTY: number = 0;
    public static readonly NETWORK_IDLE: number = 1;
    public static readonly NETWORK_LOADING: number = 2;
    public static readonly NETWORK_NO_SOURCE: number = 3;

    public readonly HAVE_CURRENT_DATA: number = 2;
    public readonly HAVE_ENOUGH_DATA: number = 4;
    public readonly HAVE_FUTURE_DATA: number = 3;
    public readonly HAVE_METADATA: number = 1;
    public readonly HAVE_NOTHING: number = 0;
    public readonly NETWORK_EMPTY: number = 0;
    public readonly NETWORK_IDLE: number = 1;
    public readonly NETWORK_LOADING: number = 2;
    public readonly NETWORK_NO_SOURCE: number = 3;

    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLMediaElement>(HTMLMediaElement, this, internalHandler, HTMLMediaElementConstantKeys, HTMLMediaElementPropertyKeys);
    }

    // properties

    public get audioTracks(): IAudioTrackList {
      return internalHandler.get<IAudioTrackList>(this, 'audioTracks', false);
    }

    public get autoplay(): boolean {
      return internalHandler.get<boolean>(this, 'autoplay', false);
    }

    public set autoplay(value: boolean) {
      internalHandler.set<boolean>(this, 'autoplay', value);
    }

    public get buffered(): ITimeRanges {
      return internalHandler.get<ITimeRanges>(this, 'buffered', false);
    }

    public get controls(): boolean {
      return internalHandler.get<boolean>(this, 'controls', false);
    }

    public set controls(value: boolean) {
      internalHandler.set<boolean>(this, 'controls', value);
    }

    public get crossOrigin(): string | null {
      return internalHandler.get<string | null>(this, 'crossOrigin', true);
    }

    public set crossOrigin(value: string | null) {
      internalHandler.set<string | null>(this, 'crossOrigin', value);
    }

    public get currentSrc(): string {
      return internalHandler.get<string>(this, 'currentSrc', false);
    }

    public get currentTime(): number {
      return internalHandler.get<number>(this, 'currentTime', false);
    }

    public set currentTime(value: number) {
      internalHandler.set<number>(this, 'currentTime', value);
    }

    public get defaultMuted(): boolean {
      return internalHandler.get<boolean>(this, 'defaultMuted', false);
    }

    public set defaultMuted(value: boolean) {
      internalHandler.set<boolean>(this, 'defaultMuted', value);
    }

    public get defaultPlaybackRate(): number {
      return internalHandler.get<number>(this, 'defaultPlaybackRate', false);
    }

    public set defaultPlaybackRate(value: number) {
      internalHandler.set<number>(this, 'defaultPlaybackRate', value);
    }

    public get duration(): number {
      return internalHandler.get<number>(this, 'duration', false);
    }

    public get ended(): boolean {
      return internalHandler.get<boolean>(this, 'ended', false);
    }

    public get loop(): boolean {
      return internalHandler.get<boolean>(this, 'loop', false);
    }

    public set loop(value: boolean) {
      internalHandler.set<boolean>(this, 'loop', value);
    }

    public get muted(): boolean {
      return internalHandler.get<boolean>(this, 'muted', false);
    }

    public set muted(value: boolean) {
      internalHandler.set<boolean>(this, 'muted', value);
    }

    public get networkState(): number {
      return internalHandler.get<number>(this, 'networkState', false);
    }

    public get paused(): boolean {
      return internalHandler.get<boolean>(this, 'paused', false);
    }

    public get playbackRate(): number {
      return internalHandler.get<number>(this, 'playbackRate', false);
    }

    public set playbackRate(value: number) {
      internalHandler.set<number>(this, 'playbackRate', value);
    }

    public get played(): ITimeRanges {
      return internalHandler.get<ITimeRanges>(this, 'played', false);
    }

    public get preload(): string {
      return internalHandler.get<string>(this, 'preload', false);
    }

    public set preload(value: string) {
      internalHandler.set<string>(this, 'preload', value);
    }

    public get readyState(): number {
      return internalHandler.get<number>(this, 'readyState', false);
    }

    public get seekable(): ITimeRanges {
      return internalHandler.get<ITimeRanges>(this, 'seekable', false);
    }

    public get seeking(): boolean {
      return internalHandler.get<boolean>(this, 'seeking', false);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public get textTracks(): ITextTrackList {
      return internalHandler.get<ITextTrackList>(this, 'textTracks', false);
    }

    public get videoTracks(): IVideoTrackList {
      return internalHandler.get<IVideoTrackList>(this, 'videoTracks', false);
    }

    public get volume(): number {
      return internalHandler.get<number>(this, 'volume', false);
    }

    public set volume(value: number) {
      internalHandler.set<number>(this, 'volume', value);
    }

    // methods

    public addTextTrack(kind: ITextTrackKind, label?: string, language?: string): ITextTrack {
      return internalHandler.run<ITextTrack>(this, 'addTextTrack', [kind, label, language]);
    }

    public canPlayType(type: string): ICanPlayTypeResult {
      return internalHandler.run<ICanPlayTypeResult>(this, 'canPlayType', [type]);
    }

    public load(): void {
      internalHandler.run<void>(this, 'load', []);
    }

    public pause(): void {
      internalHandler.run<void>(this, 'pause', []);
    }

    public play(): Promise<void> {
      return internalHandler.run<Promise<void>>(this, 'play', []);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLMediaElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLMediaElementProperties extends IHTMLElementProperties {
  audioTracks?: IAudioTrackList;
  autoplay?: boolean;
  buffered?: ITimeRanges;
  controls?: boolean;
  crossOrigin?: string | null;
  currentSrc?: string;
  currentTime?: number;
  defaultMuted?: boolean;
  defaultPlaybackRate?: number;
  duration?: number;
  ended?: boolean;
  loop?: boolean;
  muted?: boolean;
  networkState?: number;
  paused?: boolean;
  playbackRate?: number;
  played?: ITimeRanges;
  preload?: string;
  readyState?: number;
  seekable?: ITimeRanges;
  seeking?: boolean;
  src?: string;
  textTracks?: ITextTrackList;
  videoTracks?: IVideoTrackList;
  volume?: number;
}

export interface IHTMLMediaElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  audioTracks?: IAudioTrackList;
  buffered?: ITimeRanges;
  currentSrc?: string;
  duration?: number;
  ended?: boolean;
  networkState?: number;
  paused?: boolean;
  played?: ITimeRanges;
  readyState?: number;
  seekable?: ITimeRanges;
  seeking?: boolean;
  textTracks?: ITextTrackList;
  videoTracks?: IVideoTrackList;
}

// tslint:disable-next-line:variable-name
export const HTMLMediaElementPropertyKeys = [...HTMLElementPropertyKeys, 'audioTracks', 'autoplay', 'buffered', 'controls', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'duration', 'ended', 'loop', 'muted', 'networkState', 'paused', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'src', 'textTracks', 'videoTracks', 'volume'];

// tslint:disable-next-line:variable-name
export const HTMLMediaElementConstantKeys = [...HTMLElementConstantKeys, 'NETWORK_EMPTY', 'NETWORK_IDLE', 'NETWORK_LOADING', 'NETWORK_NO_SOURCE', 'HAVE_NOTHING', 'HAVE_METADATA', 'HAVE_CURRENT_DATA', 'HAVE_FUTURE_DATA', 'HAVE_ENOUGH_DATA'];
