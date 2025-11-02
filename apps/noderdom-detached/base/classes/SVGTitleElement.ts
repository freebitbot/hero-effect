import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISVGElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGTitleElement } from '../interfaces';
import { ISVGElementProperties, ISVGElementReadonlyProperties, SVGElementPropertyKeys, SVGElementConstantKeys } from './SVGElement';

export const { getState, setState, setHiddenState, setReadonlyOfSVGTitleElement } = StateMachine<
  ISVGTitleElement,
  ISVGTitleElementProperties,
  ISVGTitleElementReadonlyProperties
>('SVGTitleElement');
export const internalHandler = new InternalHandler<ISVGTitleElement>('SVGTitleElement', getState, setState);

// tslint:disable-next-line:variable-name
export function SVGTitleElementGenerator(SVGElement: Constructable<ISVGElement>) {
  return class SVGTitleElement extends SVGElement implements ISVGTitleElement {constructor() {
      super();
      initializeConstantsAndPrototypes<SVGTitleElement>(SVGTitleElement, this, internalHandler, SVGTitleElementConstantKeys, SVGTitleElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGTitleElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGTitleElementProperties extends ISVGElementProperties {}

export interface ISVGTitleElementReadonlyProperties extends ISVGElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const SVGTitleElementPropertyKeys = [...SVGElementPropertyKeys];

// tslint:disable-next-line:variable-name
export const SVGTitleElementConstantKeys = [...SVGElementConstantKeys];
