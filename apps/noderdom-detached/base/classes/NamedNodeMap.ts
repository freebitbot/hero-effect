import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IAttr, INamedNodeMap } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfNamedNodeMap } = StateMachine<
  INamedNodeMap,
  INamedNodeMapProperties,
  INamedNodeMapReadonlyProperties
>('NamedNodeMap');
export const internalHandler = new InternalHandler<INamedNodeMap>('NamedNodeMap', getState, setState);

export default class NamedNodeMap implements INamedNodeMap {
  constructor() {
    initializeConstantsAndPrototypes<NamedNodeMap>(NamedNodeMap, this, internalHandler, NamedNodeMapConstantKeys, NamedNodeMapPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public getNamedItem(qualifiedName: string): IAttr | null {
    return internalHandler.run<IAttr | null>(this, 'getNamedItem', [qualifiedName]);
  }

  public getNamedItemNS(namespace: string | null, localName: string): IAttr | null {
    return internalHandler.run<IAttr | null>(this, 'getNamedItemNS', [namespace, localName]);
  }

  public item(index: number): IAttr | null {
    return internalHandler.run<IAttr | null>(this, 'item', [index]);
  }

  public removeNamedItem(qualifiedName: string): IAttr {
    return internalHandler.run<IAttr>(this, 'removeNamedItem', [qualifiedName]);
  }

  public removeNamedItemNS(namespace: string | null, localName: string): IAttr {
    return internalHandler.run<IAttr>(this, 'removeNamedItemNS', [namespace, localName]);
  }

  public setNamedItem(attr: IAttr): IAttr | null {
    return internalHandler.run<IAttr | null>(this, 'setNamedItem', [attr]);
  }

  public setNamedItemNS(attr: IAttr): IAttr | null {
    return internalHandler.run<IAttr | null>(this, 'setNamedItemNS', [attr]);
  }

  public [Symbol.iterator](): IterableIterator<IAttr> {
    return internalHandler.run<IterableIterator<IAttr>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: IAttr;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface INamedNodeMapProperties {
  length?: number;
}

export interface INamedNodeMapReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const NamedNodeMapPropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const NamedNodeMapConstantKeys = [];
