import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventTarget, IEventInit, IEvent } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfEvent } = StateMachine<
  IEvent,
  IEventProperties,
  IEventReadonlyProperties
>('Event');
export const internalHandler = new InternalHandler<IEvent>('Event', getState, setState);

export default class Event implements IEvent {
  public static readonly AT_TARGET: number = 2;
  public static readonly BUBBLING_PHASE: number = 3;
  public static readonly CAPTURING_PHASE: number = 1;
  public static readonly NONE: number = 0;

  public readonly AT_TARGET: number = 2;
  public readonly BUBBLING_PHASE: number = 3;
  public readonly CAPTURING_PHASE: number = 1;
  public readonly NONE: number = 0;

  // constructor required for this class

  constructor(_type: string, _eventInitDict?: IEventInit) {
    initializeConstantsAndPrototypes<Event>(Event, this, internalHandler, EventConstantKeys, EventPropertyKeys);
  }

  // properties

  public get bubbles(): boolean {
    return internalHandler.get<boolean>(this, 'bubbles', false);
  }

  public get cancelBubble(): boolean {
    return internalHandler.get<boolean>(this, 'cancelBubble', false);
  }

  public set cancelBubble(value: boolean) {
    internalHandler.set<boolean>(this, 'cancelBubble', value);
  }

  public get cancelable(): boolean {
    return internalHandler.get<boolean>(this, 'cancelable', false);
  }

  public get composed(): boolean {
    return internalHandler.get<boolean>(this, 'composed', false);
  }

  public get currentTarget(): IEventTarget | null {
    return internalHandler.get<IEventTarget | null>(this, 'currentTarget', true);
  }

  public get defaultPrevented(): boolean {
    return internalHandler.get<boolean>(this, 'defaultPrevented', false);
  }

  public get eventPhase(): number {
    return internalHandler.get<number>(this, 'eventPhase', false);
  }

  public get isTrusted(): boolean {
    return internalHandler.get<boolean>(this, 'isTrusted', false);
  }

  public get returnValue(): boolean {
    return internalHandler.get<boolean>(this, 'returnValue', false);
  }

  public set returnValue(value: boolean) {
    internalHandler.set<boolean>(this, 'returnValue', value);
  }

  public get srcElement(): IEventTarget | null {
    return internalHandler.get<IEventTarget | null>(this, 'srcElement', true);
  }

  public get target(): IEventTarget | null {
    return internalHandler.get<IEventTarget | null>(this, 'target', true);
  }

  public get timeStamp(): number {
    return internalHandler.get<number>(this, 'timeStamp', false);
  }

  public get type(): string {
    return internalHandler.get<string>(this, 'type', false);
  }

  // methods

  public composedPath(): Iterable<IEventTarget> {
    return internalHandler.run<Iterable<IEventTarget>>(this, 'composedPath', []);
  }

  public initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void {
    internalHandler.run<void>(this, 'initEvent', [type, bubbles, cancelable]);
  }

  public preventDefault(): void {
    internalHandler.run<void>(this, 'preventDefault', []);
  }

  public stopImmediatePropagation(): void {
    internalHandler.run<void>(this, 'stopImmediatePropagation', []);
  }

  public stopPropagation(): void {
    internalHandler.run<void>(this, 'stopPropagation', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IEventProperties {
  bubbles?: boolean;
  cancelBubble?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  currentTarget?: IEventTarget | null;
  defaultPrevented?: boolean;
  eventPhase?: number;
  isTrusted?: boolean;
  returnValue?: boolean;
  srcElement?: IEventTarget | null;
  target?: IEventTarget | null;
  timeStamp?: number;
  type?: string;
}

export interface IEventReadonlyProperties {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  currentTarget?: IEventTarget | null;
  defaultPrevented?: boolean;
  eventPhase?: number;
  isTrusted?: boolean;
  srcElement?: IEventTarget | null;
  target?: IEventTarget | null;
  timeStamp?: number;
  type?: string;
}

// tslint:disable-next-line:variable-name
export const EventPropertyKeys = ['bubbles', 'cancelBubble', 'cancelable', 'composed', 'currentTarget', 'defaultPrevented', 'eventPhase', 'isTrusted', 'returnValue', 'srcElement', 'target', 'timeStamp', 'type'];

// tslint:disable-next-line:variable-name
export const EventConstantKeys = ['NONE', 'CAPTURING_PHASE', 'AT_TARGET', 'BUBBLING_PHASE'];
