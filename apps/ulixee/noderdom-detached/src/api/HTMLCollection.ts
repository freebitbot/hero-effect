import { HTMLCollectionGenerator, getState, setHiddenState } from '../../base/classes/HTMLCollection';
import HTMLCollectionBase from '../../base/classes/HTMLCollectionBase';
import { IElement, IHTMLCollection } from '../../base/interfaces';
import { createProxy, iterableIteratorForArray, addToArrayish, removeFromArrayish } from '../utils/arrayish';

interface IHiddenProperties {
  items: IElement[];
  exposeItemsBy: string[];
}

// tslint:disable-next-line:variable-name
const GeneratedHTMLCollection = HTMLCollectionGenerator(HTMLCollectionBase);

export default class HTMLCollection<T extends IElement = IElement> extends GeneratedHTMLCollection<T>
  implements IHTMLCollection<T> {
  private readonly proxy: any;

  constructor() {
    super();
    Object.defineProperty(this, 'proxy', { enumerable: false, value: createProxy(this) });
    setHiddenState<IHiddenProperties>(this.proxy, { items: [], exposeItemsBy: ['index', 'name'] });
    return this.proxy;
  }

  public get length(): number {
    const { items } = getState(this.proxy);
    return items.length;
  }

  public item(index: number): T | null {
    const { items } = getState(this.proxy);
    return items[index];
  }

  public namedItem(name: string): T | null {
    let itemWithName;
    const { items } = getState(this.proxy);
    for (const item of items) {
      if (item.id === name) {
        return item;
      }
      if ((item as any).name === name) {
        itemWithName = item;
      }
    }
    return itemWithName ? itemWithName : null;
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return iterableIteratorForArray<T>(() => getState(this.proxy).items);
  }

  [index: number]: IElement;
  [index: string]: IElement | any;
}

// HELPER FUNCTIONS /////////////////////////////////////////////////////////////////////

export function pushIntoHTMLCollection(htmlCollection: IHTMLCollection, ...elementsToAdd: IElement[]) {
  addToArrayish<IHTMLCollection, IElement>(htmlCollection, getState(htmlCollection), elementsToAdd);
}

export function removeFromHTMLCollection(htmlCollection: IHTMLCollection, child: IElement) {
  removeFromArrayish<IHTMLCollection, IElement>(htmlCollection, getState(htmlCollection), child);
}
