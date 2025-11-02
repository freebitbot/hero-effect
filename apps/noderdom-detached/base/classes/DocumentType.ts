import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IChildNode, IDocumentType } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { IChildNodeProperties, IChildNodeReadonlyProperties, ChildNodePropertyKeys, ChildNodeConstantKeys } from '../mixins/ChildNode';

export const { getState, setState, setHiddenState, setReadonlyOfDocumentType } = StateMachine<
  IDocumentType,
  IDocumentTypeProperties,
  IDocumentTypeReadonlyProperties
>('DocumentType');
export const internalHandler = new InternalHandler<IDocumentType>('DocumentType', getState, setState);

// tslint:disable-next-line:variable-name
export function DocumentTypeGenerator(Node: Constructable<INode>, ChildNode: Constructable<IChildNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [ChildNode]) as unknown) as Constructable<INode & IChildNode>;

  return class DocumentType extends Parent implements IDocumentType {
    constructor() {
      super();
      initializeConstantsAndPrototypes<DocumentType>(DocumentType, this, internalHandler, DocumentTypeConstantKeys, DocumentTypePropertyKeys);
    }

    // properties

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public get publicId(): string {
      return internalHandler.get<string>(this, 'publicId', false);
    }

    public get systemId(): string {
      return internalHandler.get<string>(this, 'systemId', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDocumentTypeProperties extends INodeProperties, IChildNodeProperties {
  name?: string;
  publicId?: string;
  systemId?: string;
}

export interface IDocumentTypeReadonlyProperties extends INodeReadonlyProperties, IChildNodeReadonlyProperties {
  name?: string;
  publicId?: string;
  systemId?: string;
}

// tslint:disable-next-line:variable-name
export const DocumentTypePropertyKeys = [...NodePropertyKeys, ...ChildNodePropertyKeys, 'name', 'publicId', 'systemId'];

// tslint:disable-next-line:variable-name
export const DocumentTypeConstantKeys = [...NodeConstantKeys, ...ChildNodeConstantKeys];
