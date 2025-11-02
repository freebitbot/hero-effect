import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEvent, IEventListenerObject } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IEventListenerObject,
  IEventListenerObjectProperties,
  IEventListenerObjectReadonlyProperties
>('EventListenerObject');
export const internalHandler = new InternalHandler<IEventListenerObject>('EventListenerObject', getState, setState);

export default class EventListenerObject implements IEventListenerObject {
  public handleEvent(evt: IEvent): void {
    internalHandler.run<void>(this, 'handleEvent', [evt]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IEventListenerObjectProperties {}

export interface IEventListenerObjectReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const EventListenerObjectPropertyKeys = [];

// tslint:disable-next-line:variable-name
export const EventListenerObjectConstantKeys = [];
