import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IHTMLTrackElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLTrackElement } = StateMachine<
  IHTMLTrackElement,
  IHTMLTrackElementProperties,
  IHTMLTrackElementReadonlyProperties
>('HTMLTrackElement');
export const internalHandler = new InternalHandler<IHTMLTrackElement>('HTMLTrackElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLTrackElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLTrackElement extends HTMLElement implements IHTMLTrackElement {
    public static readonly ERROR: number = 3;
    public static readonly LOADED: number = 2;
    public static readonly LOADING: number = 1;
    public static readonly NONE: number = 0;

    public readonly ERROR: number = 3;
    public readonly LOADED: number = 2;
    public readonly LOADING: number = 1;
    public readonly NONE: number = 0;

    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLTrackElement>(HTMLTrackElement, this, internalHandler, HTMLTrackElementConstantKeys, HTMLTrackElementPropertyKeys);
    }

    // properties

    public get default(): boolean {
      return internalHandler.get<boolean>(this, 'default', false);
    }

    public set default(value: boolean) {
      internalHandler.set<boolean>(this, 'default', value);
    }

    public get kind(): string {
      return internalHandler.get<string>(this, 'kind', false);
    }

    public set kind(value: string) {
      internalHandler.set<string>(this, 'kind', value);
    }

    public get label(): string {
      return internalHandler.get<string>(this, 'label', false);
    }

    public set label(value: string) {
      internalHandler.set<string>(this, 'label', value);
    }

    public get readyState(): number {
      return internalHandler.get<number>(this, 'readyState', false);
    }

    public get src(): string {
      return internalHandler.get<string>(this, 'src', false);
    }

    public set src(value: string) {
      internalHandler.set<string>(this, 'src', value);
    }

    public get srclang(): string {
      return internalHandler.get<string>(this, 'srclang', false);
    }

    public set srclang(value: string) {
      internalHandler.set<string>(this, 'srclang', value);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTrackElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLTrackElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLTrackElementProperties extends IHTMLElementProperties {
  default?: boolean;
  kind?: string;
  label?: string;
  readyState?: number;
  src?: string;
  srclang?: string;
}

export interface IHTMLTrackElementReadonlyProperties extends IHTMLElementReadonlyProperties {
  readyState?: number;
}

// tslint:disable-next-line:variable-name
export const HTMLTrackElementPropertyKeys = [...HTMLElementPropertyKeys, 'default', 'kind', 'label', 'readyState', 'src', 'srclang'];

// tslint:disable-next-line:variable-name
export const HTMLTrackElementConstantKeys = [...HTMLElementConstantKeys, 'NONE', 'LOADING', 'LOADED', 'ERROR'];
