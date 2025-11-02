import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { ISVGGraphicsElement, IWindowEventHandlers, ISVGSVGElementEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGNumber, IElement, ISVGSVGElement } from '../interfaces';
import { ISVGGraphicsElementProperties, ISVGGraphicsElementReadonlyProperties, SVGGraphicsElementPropertyKeys, SVGGraphicsElementConstantKeys } from './SVGGraphicsElement';
import { IWindowEventHandlersProperties, IWindowEventHandlersReadonlyProperties, WindowEventHandlersPropertyKeys, WindowEventHandlersConstantKeys } from '../mixins/WindowEventHandlers';

export const { getState, setState, setHiddenState, setReadonlyOfSVGSVGElement } = StateMachine<
  ISVGSVGElement,
  ISVGSVGElementProperties,
  ISVGSVGElementReadonlyProperties
>('SVGSVGElement');
export const internalHandler = new InternalHandler<ISVGSVGElement>('SVGSVGElement', getState, setState);

// tslint:disable-next-line:variable-name
export function SVGSVGElementGenerator(SVGGraphicsElement: Constructable<ISVGGraphicsElement>, WindowEventHandlers: Constructable<IWindowEventHandlers>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(SVGGraphicsElement, [WindowEventHandlers]) as unknown) as Constructable<ISVGGraphicsElement & IWindowEventHandlers>;

  return class SVGSVGElement extends Parent implements ISVGSVGElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<SVGSVGElement>(SVGSVGElement, this, internalHandler, SVGSVGElementConstantKeys, SVGSVGElementPropertyKeys);
    }

    // methods

    public createSVGNumber(): ISVGNumber {
      return internalHandler.run<ISVGNumber>(this, 'createSVGNumber', []);
    }

    public forceRedraw(): void {
      internalHandler.run<void>(this, 'forceRedraw', []);
    }

    public getElementById(elementId: string): IElement {
      return internalHandler.run<IElement>(this, 'getElementById', [elementId]);
    }

    public suspendRedraw(maxWaitMilliseconds: number): number {
      return internalHandler.run<number>(this, 'suspendRedraw', [maxWaitMilliseconds]);
    }

    public unsuspendRedraw(suspendHandleID: number): void {
      internalHandler.run<void>(this, 'unsuspendRedraw', [suspendHandleID]);
    }

    public unsuspendRedrawAll(): void {
      internalHandler.run<void>(this, 'unsuspendRedrawAll', []);
    }

    public addEventListener<K extends keyof ISVGSVGElementEventMap>(type: K, listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof ISVGSVGElementEventMap>(type: K, listener: (this: ISVGSVGElement, ev: ISVGSVGElementEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGSVGElementProperties extends ISVGGraphicsElementProperties, IWindowEventHandlersProperties {}

export interface ISVGSVGElementReadonlyProperties extends ISVGGraphicsElementReadonlyProperties, IWindowEventHandlersReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const SVGSVGElementPropertyKeys = [...SVGGraphicsElementPropertyKeys, ...WindowEventHandlersPropertyKeys];

// tslint:disable-next-line:variable-name
export const SVGSVGElementConstantKeys = [...SVGGraphicsElementConstantKeys, ...WindowEventHandlersConstantKeys];
