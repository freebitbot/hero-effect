import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, INonElementParentNode, IParentNode, IDocumentFragment } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { INonElementParentNodeProperties, INonElementParentNodeReadonlyProperties, NonElementParentNodePropertyKeys, NonElementParentNodeConstantKeys } from '../mixins/NonElementParentNode';
import { IParentNodeProperties, IParentNodeReadonlyProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../mixins/ParentNode';

export const { getState, setState, setHiddenState, setReadonlyOfDocumentFragment } = StateMachine<
  IDocumentFragment,
  IDocumentFragmentProperties,
  IDocumentFragmentReadonlyProperties
>('DocumentFragment');
export const internalHandler = new InternalHandler<IDocumentFragment>('DocumentFragment', getState, setState);

// tslint:disable-next-line:variable-name
export function DocumentFragmentGenerator(Node: Constructable<INode>, NonElementParentNode: Constructable<INonElementParentNode>, ParentNode: Constructable<IParentNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [NonElementParentNode, ParentNode]) as unknown) as Constructable<INode & INonElementParentNode & IParentNode>;

  return class DocumentFragment extends Parent implements IDocumentFragment {constructor() {
      super();
      initializeConstantsAndPrototypes<DocumentFragment>(DocumentFragment, this, internalHandler, DocumentFragmentConstantKeys, DocumentFragmentPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDocumentFragmentProperties extends INodeProperties, INonElementParentNodeProperties, IParentNodeProperties {}

export interface IDocumentFragmentReadonlyProperties extends INodeReadonlyProperties, INonElementParentNodeReadonlyProperties, IParentNodeReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const DocumentFragmentPropertyKeys = [...NodePropertyKeys, ...NonElementParentNodePropertyKeys, ...ParentNodePropertyKeys];

// tslint:disable-next-line:variable-name
export const DocumentFragmentConstantKeys = [...NodeConstantKeys, ...NonElementParentNodeConstantKeys, ...ParentNodeConstantKeys];
