import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDOMTokenList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfDOMTokenList } = StateMachine<
  IDOMTokenList,
  IDOMTokenListProperties,
  IDOMTokenListReadonlyProperties
>('DOMTokenList');
export const internalHandler = new InternalHandler<IDOMTokenList>('DOMTokenList', getState, setState);

export default class DOMTokenList implements IDOMTokenList {
  constructor() {
    initializeConstantsAndPrototypes<DOMTokenList>(DOMTokenList, this, internalHandler, DOMTokenListConstantKeys, DOMTokenListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  public get value(): string {
    return internalHandler.get<string>(this, 'value', false);
  }

  public set value(value: string) {
    internalHandler.set<string>(this, 'value', value);
  }

  // methods

  public add(...tokens: string[]): void {
    internalHandler.run<void>(this, 'add', [tokens]);
  }

  public contains(token: string): boolean {
    return internalHandler.run<boolean>(this, 'contains', [token]);
  }

  public item(index: number): string | null {
    return internalHandler.run<string | null>(this, 'item', [index]);
  }

  public remove(...tokens: string[]): void {
    internalHandler.run<void>(this, 'remove', [tokens]);
  }

  public replace(token: string, newToken: string): boolean {
    return internalHandler.run<boolean>(this, 'replace', [token, newToken]);
  }

  public supports(token: string): boolean {
    return internalHandler.run<boolean>(this, 'supports', [token]);
  }

  public toggle(token: string, force?: boolean): boolean {
    return internalHandler.run<boolean>(this, 'toggle', [token, force]);
  }

  public toString(): string {
    return internalHandler.run<string>(this, 'string', []);
  }

  public forEach(callbackfn: (value: string, key: number, parent: IDOMTokenList) => void, thisArg?: any): void {
    internalHandler.run<void>(this, 'forEach', [callbackfn, thisArg]);
  }

  public entries(): IterableIterator<[number, string]> {
    return internalHandler.run<IterableIterator<[number, string]>>(this, 'entries', []);
  }

  public keys(): IterableIterator<number> {
    return internalHandler.run<IterableIterator<number>>(this, 'keys', []);
  }

  public values(): IterableIterator<string> {
    return internalHandler.run<IterableIterator<string>>(this, 'values', []);
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return internalHandler.run<IterableIterator<string>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: string;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMTokenListProperties {
  length?: number;
  value?: string;
}

export interface IDOMTokenListReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const DOMTokenListPropertyKeys = ['length', 'value'];

// tslint:disable-next-line:variable-name
export const DOMTokenListConstantKeys = [];
