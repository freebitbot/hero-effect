import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IEventTarget, IDocument, INode, IElement, INodeList, IGetRootNodeOptions } from '../interfaces';
import { IEventTargetProperties, IEventTargetReadonlyProperties, EventTargetPropertyKeys, EventTargetConstantKeys } from './EventTarget';

export const { getState, setState, setHiddenState, setReadonlyOfNode } = StateMachine<
  INode,
  INodeProperties,
  INodeReadonlyProperties
>('Node');
export const internalHandler = new InternalHandler<INode>('Node', getState, setState);

// tslint:disable-next-line:variable-name
export function NodeGenerator(EventTarget: Constructable<IEventTarget>) {
  return class Node extends EventTarget implements INode {
    public static readonly ATTRIBUTE_NODE: number = 2;
    public static readonly CDATA_SECTION_NODE: number = 4;
    public static readonly COMMENT_NODE: number = 8;
    public static readonly DOCUMENT_FRAGMENT_NODE: number = 11;
    public static readonly DOCUMENT_NODE: number = 9;
    public static readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
    public static readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
    public static readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
    public static readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
    public static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number = 0x20;
    public static readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
    public static readonly DOCUMENT_TYPE_NODE: number = 10;
    public static readonly ELEMENT_NODE: number = 1;
    public static readonly ENTITY_NODE: number = 6;
    public static readonly ENTITY_REFERENCE_NODE: number = 5;
    public static readonly NOTATION_NODE: number = 12;
    public static readonly PROCESSING_INSTRUCTION_NODE: number = 7;
    public static readonly TEXT_NODE: number = 3;

    public readonly ATTRIBUTE_NODE: number = 2;
    public readonly CDATA_SECTION_NODE: number = 4;
    public readonly COMMENT_NODE: number = 8;
    public readonly DOCUMENT_FRAGMENT_NODE: number = 11;
    public readonly DOCUMENT_NODE: number = 9;
    public readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
    public readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
    public readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
    public readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
    public readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number = 0x20;
    public readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
    public readonly DOCUMENT_TYPE_NODE: number = 10;
    public readonly ELEMENT_NODE: number = 1;
    public readonly ENTITY_NODE: number = 6;
    public readonly ENTITY_REFERENCE_NODE: number = 5;
    public readonly NOTATION_NODE: number = 12;
    public readonly PROCESSING_INSTRUCTION_NODE: number = 7;
    public readonly TEXT_NODE: number = 3;

    constructor() {
      super();
      initializeConstantsAndPrototypes<Node>(Node, this, internalHandler, NodeConstantKeys, NodePropertyKeys);
    }

    // properties

    public get baseURI(): string {
      return internalHandler.get<string>(this, 'baseURI', false);
    }

    public get childNodes(): INodeList {
      return internalHandler.get<INodeList>(this, 'childNodes', false);
    }

    public get firstChild(): INode | null {
      return internalHandler.get<INode | null>(this, 'firstChild', true);
    }

    public get isConnected(): boolean {
      return internalHandler.get<boolean>(this, 'isConnected', false);
    }

    public get lastChild(): INode | null {
      return internalHandler.get<INode | null>(this, 'lastChild', true);
    }

    public get nextSibling(): INode | null {
      return internalHandler.get<INode | null>(this, 'nextSibling', true);
    }

    public get nodeName(): string {
      return internalHandler.get<string>(this, 'nodeName', false);
    }

    public get nodeType(): number {
      return internalHandler.get<number>(this, 'nodeType', false);
    }

    public get nodeValue(): string | null {
      return internalHandler.get<string | null>(this, 'nodeValue', true);
    }

    public set nodeValue(value: string | null) {
      internalHandler.set<string | null>(this, 'nodeValue', value);
    }

    public get ownerDocument(): IDocument | null {
      return internalHandler.get<IDocument | null>(this, 'ownerDocument', true);
    }

    public get parentElement(): IElement | null {
      return internalHandler.get<IElement | null>(this, 'parentElement', true);
    }

    public get parentNode(): INode | null {
      return internalHandler.get<INode | null>(this, 'parentNode', true);
    }

    public get previousSibling(): INode | null {
      return internalHandler.get<INode | null>(this, 'previousSibling', true);
    }

    public get textContent(): string | null {
      return internalHandler.get<string | null>(this, 'textContent', true);
    }

    public set textContent(value: string | null) {
      internalHandler.set<string | null>(this, 'textContent', value);
    }

    // methods

    public appendChild(node: INode): INode {
      return internalHandler.run<INode>(this, 'appendChild', [node]);
    }

    public cloneNode(deep?: boolean): INode {
      return internalHandler.run<INode>(this, 'cloneNode', [deep]);
    }

    public compareDocumentPosition(other: INode): number {
      return internalHandler.run<number>(this, 'compareDocumentPosition', [other]);
    }

    public contains(other: INode | null): boolean {
      return internalHandler.run<boolean>(this, 'contains', [other]);
    }

    public getRootNode(options?: IGetRootNodeOptions): INode {
      return internalHandler.run<INode>(this, 'getRootNode', [options]);
    }

    public hasChildNodes(): boolean {
      return internalHandler.run<boolean>(this, 'hasChildNodes', []);
    }

    public insertBefore(node: INode, child: INode | null): INode {
      return internalHandler.run<INode>(this, 'insertBefore', [node, child]);
    }

    public isDefaultNamespace(namespace: string | null): boolean {
      return internalHandler.run<boolean>(this, 'isDefaultNamespace', [namespace]);
    }

    public isEqualNode(otherNode: INode | null): boolean {
      return internalHandler.run<boolean>(this, 'isEqualNode', [otherNode]);
    }

    public isSameNode(otherNode: INode | null): boolean {
      return internalHandler.run<boolean>(this, 'isSameNode', [otherNode]);
    }

    public lookupNamespaceURI(prefix: string | null): string | null {
      return internalHandler.run<string | null>(this, 'lookupNamespaceURI', [prefix]);
    }

    public lookupPrefix(namespace: string | null): string | null {
      return internalHandler.run<string | null>(this, 'lookupPrefix', [namespace]);
    }

    public normalize(): void {
      internalHandler.run<void>(this, 'normalize', []);
    }

    public removeChild(child: INode): INode {
      return internalHandler.run<INode>(this, 'removeChild', [child]);
    }

    public replaceChild(node: INode, child: INode): INode {
      return internalHandler.run<INode>(this, 'replaceChild', [node, child]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface INodeProperties extends IEventTargetProperties {
  baseURI?: string;
  childNodes?: INodeList;
  firstChild?: INode | null;
  isConnected?: boolean;
  lastChild?: INode | null;
  nextSibling?: INode | null;
  nodeName?: string;
  nodeType?: number;
  nodeValue?: string | null;
  ownerDocument?: IDocument | null;
  parentElement?: IElement | null;
  parentNode?: INode | null;
  previousSibling?: INode | null;
  textContent?: string | null;
}

export interface INodeReadonlyProperties extends IEventTargetReadonlyProperties {
  baseURI?: string;
  childNodes?: INodeList;
  firstChild?: INode | null;
  isConnected?: boolean;
  lastChild?: INode | null;
  nextSibling?: INode | null;
  nodeName?: string;
  nodeType?: number;
  ownerDocument?: IDocument | null;
  parentElement?: IElement | null;
  parentNode?: INode | null;
  previousSibling?: INode | null;
}

// tslint:disable-next-line:variable-name
export const NodePropertyKeys = [...EventTargetPropertyKeys, 'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];

// tslint:disable-next-line:variable-name
export const NodeConstantKeys = [...EventTargetConstantKeys, 'ELEMENT_NODE', 'ATTRIBUTE_NODE', 'TEXT_NODE', 'CDATA_SECTION_NODE', 'ENTITY_REFERENCE_NODE', 'ENTITY_NODE', 'PROCESSING_INSTRUCTION_NODE', 'COMMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_TYPE_NODE', 'DOCUMENT_FRAGMENT_NODE', 'NOTATION_NODE', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC'];
