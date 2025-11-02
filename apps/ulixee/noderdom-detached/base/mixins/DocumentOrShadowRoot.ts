import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IElement, IDocumentOrShadowRoot } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IDocumentOrShadowRoot,
  IDocumentOrShadowRootProperties,
  IDocumentOrShadowRootReadonlyProperties
>('DocumentOrShadowRoot');
export const internalHandler = new InternalHandler<IDocumentOrShadowRoot>('DocumentOrShadowRoot', getState, setState);

export default class DocumentOrShadowRoot implements IDocumentOrShadowRoot {
  public get activeElement(): IElement | null {
    return internalHandler.get<IElement | null>(this, 'activeElement', true);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDocumentOrShadowRootProperties {
  activeElement?: IElement | null;
}

export interface IDocumentOrShadowRootReadonlyProperties {
  activeElement?: IElement | null;
}

// tslint:disable-next-line:variable-name
export const DocumentOrShadowRootPropertyKeys = ['activeElement'];

// tslint:disable-next-line:variable-name
export const DocumentOrShadowRootConstantKeys = [];
