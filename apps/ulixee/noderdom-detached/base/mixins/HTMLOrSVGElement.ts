import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDOMStringMap, IHTMLOrSVGElement } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IHTMLOrSVGElement,
  IHTMLOrSVGElementProperties,
  IHTMLOrSVGElementReadonlyProperties
>('HTMLOrSVGElement');
export const internalHandler = new InternalHandler<IHTMLOrSVGElement>('HTMLOrSVGElement', getState, setState);

export default class HTMLOrSVGElement implements IHTMLOrSVGElement {
  public get dataset(): IDOMStringMap {
    return internalHandler.get<IDOMStringMap>(this, 'dataset', false);
  }

  public get nonce(): string {
    return internalHandler.get<string>(this, 'nonce', false);
  }

  public set nonce(value: string) {
    internalHandler.set<string>(this, 'nonce', value);
  }

  public get tabIndex(): number {
    return internalHandler.get<number>(this, 'tabIndex', false);
  }

  public set tabIndex(value: number) {
    internalHandler.set<number>(this, 'tabIndex', value);
  }

  // methods

  public blur(): void {
    internalHandler.run<void>(this, 'blur', []);
  }

  public focus(): void {
    internalHandler.run<void>(this, 'focus', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLOrSVGElementProperties {
  dataset?: IDOMStringMap;
  nonce?: string;
  tabIndex?: number;
}

export interface IHTMLOrSVGElementReadonlyProperties {
  dataset?: IDOMStringMap;
}

// tslint:disable-next-line:variable-name
export const HTMLOrSVGElementPropertyKeys = ['dataset', 'nonce', 'tabIndex'];

// tslint:disable-next-line:variable-name
export const HTMLOrSVGElementConstantKeys = [];
