import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IElement, INonElementParentNode } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  INonElementParentNode,
  INonElementParentNodeProperties,
  INonElementParentNodeReadonlyProperties
>('NonElementParentNode');
export const internalHandler = new InternalHandler<INonElementParentNode>('NonElementParentNode', getState, setState);

export default class NonElementParentNode implements INonElementParentNode {
  public getElementById(elementId: string): IElement | null {
    return internalHandler.run<IElement | null>(this, 'getElementById', [elementId]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface INonElementParentNodeProperties {}

export interface INonElementParentNodeReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const NonElementParentNodePropertyKeys = [];

// tslint:disable-next-line:variable-name
export const NonElementParentNodeConstantKeys = [];
