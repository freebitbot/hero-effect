import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IChildNode } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IChildNode,
  IChildNodeProperties,
  IChildNodeReadonlyProperties
>('ChildNode');
export const internalHandler = new InternalHandler<IChildNode>('ChildNode', getState, setState);

export default class ChildNode implements IChildNode {
  public after(...nodes: (INode | string)[]): void {
    internalHandler.run<void>(this, 'after', [nodes]);
  }

  public before(...nodes: (INode | string)[]): void {
    internalHandler.run<void>(this, 'before', [nodes]);
  }

  public remove(): void {
    internalHandler.run<void>(this, 'remove', []);
  }

  public replaceWith(...nodes: (INode | string)[]): void {
    internalHandler.run<void>(this, 'replaceWith', [nodes]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IChildNodeProperties {}

export interface IChildNodeReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const ChildNodePropertyKeys = [];

// tslint:disable-next-line:variable-name
export const ChildNodeConstantKeys = [];
