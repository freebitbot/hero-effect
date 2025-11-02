import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLCollection, IElement, INode, INodeList, IParentNode } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IParentNode,
  IParentNodeProperties,
  IParentNodeReadonlyProperties
>('ParentNode');
export const internalHandler = new InternalHandler<IParentNode>('ParentNode', getState, setState);

export default class ParentNode implements IParentNode {
  public get childElementCount(): number {
    return internalHandler.get<number>(this, 'childElementCount', false);
  }

  public get children(): IHTMLCollection {
    return internalHandler.get<IHTMLCollection>(this, 'children', false);
  }

  public get firstElementChild(): IElement | null {
    return internalHandler.get<IElement | null>(this, 'firstElementChild', true);
  }

  public get lastElementChild(): IElement | null {
    return internalHandler.get<IElement | null>(this, 'lastElementChild', true);
  }

  // methods

  public append(...nodes: (INode | string)[]): void {
    internalHandler.run<void>(this, 'append', [nodes]);
  }

  public prepend(...nodes: (INode | string)[]): void {
    internalHandler.run<void>(this, 'prepend', [nodes]);
  }

  public querySelector(selectors: string): IElement | null {
    return internalHandler.run<IElement | null>(this, 'querySelector', [selectors]);
  }

  public querySelectorAll(selectors: string): INodeList {
    return internalHandler.run<INodeList>(this, 'querySelectorAll', [selectors]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IParentNodeProperties {
  childElementCount?: number;
  children?: IHTMLCollection;
  firstElementChild?: IElement | null;
  lastElementChild?: IElement | null;
}

export interface IParentNodeReadonlyProperties {
  childElementCount?: number;
  children?: IHTMLCollection;
  firstElementChild?: IElement | null;
  lastElementChild?: IElement | null;
}

// tslint:disable-next-line:variable-name
export const ParentNodePropertyKeys = ['childElementCount', 'children', 'firstElementChild', 'lastElementChild'];

// tslint:disable-next-line:variable-name
export const ParentNodeConstantKeys = [];
