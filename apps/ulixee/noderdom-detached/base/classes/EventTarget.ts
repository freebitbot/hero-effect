import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventListenerOrEventListenerObject, IAddEventListenerOptions, IEventListenerOptions, IEvent, IEventTarget } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfEventTarget } = StateMachine<
  IEventTarget,
  IEventTargetProperties,
  IEventTargetReadonlyProperties
>('EventTarget');
export const internalHandler = new InternalHandler<IEventTarget>('EventTarget', getState, setState);

export default class EventTarget implements IEventTarget {
  constructor() {
    initializeConstantsAndPrototypes<EventTarget>(EventTarget, this, internalHandler, EventTargetConstantKeys, EventTargetPropertyKeys);
  }

  // methods

  public addEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IAddEventListenerOptions | boolean): void {
    internalHandler.run<void>(this, 'addEventListener', [type, callback, options]);
  }

  public dispatchEvent(event: IEvent): boolean {
    return internalHandler.run<boolean>(this, 'dispatchEvent', [event]);
  }

  public removeEventListener(type: string, callback: IEventListenerOrEventListenerObject | null, options?: IEventListenerOptions | boolean): void {
    internalHandler.run<void>(this, 'removeEventListener', [type, callback, options]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IEventTargetProperties {}

export interface IEventTargetReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const EventTargetPropertyKeys = [];

// tslint:disable-next-line:variable-name
export const EventTargetConstantKeys = [];
