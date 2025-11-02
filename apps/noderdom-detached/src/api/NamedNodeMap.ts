import { IAttr, IElement, INamedNodeMap } from '../../base/interfaces';
import { setReadonlyOfAttr } from '../../base/classes/Attr';
import GeneratedNamedNodeMap, {
  INamedNodeMapProperties as IOriginalNamedNodeMapProperties,
  INamedNodeMapReadonlyProperties as IOriginalNamedNodeMapReadonlyProperties,
} from '../../base/classes/NamedNodeMap';
import DOMException from './DOMException';
import StateMachine from '../../base/StateMachine';
import {
  addToArrayish,
  createProxy,
  iterableIteratorForArray,
  removeFromArrayish,
  replaceInArrayish,
} from '../utils/arrayish';

interface IHiddenProperties {
  itemsByName: Record<string, IAttr>;
  items: IAttr[];
  exposeItemsBy: string[];
}

export default class NamedNodeMap extends GeneratedNamedNodeMap implements INamedNodeMap {
  private readonly proxy: NamedNodeMap;

  constructor() {
    super();
    Object.defineProperty(this, 'proxy', { enumerable: false, value: createProxy(this) });
    setHiddenState<IHiddenProperties>(this.proxy, { itemsByName: {}, items: [], exposeItemsBy: ['index'] });
    return this.proxy;
  }

  public get length(): number {
    return getState(this.proxy).items.length;
  }

  public getNamedItem(qualifiedName: string): IAttr | null {
    const { itemsByName } = getState(this.proxy);
    return itemsByName[qualifiedName] === undefined ? null : itemsByName[qualifiedName];
  }

  public getNamedItemNS(namespace: string | null, localName: string): IAttr | null {
    const { items } = getState(this.proxy);
    for (const attr of items) {
      if (attr.localName === localName && attr.namespaceURI === namespace) {
        return attr;
      }
    }
    return null;
  }

  public item(index: number): IAttr | null {
    return getState(this.proxy).items[index] || null;
  }

  public removeNamedItem(qualifiedName: string): IAttr {
    const attr = this.getNamedItem(qualifiedName);
    if (attr === null) {
      throw new DOMException(undefined, 'NotFoundError');
    }
    removeNamedNode(this.proxy, attr);
    return attr;
  }

  public removeNamedItemNS(namespace: string | null, localName: string): IAttr {
    const attr = this.getNamedItemNS(namespace, localName);
    if (attr === null) {
      throw new DOMException(undefined, 'NotFoundError');
    }
    removeNamedNode(this.proxy, attr);
    return attr;
  }

  public setNamedItem(attr: IAttr): IAttr | null {
    const el = attr.ownerElement;
    const ownerElement = getState(this.proxy).ownerElement;
    if (el && el !== ownerElement) {
      throw new DOMException(undefined, 'InuseAttributeError');
    }
    const oldAttr = this.getNamedItem(attr.nodeName);
    addNamedNode(this.proxy, attr, oldAttr);
    return oldAttr;
  }

  public setNamedItemNS(attr: IAttr): IAttr | null {
    const el = attr.ownerElement;
    const ownerElement = getState(this.proxy).ownerElement;
    let oldAttr: IAttr | null;
    if (el && el !== ownerElement) {
      throw new DOMException(undefined, 'InuseAttributeError');
    }
    oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
    addNamedNode(this.proxy, attr, oldAttr);
    return oldAttr;
  }

  public [Symbol.iterator](): IterableIterator<IAttr> {
    return iterableIteratorForArray<IAttr>(() => getState(this.proxy).items);
  }

  [index: number]: IAttr;
}

// SUPPORT FOR CUSTOM STATE GENERATOR ////////////////////////////////////////

export interface INamedNodeMapProperties extends IOriginalNamedNodeMapProperties {
  ownerElement?: IElement;
}

export interface INamedNodeMapReadonlyProperties extends IOriginalNamedNodeMapReadonlyProperties {
  ownerElement?: IElement;
}

export const { getState, setState, setHiddenState, setReadonlyOfNamedNodeMap } = StateMachine<
  INamedNodeMap,
  INamedNodeMapProperties,
  INamedNodeMapReadonlyProperties
>('NamedNodeMap');

////////////////////////////////////////

function addNamedNode(namedNodeMap: NamedNodeMap, newAttr: IAttr, oldAttr: IAttr | null) {
  const state = getState(namedNodeMap);
  const ownerElement = state.ownerElement;
  if (oldAttr) {
    replaceInArrayish<NamedNodeMap, IAttr>(namedNodeMap, state, newAttr, oldAttr);
    setReadonlyOfAttr(oldAttr, { ownerElement: null });
  } else {
    addToArrayish<NamedNodeMap, IAttr>(namedNodeMap, state, [newAttr]);
  }

  if (ownerElement) {
    setReadonlyOfAttr(newAttr, { ownerElement });
  }
}

function removeNamedNode(namedNodeMap: NamedNodeMap, attr: IAttr) {
  const state = getState(namedNodeMap);
  if (!state.itemsByName[attr.name]) {
    throw new DOMException(`${state.ownerElement.nodeName}@${attr}`, 'NotFoundError');
  }
  removeFromArrayish<NamedNodeMap, IAttr>(namedNodeMap, state, attr);
  setReadonlyOfAttr(attr, { ownerElement: null });
}
