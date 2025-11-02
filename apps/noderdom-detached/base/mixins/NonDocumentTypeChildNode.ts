import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IElement, INonDocumentTypeChildNode } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  INonDocumentTypeChildNode,
  INonDocumentTypeChildNodeProperties,
  INonDocumentTypeChildNodeReadonlyProperties
>('NonDocumentTypeChildNode');
export const internalHandler = new InternalHandler<INonDocumentTypeChildNode>('NonDocumentTypeChildNode', getState, setState);

export default class NonDocumentTypeChildNode implements INonDocumentTypeChildNode {
  public get nextElementSibling(): IElement | null {
    return internalHandler.get<IElement | null>(this, 'nextElementSibling', true);
  }

  public get previousElementSibling(): IElement | null {
    return internalHandler.get<IElement | null>(this, 'previousElementSibling', true);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface INonDocumentTypeChildNodeProperties {
  nextElementSibling?: IElement | null;
  previousElementSibling?: IElement | null;
}

export interface INonDocumentTypeChildNodeReadonlyProperties {
  nextElementSibling?: IElement | null;
  previousElementSibling?: IElement | null;
}

// tslint:disable-next-line:variable-name
export const NonDocumentTypeChildNodePropertyKeys = ['nextElementSibling', 'previousElementSibling'];

// tslint:disable-next-line:variable-name
export const NonDocumentTypeChildNodeConstantKeys = [];
