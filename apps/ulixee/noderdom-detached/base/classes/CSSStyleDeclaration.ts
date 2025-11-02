import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ICSSRule, ICSSStyleDeclaration } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfCSSStyleDeclaration } = StateMachine<
  ICSSStyleDeclaration,
  ICSSStyleDeclarationProperties,
  ICSSStyleDeclarationReadonlyProperties
>('CSSStyleDeclaration');
export const internalHandler = new InternalHandler<ICSSStyleDeclaration>('CSSStyleDeclaration', getState, setState);

export default class CSSStyleDeclaration implements ICSSStyleDeclaration {
  constructor() {
    initializeConstantsAndPrototypes<CSSStyleDeclaration>(CSSStyleDeclaration, this, internalHandler, CSSStyleDeclarationConstantKeys, CSSStyleDeclarationPropertyKeys);
  }

  // properties

  public get cssFloat(): string {
    return internalHandler.get<string>(this, 'cssFloat', false);
  }

  public set cssFloat(value: string) {
    internalHandler.set<string>(this, 'cssFloat', value);
  }

  public get cssText(): string {
    return internalHandler.get<string>(this, 'cssText', false);
  }

  public set cssText(value: string) {
    internalHandler.set<string>(this, 'cssText', value);
  }

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  public get parentRule(): ICSSRule | null {
    return internalHandler.get<ICSSRule | null>(this, 'parentRule', true);
  }

  // methods

  public getPropertyPriority(property: string): string {
    return internalHandler.run<string>(this, 'getPropertyPriority', [property]);
  }

  public getPropertyValue(property: string): string {
    return internalHandler.run<string>(this, 'getPropertyValue', [property]);
  }

  public item(index: number): string {
    return internalHandler.run<string>(this, 'item', [index]);
  }

  public removeProperty(property: string): string {
    return internalHandler.run<string>(this, 'removeProperty', [property]);
  }

  public setProperty(property: string, value: string, priority?: string): void {
    internalHandler.run<void>(this, 'setProperty', [property, value, priority]);
  }

  public [Symbol.iterator](): IterableIterator<string> {
    return internalHandler.run<IterableIterator<string>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: string;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ICSSStyleDeclarationProperties {
  cssFloat?: string;
  cssText?: string;
  length?: number;
  parentRule?: ICSSRule | null;
}

export interface ICSSStyleDeclarationReadonlyProperties {
  length?: number;
  parentRule?: ICSSRule | null;
}

// tslint:disable-next-line:variable-name
export const CSSStyleDeclarationPropertyKeys = ['cssFloat', 'cssText', 'length', 'parentRule'];

// tslint:disable-next-line:variable-name
export const CSSStyleDeclarationConstantKeys = [];
