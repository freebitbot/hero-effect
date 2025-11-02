import { INode, INodeList } from '../../base/interfaces';
import GeneratedNodeList, { getState, setHiddenState } from '../../base/classes/NodeList';
import { createProxy, iterableIteratorForArray, addToArrayish, removeFromArrayish } from '../utils/arrayish';

interface IHiddenProperties {
  items: any[];
  exposeItemsBy: string[];
}

export default class NodeList<T extends INode = INode> extends GeneratedNodeList<T> implements INodeList<T> {
  private readonly proxy: NodeList<T>;

  constructor() {
    super();
    Object.defineProperty(this, 'proxy', { enumerable: false, value: createProxy(this) });
    setHiddenState<IHiddenProperties>(this.proxy, { items: [], exposeItemsBy: ['index'] });
    return this.proxy;
  }

  public get length(): number {
    const { items } = getState(this.proxy);
    return items.length;
  }

  public item(index: number): T {
    const { items } = getState(this.proxy);
    return items[index];
  }

  forEach(callbackfn: (value: INode, key: number, parent: INodeList<T>) => void, thisArg?: any): void {
    const { items } = getState(this.proxy);
    items.forEach((value: any, key: number) => callbackfn(value as T, key, this), thisArg);
  }

  entries(): IterableIterator<[number, T]> {
    return iterableIteratorForArray<[number, T]>(() => {
      const { items } = getState(this.proxy);
      return items.map((item: any, index: number) => [index, item as T]);
    });
  }

  keys(): IterableIterator<number> {
    return iterableIteratorForArray<number>(() => {
      const { items } = getState(this.proxy);
      return items.map((_item: any, index: number) => index);
    });
  }

  values(): IterableIterator<T> {
    return iterableIteratorForArray<T>(() => {
      const { items } = getState(this.proxy);
      return items.map((item: any) => item as T);
    });
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return iterableIteratorForArray<T>(() => getState(this.proxy).items);
  }

  [index: number]: T;
}

// HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////

export function pushIntoNodeList<IItem extends INode = INode>(nodeList: INodeList, ...nodesToAdd: IItem[]) {
  addToArrayish<INodeList, IItem>(nodeList, getState(nodeList), nodesToAdd);
}

export function spliceIntoNodeList<IItem extends INode = INode>(
  nodeList: INodeList,
  i: number,
  ...nodesToAdd: IItem[]
) {
  addToArrayish<INodeList, IItem>(nodeList, getState(nodeList), nodesToAdd, i);
}

export function removeFromNodeList<IItem extends INode = INode>(nodeList: INodeList, child: IItem) {
  removeFromArrayish<INodeList, IItem>(nodeList, getState(nodeList), child);
}

export function indexOfNodeListItem<IItem extends INode = INode>(nodeList: INodeList, node: IItem) {
  const { items } = getState(nodeList);
  return items.indexOf(node);
}
