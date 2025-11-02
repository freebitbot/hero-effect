import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISVGElement, ISVGTests, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGGraphicsElement } from '../interfaces';
import { ISVGElementProperties, ISVGElementReadonlyProperties, SVGElementPropertyKeys, SVGElementConstantKeys } from './SVGElement';
import { ISVGTestsProperties, ISVGTestsReadonlyProperties, SVGTestsPropertyKeys, SVGTestsConstantKeys } from '../mixins/SVGTests';

export const { getState, setState, setHiddenState, setReadonlyOfSVGGraphicsElement } = StateMachine<
  ISVGGraphicsElement,
  ISVGGraphicsElementProperties,
  ISVGGraphicsElementReadonlyProperties
>('SVGGraphicsElement');
export const internalHandler = new InternalHandler<ISVGGraphicsElement>('SVGGraphicsElement', getState, setState);

// tslint:disable-next-line:variable-name
export function SVGGraphicsElementGenerator(SVGElement: Constructable<ISVGElement>, SVGTests: Constructable<ISVGTests>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(SVGElement, [SVGTests]) as unknown) as Constructable<ISVGElement & ISVGTests>;

  return class SVGGraphicsElement extends Parent implements ISVGGraphicsElement {constructor() {
      super();
      initializeConstantsAndPrototypes<SVGGraphicsElement>(SVGGraphicsElement, this, internalHandler, SVGGraphicsElementConstantKeys, SVGGraphicsElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGGraphicsElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGGraphicsElementProperties extends ISVGElementProperties, ISVGTestsProperties {}

export interface ISVGGraphicsElementReadonlyProperties extends ISVGElementReadonlyProperties, ISVGTestsReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const SVGGraphicsElementPropertyKeys = [...SVGElementPropertyKeys, ...SVGTestsPropertyKeys];

// tslint:disable-next-line:variable-name
export const SVGGraphicsElementConstantKeys = [...SVGElementConstantKeys, ...SVGTestsConstantKeys];
