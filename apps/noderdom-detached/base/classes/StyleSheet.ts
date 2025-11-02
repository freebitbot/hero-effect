import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IElement, IProcessingInstruction, ICSSStyleSheet, IMediaList, IStyleSheet } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfStyleSheet } = StateMachine<
  IStyleSheet,
  IStyleSheetProperties,
  IStyleSheetReadonlyProperties
>('StyleSheet');
export const internalHandler = new InternalHandler<IStyleSheet>('StyleSheet', getState, setState);

export default class StyleSheet implements IStyleSheet {
  constructor() {
    initializeConstantsAndPrototypes<StyleSheet>(StyleSheet, this, internalHandler, StyleSheetConstantKeys, StyleSheetPropertyKeys);
  }

  // properties

  public get disabled(): boolean {
    return internalHandler.get<boolean>(this, 'disabled', false);
  }

  public set disabled(value: boolean) {
    internalHandler.set<boolean>(this, 'disabled', value);
  }

  public get href(): string | null {
    return internalHandler.get<string | null>(this, 'href', true);
  }

  public get media(): IMediaList {
    return internalHandler.get<IMediaList>(this, 'media', false);
  }

  public get ownerNode(): IElement | IProcessingInstruction | null {
    return internalHandler.get<IElement | IProcessingInstruction | null>(this, 'ownerNode', true);
  }

  public get parentStyleSheet(): ICSSStyleSheet | null {
    return internalHandler.get<ICSSStyleSheet | null>(this, 'parentStyleSheet', true);
  }

  public get title(): string | null {
    return internalHandler.get<string | null>(this, 'title', true);
  }

  public get type(): string {
    return internalHandler.get<string>(this, 'type', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IStyleSheetProperties {
  disabled?: boolean;
  href?: string | null;
  media?: IMediaList;
  ownerNode?: IElement | IProcessingInstruction | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  title?: string | null;
  type?: string;
}

export interface IStyleSheetReadonlyProperties {
  href?: string | null;
  media?: IMediaList;
  ownerNode?: IElement | IProcessingInstruction | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  title?: string | null;
  type?: string;
}

// tslint:disable-next-line:variable-name
export const StyleSheetPropertyKeys = ['disabled', 'href', 'media', 'ownerNode', 'parentStyleSheet', 'title', 'type'];

// tslint:disable-next-line:variable-name
export const StyleSheetConstantKeys = [];
