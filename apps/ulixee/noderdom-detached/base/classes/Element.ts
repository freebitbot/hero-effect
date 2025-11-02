import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IChildNode, INonDocumentTypeChildNode, IParentNode, ISlotable, IDOMTokenList, INamedNodeMap, IShadowRoot, IAttr, IShadowRootInit, IElement, IHTMLCollection, IDOMRectList, IDOMRect } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { IChildNodeProperties, IChildNodeReadonlyProperties, ChildNodePropertyKeys, ChildNodeConstantKeys } from '../mixins/ChildNode';
import { INonDocumentTypeChildNodeProperties, INonDocumentTypeChildNodeReadonlyProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties, IParentNodeReadonlyProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../mixins/ParentNode';
import { ISlotableProperties, ISlotableReadonlyProperties, SlotablePropertyKeys, SlotableConstantKeys } from '../mixins/Slotable';

export const { getState, setState, setHiddenState, setReadonlyOfElement } = StateMachine<
  IElement,
  IElementProperties,
  IElementReadonlyProperties
>('Element');
export const internalHandler = new InternalHandler<IElement>('Element', getState, setState);

// tslint:disable-next-line:variable-name
export function ElementGenerator(Node: Constructable<INode>, ChildNode: Constructable<IChildNode>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>, Slotable: Constructable<ISlotable>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [ChildNode, NonDocumentTypeChildNode, ParentNode, Slotable]) as unknown) as Constructable<INode & IChildNode & INonDocumentTypeChildNode & IParentNode & ISlotable>;

  return class Element extends Parent implements IElement {
    constructor() {
      super();
      initializeConstantsAndPrototypes<Element>(Element, this, internalHandler, ElementConstantKeys, ElementPropertyKeys);
    }

    // properties

    public get attributes(): INamedNodeMap {
      return internalHandler.get<INamedNodeMap>(this, 'attributes', false);
    }

    public get classList(): IDOMTokenList {
      return internalHandler.get<IDOMTokenList>(this, 'classList', false);
    }

    public get className(): string {
      return internalHandler.get<string>(this, 'className', false);
    }

    public set className(value: string) {
      internalHandler.set<string>(this, 'className', value);
    }

    public get clientHeight(): number {
      return internalHandler.get<number>(this, 'clientHeight', false);
    }

    public get clientLeft(): number {
      return internalHandler.get<number>(this, 'clientLeft', false);
    }

    public get clientTop(): number {
      return internalHandler.get<number>(this, 'clientTop', false);
    }

    public get clientWidth(): number {
      return internalHandler.get<number>(this, 'clientWidth', false);
    }

    public get id(): string {
      return internalHandler.get<string>(this, 'id', false);
    }

    public set id(value: string) {
      internalHandler.set<string>(this, 'id', value);
    }

    public get innerHTML(): string {
      return internalHandler.get<string>(this, 'innerHTML', false);
    }

    public set innerHTML(value: string) {
      internalHandler.set<string>(this, 'innerHTML', value);
    }

    public get localName(): string {
      return internalHandler.get<string>(this, 'localName', false);
    }

    public get namespaceURI(): string | null {
      return internalHandler.get<string | null>(this, 'namespaceURI', true);
    }

    public get outerHTML(): string {
      return internalHandler.get<string>(this, 'outerHTML', false);
    }

    public set outerHTML(value: string) {
      internalHandler.set<string>(this, 'outerHTML', value);
    }

    public get prefix(): string | null {
      return internalHandler.get<string | null>(this, 'prefix', true);
    }

    public get scrollHeight(): number {
      return internalHandler.get<number>(this, 'scrollHeight', false);
    }

    public get scrollLeft(): number {
      return internalHandler.get<number>(this, 'scrollLeft', false);
    }

    public set scrollLeft(value: number) {
      internalHandler.set<number>(this, 'scrollLeft', value);
    }

    public get scrollTop(): number {
      return internalHandler.get<number>(this, 'scrollTop', false);
    }

    public set scrollTop(value: number) {
      internalHandler.set<number>(this, 'scrollTop', value);
    }

    public get scrollWidth(): number {
      return internalHandler.get<number>(this, 'scrollWidth', false);
    }

    public get shadowRoot(): IShadowRoot | null {
      return internalHandler.get<IShadowRoot | null>(this, 'shadowRoot', true);
    }

    public get slot(): string {
      return internalHandler.get<string>(this, 'slot', false);
    }

    public set slot(value: string) {
      internalHandler.set<string>(this, 'slot', value);
    }

    public get tagName(): string {
      return internalHandler.get<string>(this, 'tagName', false);
    }

    // methods

    public attachShadow(init: IShadowRootInit): IShadowRoot {
      return internalHandler.run<IShadowRoot>(this, 'attachShadow', [init]);
    }

    public closest(selectors: string): IElement | null {
      return internalHandler.run<IElement | null>(this, 'closest', [selectors]);
    }

    public getAttribute(qualifiedName: string): string | null {
      return internalHandler.run<string | null>(this, 'getAttribute', [qualifiedName]);
    }

    public getAttributeNS(namespace: string | null, localName: string): string | null {
      return internalHandler.run<string | null>(this, 'getAttributeNS', [namespace, localName]);
    }

    public getAttributeNames(): Iterable<string> {
      return internalHandler.run<Iterable<string>>(this, 'getAttributeNames', []);
    }

    public getAttributeNode(qualifiedName: string): IAttr | null {
      return internalHandler.run<IAttr | null>(this, 'getAttributeNode', [qualifiedName]);
    }

    public getAttributeNodeNS(namespace: string | null, localName: string): IAttr | null {
      return internalHandler.run<IAttr | null>(this, 'getAttributeNodeNS', [namespace, localName]);
    }

    public getBoundingClientRect(): IDOMRect {
      return internalHandler.run<IDOMRect>(this, 'getBoundingClientRect', []);
    }

    public getClientRects(): IDOMRectList {
      return internalHandler.run<IDOMRectList>(this, 'getClientRects', []);
    }

    public getElementsByClassName(classNames: string): IHTMLCollection {
      return internalHandler.run<IHTMLCollection>(this, 'getElementsByClassName', [classNames]);
    }

    public getElementsByTagName(qualifiedName: string): IHTMLCollection {
      return internalHandler.run<IHTMLCollection>(this, 'getElementsByTagName', [qualifiedName]);
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
      return internalHandler.run<IHTMLCollection>(this, 'getElementsByTagNameNS', [namespace, localName]);
    }

    public hasAttribute(qualifiedName: string): boolean {
      return internalHandler.run<boolean>(this, 'hasAttribute', [qualifiedName]);
    }

    public hasAttributeNS(namespace: string | null, localName: string): boolean {
      return internalHandler.run<boolean>(this, 'hasAttributeNS', [namespace, localName]);
    }

    public hasAttributes(): boolean {
      return internalHandler.run<boolean>(this, 'hasAttributes', []);
    }

    public insertAdjacentElement(where: string, element: IElement): IElement | null {
      return internalHandler.run<IElement | null>(this, 'insertAdjacentElement', [where, element]);
    }

    public insertAdjacentHTML(position: string, text: string): void {
      internalHandler.run<void>(this, 'insertAdjacentHTML', [position, text]);
    }

    public insertAdjacentText(where: string, data: string): void {
      internalHandler.run<void>(this, 'insertAdjacentText', [where, data]);
    }

    public matches(selectors: string): boolean {
      return internalHandler.run<boolean>(this, 'matches', [selectors]);
    }

    public removeAttribute(qualifiedName: string): void {
      internalHandler.run<void>(this, 'removeAttribute', [qualifiedName]);
    }

    public removeAttributeNS(namespace: string | null, localName: string): void {
      internalHandler.run<void>(this, 'removeAttributeNS', [namespace, localName]);
    }

    public removeAttributeNode(attr: IAttr): IAttr {
      return internalHandler.run<IAttr>(this, 'removeAttributeNode', [attr]);
    }

    public setAttribute(qualifiedName: string, value: string): void {
      internalHandler.run<void>(this, 'setAttribute', [qualifiedName, value]);
    }

    public setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
      internalHandler.run<void>(this, 'setAttributeNS', [namespace, qualifiedName, value]);
    }

    public setAttributeNode(attr: IAttr): IAttr | null {
      return internalHandler.run<IAttr | null>(this, 'setAttributeNode', [attr]);
    }

    public setAttributeNodeNS(attr: IAttr): IAttr | null {
      return internalHandler.run<IAttr | null>(this, 'setAttributeNodeNS', [attr]);
    }

    public toggleAttribute(qualifiedName: string, force?: boolean): boolean {
      return internalHandler.run<boolean>(this, 'toggleAttribute', [qualifiedName, force]);
    }

    public webkitMatchesSelector(selectors: string): boolean {
      return internalHandler.run<boolean>(this, 'webkitMatchesSelector', [selectors]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IElementProperties extends INodeProperties, IChildNodeProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties, ISlotableProperties {
  attributes?: INamedNodeMap;
  classList?: IDOMTokenList;
  className?: string;
  clientHeight?: number;
  clientLeft?: number;
  clientTop?: number;
  clientWidth?: number;
  id?: string;
  innerHTML?: string;
  localName?: string;
  namespaceURI?: string | null;
  outerHTML?: string;
  prefix?: string | null;
  scrollHeight?: number;
  scrollLeft?: number;
  scrollTop?: number;
  scrollWidth?: number;
  shadowRoot?: IShadowRoot | null;
  slot?: string;
  tagName?: string;
}

export interface IElementReadonlyProperties extends INodeReadonlyProperties, IChildNodeReadonlyProperties, INonDocumentTypeChildNodeReadonlyProperties, IParentNodeReadonlyProperties, ISlotableReadonlyProperties {
  attributes?: INamedNodeMap;
  classList?: IDOMTokenList;
  clientHeight?: number;
  clientLeft?: number;
  clientTop?: number;
  clientWidth?: number;
  localName?: string;
  namespaceURI?: string | null;
  prefix?: string | null;
  scrollHeight?: number;
  scrollWidth?: number;
  shadowRoot?: IShadowRoot | null;
  tagName?: string;
}

// tslint:disable-next-line:variable-name
export const ElementPropertyKeys = [...NodePropertyKeys, ...ChildNodePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, ...ParentNodePropertyKeys, ...SlotablePropertyKeys, 'attributes', 'classList', 'className', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth', 'id', 'innerHTML', 'localName', 'namespaceURI', 'outerHTML', 'prefix', 'scrollHeight', 'scrollLeft', 'scrollTop', 'scrollWidth', 'shadowRoot', 'slot', 'tagName'];

// tslint:disable-next-line:variable-name
export const ElementConstantKeys = [...NodeConstantKeys, ...ChildNodeConstantKeys, ...NonDocumentTypeChildNodeConstantKeys, ...ParentNodeConstantKeys, ...SlotableConstantKeys];
