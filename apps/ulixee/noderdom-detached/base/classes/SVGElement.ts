import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IElement, IElementCSSInlineStyle, IGlobalEventHandlers, IHTMLOrSVGElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, ISVGElement } from '../interfaces';
import { IElementProperties, IElementReadonlyProperties, ElementPropertyKeys, ElementConstantKeys } from './Element';
import { IElementCSSInlineStyleProperties, IElementCSSInlineStyleReadonlyProperties, ElementCSSInlineStylePropertyKeys, ElementCSSInlineStyleConstantKeys } from '../mixins/ElementCSSInlineStyle';
import { IGlobalEventHandlersProperties, IGlobalEventHandlersReadonlyProperties, GlobalEventHandlersPropertyKeys, GlobalEventHandlersConstantKeys } from '../mixins/GlobalEventHandlers';
import { IHTMLOrSVGElementProperties, IHTMLOrSVGElementReadonlyProperties, HTMLOrSVGElementPropertyKeys, HTMLOrSVGElementConstantKeys } from '../mixins/HTMLOrSVGElement';

export const { getState, setState, setHiddenState, setReadonlyOfSVGElement } = StateMachine<
  ISVGElement,
  ISVGElementProperties,
  ISVGElementReadonlyProperties
>('SVGElement');
export const internalHandler = new InternalHandler<ISVGElement>('SVGElement', getState, setState);

// tslint:disable-next-line:variable-name
export function SVGElementGenerator(Element: Constructable<IElement>, ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, GlobalEventHandlers: Constructable<IGlobalEventHandlers>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Element, [ElementCSSInlineStyle, GlobalEventHandlers, HTMLOrSVGElement]) as unknown) as Constructable<IElement & IElementCSSInlineStyle & IGlobalEventHandlers & IHTMLOrSVGElement>;

  return class SVGElement extends Parent implements ISVGElement {constructor() {
      super();
      initializeConstantsAndPrototypes<SVGElement>(SVGElement, this, internalHandler, SVGElementConstantKeys, SVGElementPropertyKeys);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: ISVGElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISVGElementProperties extends IElementProperties, IElementCSSInlineStyleProperties, IGlobalEventHandlersProperties, IHTMLOrSVGElementProperties {}

export interface ISVGElementReadonlyProperties extends IElementReadonlyProperties, IElementCSSInlineStyleReadonlyProperties, IGlobalEventHandlersReadonlyProperties, IHTMLOrSVGElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const SVGElementPropertyKeys = [...ElementPropertyKeys, ...ElementCSSInlineStylePropertyKeys, ...GlobalEventHandlersPropertyKeys, ...HTMLOrSVGElementPropertyKeys];

// tslint:disable-next-line:variable-name
export const SVGElementConstantKeys = [...ElementConstantKeys, ...ElementCSSInlineStyleConstantKeys, ...GlobalEventHandlersConstantKeys, ...HTMLOrSVGElementConstantKeys];
