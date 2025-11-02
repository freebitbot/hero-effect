import GeneratedDOMTokenList, { getState, setState, setHiddenState } from '../../base/classes/DOMTokenList';
import { IDOMTokenList } from '../../base/interfaces';
import {
  stringToUniqueArray,
  createProxy,
  iterableIteratorForArray,
  addToArrayish,
  removeFromArrayish,
  replaceInArrayish,
} from '../utils/arrayish';

interface IHiddenProperties {
  items: string[];
  itemsByName: { [key: string]: string };
  exposeItemsBy?: string[];
}

export default class DOMTokenList extends GeneratedDOMTokenList implements IDOMTokenList {
  private readonly proxy: DOMTokenList;

  constructor() {
    super();
    Object.defineProperty(this, 'proxy', { enumerable: false, value: createProxy(this) });
    setHiddenState<IHiddenProperties>(this.proxy, { items: [], itemsByName: {}, exposeItemsBy: ['index', 'name'] });
    return this.proxy;
  }

  public get length(): number {
    return getState(this.proxy).items.length;
  }

  public get value(): string {
    return getState(this.proxy).value || '';
  }

  public set value(value: string) {
    const tokens = stringToUniqueArray(value);
    // @ts-ignore
    const proxy = this._internalInstance ? this : this.proxy;
    setHiddenState<IHiddenProperties>(proxy, { items: [], itemsByName: {} });
    setState(proxy, { value });
    addToArrayish<DOMTokenList, string>(this, getState(proxy), tokens);
  }

  // methods

  public add(...tokens: string[]): void {
    addToArrayish<DOMTokenList, string>(this, getState(this.proxy), tokens);
  }

  public contains(token: string): boolean {
    return !!getState(this.proxy).itemsByName[token];
  }

  public item(index: number): string | null {
    return getState(this.proxy).items[index] || null;
  }

  public remove(...tokens: string[]): void {
    for (const token of tokens) {
      removeFromArrayish<DOMTokenList, string>(this, getState(this.proxy), token);
    }
  }

  public replace(token: string, newToken: string): boolean {
    return replaceInArrayish<DOMTokenList, string>(this, getState(this.proxy), newToken, token);
  }

  public supports(_token: string): boolean {
    return true;
  }

  public toggle(token: string, force?: boolean): boolean {
    const alreadyExists = this.contains(token);
    if (alreadyExists && force !== true) {
      this.remove(token);
      return false;
    }
    if (alreadyExists && force !== false) {
      this.add(token);
      return true;
    }
    return alreadyExists;
  }

  public toString(): string {
    return this.value;
  }

  public forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): void {
    const { items } = getState(this.proxy);
    items.forEach((value: any, key: number) => callbackfn(value as string, key, this), thisArg);
  }

  public entries(): IterableIterator<[number, string]> {
    return iterableIteratorForArray<[number, string]>(() => {
      return getState(this.proxy).items.map((v: string, i: number) => [i, v]);
    });
  }

  public keys(): IterableIterator<number> {
    return iterableIteratorForArray<number>(() => getState(this.proxy).items.map((_: any, i: number) => i));
  }

  public values(): IterableIterator<string> {
    return iterableIteratorForArray<string>(() => getState(this.proxy).items.map((x: string) => x));
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return iterableIteratorForArray<string>(() => getState(this.proxy).items);
  }

  [index: number]: string;
}
