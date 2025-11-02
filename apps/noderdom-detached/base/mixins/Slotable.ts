import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLSlotElement, ISlotable } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  ISlotable,
  ISlotableProperties,
  ISlotableReadonlyProperties
>('Slotable');
export const internalHandler = new InternalHandler<ISlotable>('Slotable', getState, setState);

export default class Slotable implements ISlotable {
  public get assignedSlot(): IHTMLSlotElement | null {
    return internalHandler.get<IHTMLSlotElement | null>(this, 'assignedSlot', true);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISlotableProperties {
  assignedSlot?: IHTMLSlotElement | null;
}

export interface ISlotableReadonlyProperties {
  assignedSlot?: IHTMLSlotElement | null;
}

// tslint:disable-next-line:variable-name
export const SlotablePropertyKeys = ['assignedSlot'];

// tslint:disable-next-line:variable-name
export const SlotableConstantKeys = [];
