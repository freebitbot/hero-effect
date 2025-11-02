import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IElement, IAttr } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from './Node';

export const { getState, setState, setHiddenState, setReadonlyOfAttr } = StateMachine<
  IAttr,
  IAttrProperties,
  IAttrReadonlyProperties
>('Attr');
export const internalHandler = new InternalHandler<IAttr>('Attr', getState, setState);

// tslint:disable-next-line:variable-name
export function AttrGenerator(Node: Constructable<INode>) {
  return class Attr extends Node implements IAttr {
    constructor() {
      super();
      initializeConstantsAndPrototypes<Attr>(Attr, this, internalHandler, AttrConstantKeys, AttrPropertyKeys);
    }

    // properties

    public get localName(): string {
      return internalHandler.get<string>(this, 'localName', false);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public get namespaceURI(): string | null {
      return internalHandler.get<string | null>(this, 'namespaceURI', true);
    }

    public get ownerElement(): IElement | null {
      return internalHandler.get<IElement | null>(this, 'ownerElement', true);
    }

    public get prefix(): string | null {
      return internalHandler.get<string | null>(this, 'prefix', true);
    }

    public get specified(): boolean {
      return internalHandler.get<boolean>(this, 'specified', false);
    }

    public get value(): string {
      return internalHandler.get<string>(this, 'value', false);
    }

    public set value(value: string) {
      internalHandler.set<string>(this, 'value', value);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IAttrProperties extends INodeProperties {
  localName?: string;
  name?: string;
  namespaceURI?: string | null;
  ownerElement?: IElement | null;
  prefix?: string | null;
  specified?: boolean;
  value?: string;
}

export interface IAttrReadonlyProperties extends INodeReadonlyProperties {
  localName?: string;
  name?: string;
  namespaceURI?: string | null;
  ownerElement?: IElement | null;
  prefix?: string | null;
  specified?: boolean;
}

// tslint:disable-next-line:variable-name
export const AttrPropertyKeys = [...NodePropertyKeys, 'localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];

// tslint:disable-next-line:variable-name
export const AttrConstantKeys = [...NodeConstantKeys];
