import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IAssignedNodesOptions, INode, IElement, IHTMLSlotElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties, HTMLElementPropertyKeys, HTMLElementConstantKeys } from './HTMLElement';

export const { getState, setState, setHiddenState, setReadonlyOfHTMLSlotElement } = StateMachine<
  IHTMLSlotElement,
  IHTMLSlotElementProperties,
  IHTMLSlotElementReadonlyProperties
>('HTMLSlotElement');
export const internalHandler = new InternalHandler<IHTMLSlotElement>('HTMLSlotElement', getState, setState);

// tslint:disable-next-line:variable-name
export function HTMLSlotElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSlotElement extends HTMLElement implements IHTMLSlotElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<HTMLSlotElement>(HTMLSlotElement, this, internalHandler, HTMLSlotElementConstantKeys, HTMLSlotElementPropertyKeys);
    }

    // properties

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }

    public set name(value: string) {
      internalHandler.set<string>(this, 'name', value);
    }

    // methods

    public assignedElements(options?: IAssignedNodesOptions): Iterable<IElement> {
      return internalHandler.run<Iterable<IElement>>(this, 'assignedElements', [options]);
    }

    public assignedNodes(options?: IAssignedNodesOptions): Iterable<INode> {
      return internalHandler.run<Iterable<INode>>(this, 'assignedNodes', [options]);
    }

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IHTMLSlotElementProperties extends IHTMLElementProperties {
  name?: string;
}

export interface IHTMLSlotElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const HTMLSlotElementPropertyKeys = [...HTMLElementPropertyKeys, 'name'];

// tslint:disable-next-line:variable-name
export const HTMLSlotElementConstantKeys = [...HTMLElementConstantKeys];
