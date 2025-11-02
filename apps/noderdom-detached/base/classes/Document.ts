import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IDocumentOrShadowRoot, IGlobalEventHandlers, INonElementParentNode, IParentNode, IDocumentEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IDOMImplementation, IDocumentType, IElement, ILocation, IDocumentReadyState, IHTMLElement, IHTMLHeadElement, IHTMLCollection, IHTMLScriptElement, IWindowProxy, IVisibilityState, IElementCreationOptions, IDocumentFragment, IText, ICDATASection, IComment, IProcessingInstruction, IAttr, IEvent, IRange, INodeFilter, INodeIterator, ITreeWalker, INodeList, IDocument, ISelection } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from './Node';
import { IDocumentOrShadowRootProperties, IDocumentOrShadowRootReadonlyProperties, DocumentOrShadowRootPropertyKeys, DocumentOrShadowRootConstantKeys } from '../mixins/DocumentOrShadowRoot';
import { IGlobalEventHandlersProperties, IGlobalEventHandlersReadonlyProperties, GlobalEventHandlersPropertyKeys, GlobalEventHandlersConstantKeys } from '../mixins/GlobalEventHandlers';
import { INonElementParentNodeProperties, INonElementParentNodeReadonlyProperties, NonElementParentNodePropertyKeys, NonElementParentNodeConstantKeys } from '../mixins/NonElementParentNode';
import { IParentNodeProperties, IParentNodeReadonlyProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../mixins/ParentNode';

export const { getState, setState, setHiddenState, setReadonlyOfDocument } = StateMachine<
  IDocument,
  IDocumentProperties,
  IDocumentReadonlyProperties
>('Document');
export const internalHandler = new InternalHandler<IDocument>('Document', getState, setState);

// tslint:disable-next-line:variable-name
export function DocumentGenerator(Node: Constructable<INode>, DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>, GlobalEventHandlers: Constructable<IGlobalEventHandlers>, NonElementParentNode: Constructable<INonElementParentNode>, ParentNode: Constructable<IParentNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [DocumentOrShadowRoot, GlobalEventHandlers, NonElementParentNode, ParentNode]) as unknown) as Constructable<INode & IDocumentOrShadowRoot & IGlobalEventHandlers & INonElementParentNode & IParentNode>;

  return class Document extends Parent implements IDocument {
    constructor() {
      super();
      initializeConstantsAndPrototypes<Document>(Document, this, internalHandler, DocumentConstantKeys, DocumentPropertyKeys);
    }

    // properties

    public get URL(): string {
      return internalHandler.get<string>(this, 'URL', false);
    }

    public get anchors(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'anchors', false);
    }

    public get applets(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'applets', false);
    }

    public get body(): IHTMLElement | null {
      return internalHandler.get<IHTMLElement | null>(this, 'body', true);
    }

    public set body(value: IHTMLElement | null) {
      internalHandler.set<IHTMLElement | null>(this, 'body', value);
    }

    public get characterSet(): string {
      return internalHandler.get<string>(this, 'characterSet', false);
    }

    public get charset(): string {
      return internalHandler.get<string>(this, 'charset', false);
    }

    public get compatMode(): string {
      return internalHandler.get<string>(this, 'compatMode', false);
    }

    public get contentType(): string {
      return internalHandler.get<string>(this, 'contentType', false);
    }

    public get cookie(): string {
      return internalHandler.get<string>(this, 'cookie', false);
    }

    public set cookie(value: string) {
      internalHandler.set<string>(this, 'cookie', value);
    }

    public get currentScript(): IHTMLScriptElement | null {
      return internalHandler.get<IHTMLScriptElement | null>(this, 'currentScript', true);
    }

    public get defaultView(): IWindowProxy | null {
      return internalHandler.get<IWindowProxy | null>(this, 'defaultView', true);
    }

    public get dir(): string {
      return internalHandler.get<string>(this, 'dir', false);
    }

    public set dir(value: string) {
      internalHandler.set<string>(this, 'dir', value);
    }

    public get doctype(): IDocumentType | null {
      return internalHandler.get<IDocumentType | null>(this, 'doctype', true);
    }

    public get documentElement(): IElement | null {
      return internalHandler.get<IElement | null>(this, 'documentElement', true);
    }

    public get documentURI(): string {
      return internalHandler.get<string>(this, 'documentURI', false);
    }

    public get embeds(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'embeds', false);
    }

    public get forms(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'forms', false);
    }

    public get head(): IHTMLHeadElement | null {
      return internalHandler.get<IHTMLHeadElement | null>(this, 'head', true);
    }

    public get hidden(): boolean {
      return internalHandler.get<boolean>(this, 'hidden', false);
    }

    public get images(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'images', false);
    }

    public get implementation(): IDOMImplementation {
      return internalHandler.get<IDOMImplementation>(this, 'implementation', false);
    }

    public get inputEncoding(): string {
      return internalHandler.get<string>(this, 'inputEncoding', false);
    }

    public get lastModified(): string {
      return internalHandler.get<string>(this, 'lastModified', false);
    }

    public get links(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'links', false);
    }

    public get location(): ILocation | null {
      return internalHandler.get<ILocation | null>(this, 'location', true);
    }

    public get onreadystatechange(): ((this: IDocument, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IDocument, ev: IEvent) => any) | null>(this, 'onreadystatechange', true);
    }

    public set onreadystatechange(value: ((this: IDocument, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IDocument, ev: IEvent) => any) | null>(this, 'onreadystatechange', value);
    }

    public get onvisibilitychange(): ((this: IDocument, ev: IEvent) => any) | null {
      return internalHandler.get<((this: IDocument, ev: IEvent) => any) | null>(this, 'onvisibilitychange', true);
    }

    public set onvisibilitychange(value: ((this: IDocument, ev: IEvent) => any) | null) {
      internalHandler.set<((this: IDocument, ev: IEvent) => any) | null>(this, 'onvisibilitychange', value);
    }

    public get plugins(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'plugins', false);
    }

    public get readyState(): IDocumentReadyState {
      return internalHandler.get<IDocumentReadyState>(this, 'readyState', false);
    }

    public get referrer(): string {
      return internalHandler.get<string>(this, 'referrer', false);
    }

    public get scripts(): IHTMLCollection {
      return internalHandler.get<IHTMLCollection>(this, 'scripts', false);
    }

    public get title(): string {
      return internalHandler.get<string>(this, 'title', false);
    }

    public set title(value: string) {
      internalHandler.set<string>(this, 'title', value);
    }

    public get visibilityState(): IVisibilityState {
      return internalHandler.get<IVisibilityState>(this, 'visibilityState', false);
    }

    // methods

    public adoptNode(node: INode): INode {
      return internalHandler.run<INode>(this, 'adoptNode', [node]);
    }

    public captureEvents(): void {
      internalHandler.run<void>(this, 'captureEvents', []);
    }

    public clear(): void {
      internalHandler.run<void>(this, 'clear', []);
    }

    public close(): void {
      internalHandler.run<void>(this, 'close', []);
    }

    public createAttribute(localName: string): IAttr {
      return internalHandler.run<IAttr>(this, 'createAttribute', [localName]);
    }

    public createAttributeNS(namespace: string | null, qualifiedName: string): IAttr {
      return internalHandler.run<IAttr>(this, 'createAttributeNS', [namespace, qualifiedName]);
    }

    public createCDATASection(data: string): ICDATASection {
      return internalHandler.run<ICDATASection>(this, 'createCDATASection', [data]);
    }

    public createComment(data: string): IComment {
      return internalHandler.run<IComment>(this, 'createComment', [data]);
    }

    public createDocumentFragment(): IDocumentFragment {
      return internalHandler.run<IDocumentFragment>(this, 'createDocumentFragment', []);
    }

    public createElement(localName: string, options?: IElementCreationOptions): IElement {
      return internalHandler.run<IElement>(this, 'createElement', [localName, options]);
    }

    public createElementNS(namespace: string | null, qualifiedName: string, options?: IElementCreationOptions): IElement {
      return internalHandler.run<IElement>(this, 'createElementNS', [namespace, qualifiedName, options]);
    }

    public createEvent(eventInterface: string): IEvent {
      return internalHandler.run<IEvent>(this, 'createEvent', [eventInterface]);
    }

    public createNodeIterator(root: INode, whatToShow?: number, filter?: INodeFilter | null): INodeIterator {
      return internalHandler.run<INodeIterator>(this, 'createNodeIterator', [root, whatToShow, filter]);
    }

    public createProcessingInstruction(target: string, data: string): IProcessingInstruction {
      return internalHandler.run<IProcessingInstruction>(this, 'createProcessingInstruction', [target, data]);
    }

    public createRange(): IRange {
      return internalHandler.run<IRange>(this, 'createRange', []);
    }

    public createTextNode(data: string): IText {
      return internalHandler.run<IText>(this, 'createTextNode', [data]);
    }

    public createTreeWalker(root: INode, whatToShow?: number, filter?: INodeFilter | null): ITreeWalker {
      return internalHandler.run<ITreeWalker>(this, 'createTreeWalker', [root, whatToShow, filter]);
    }

    public getElementsByClassName(classNames: string): IHTMLCollection {
      return internalHandler.run<IHTMLCollection>(this, 'getElementsByClassName', [classNames]);
    }

    public getElementsByName(elementName: string): INodeList {
      return internalHandler.run<INodeList>(this, 'getElementsByName', [elementName]);
    }

    public getElementsByTagName(qualifiedName: string): IHTMLCollection {
      return internalHandler.run<IHTMLCollection>(this, 'getElementsByTagName', [qualifiedName]);
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
      return internalHandler.run<IHTMLCollection>(this, 'getElementsByTagNameNS', [namespace, localName]);
    }

    public getSelection(): ISelection | null {
      return internalHandler.run<ISelection | null>(this, 'getSelection', []);
    }

    public hasFocus(): boolean {
      return internalHandler.run<boolean>(this, 'hasFocus', []);
    }

    public importNode(node: INode, deep?: boolean): INode {
      return internalHandler.run<INode>(this, 'importNode', [node, deep]);
    }

    public open(type?: string, replace?: string): IDocument {
      return internalHandler.run<IDocument>(this, 'open', [type, replace]);
    }

    public releaseEvents(): void {
      internalHandler.run<void>(this, 'releaseEvents', []);
    }

    public write(...text: string[]): void {
      internalHandler.run<void>(this, 'write', [text]);
    }

    public writeln(...text: string[]): void {
      internalHandler.run<void>(this, 'writeln', [text]);
    }

    public addEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IDocumentEventMap>(type: K, listener: (this: IDocument, ev: IDocumentEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDocumentProperties extends INodeProperties, IDocumentOrShadowRootProperties, IGlobalEventHandlersProperties, INonElementParentNodeProperties, IParentNodeProperties {
  URL?: string;
  anchors?: IHTMLCollection;
  applets?: IHTMLCollection;
  body?: IHTMLElement | null;
  characterSet?: string;
  charset?: string;
  compatMode?: string;
  contentType?: string;
  cookie?: string;
  currentScript?: IHTMLScriptElement | null;
  defaultView?: IWindowProxy | null;
  dir?: string;
  doctype?: IDocumentType | null;
  documentElement?: IElement | null;
  documentURI?: string;
  embeds?: IHTMLCollection;
  forms?: IHTMLCollection;
  head?: IHTMLHeadElement | null;
  hidden?: boolean;
  images?: IHTMLCollection;
  implementation?: IDOMImplementation;
  inputEncoding?: string;
  lastModified?: string;
  links?: IHTMLCollection;
  location?: ILocation | null;
  onreadystatechange?: ((this: IDocument, ev: IEvent) => any) | null;
  onvisibilitychange?: ((this: IDocument, ev: IEvent) => any) | null;
  plugins?: IHTMLCollection;
  readyState?: IDocumentReadyState;
  referrer?: string;
  scripts?: IHTMLCollection;
  title?: string;
  visibilityState?: IVisibilityState;
}

export interface IDocumentReadonlyProperties extends INodeReadonlyProperties, IDocumentOrShadowRootReadonlyProperties, IGlobalEventHandlersReadonlyProperties, INonElementParentNodeReadonlyProperties, IParentNodeReadonlyProperties {
  URL?: string;
  anchors?: IHTMLCollection;
  applets?: IHTMLCollection;
  characterSet?: string;
  charset?: string;
  compatMode?: string;
  contentType?: string;
  currentScript?: IHTMLScriptElement | null;
  defaultView?: IWindowProxy | null;
  doctype?: IDocumentType | null;
  documentElement?: IElement | null;
  documentURI?: string;
  embeds?: IHTMLCollection;
  forms?: IHTMLCollection;
  head?: IHTMLHeadElement | null;
  hidden?: boolean;
  images?: IHTMLCollection;
  implementation?: IDOMImplementation;
  inputEncoding?: string;
  lastModified?: string;
  links?: IHTMLCollection;
  location?: ILocation | null;
  plugins?: IHTMLCollection;
  readyState?: IDocumentReadyState;
  referrer?: string;
  scripts?: IHTMLCollection;
  visibilityState?: IVisibilityState;
}

// tslint:disable-next-line:variable-name
export const DocumentPropertyKeys = [...NodePropertyKeys, ...DocumentOrShadowRootPropertyKeys, ...GlobalEventHandlersPropertyKeys, ...NonElementParentNodePropertyKeys, ...ParentNodePropertyKeys, 'URL', 'anchors', 'applets', 'body', 'characterSet', 'charset', 'compatMode', 'contentType', 'cookie', 'currentScript', 'defaultView', 'dir', 'doctype', 'documentElement', 'documentURI', 'embeds', 'forms', 'head', 'hidden', 'images', 'implementation', 'inputEncoding', 'lastModified', 'links', 'location', 'onreadystatechange', 'onvisibilitychange', 'plugins', 'readyState', 'referrer', 'scripts', 'title', 'visibilityState'];

// tslint:disable-next-line:variable-name
export const DocumentConstantKeys = [...NodeConstantKeys, ...DocumentOrShadowRootConstantKeys, ...GlobalEventHandlersConstantKeys, ...NonElementParentNodeConstantKeys, ...ParentNodeConstantKeys];
