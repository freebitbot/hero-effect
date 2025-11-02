import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { INode, IRange, ISelection } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfSelection } = StateMachine<
  ISelection,
  ISelectionProperties,
  ISelectionReadonlyProperties
>('Selection');
export const internalHandler = new InternalHandler<ISelection>('Selection', getState, setState);

export default class Selection implements ISelection {
  constructor() {
    initializeConstantsAndPrototypes<Selection>(Selection, this, internalHandler, SelectionConstantKeys, SelectionPropertyKeys);
  }

  // properties

  public get anchorNode(): INode | null {
    return internalHandler.get<INode | null>(this, 'anchorNode', true);
  }

  public get anchorOffset(): number {
    return internalHandler.get<number>(this, 'anchorOffset', false);
  }

  public get focusNode(): INode | null {
    return internalHandler.get<INode | null>(this, 'focusNode', true);
  }

  public get focusOffset(): number {
    return internalHandler.get<number>(this, 'focusOffset', false);
  }

  public get isCollapsed(): boolean {
    return internalHandler.get<boolean>(this, 'isCollapsed', false);
  }

  public get rangeCount(): number {
    return internalHandler.get<number>(this, 'rangeCount', false);
  }

  public get type(): string {
    return internalHandler.get<string>(this, 'type', false);
  }

  // methods

  public addRange(range: IRange): void {
    internalHandler.run<void>(this, 'addRange', [range]);
  }

  public collapse(node: INode | null, offset?: number): void {
    internalHandler.run<void>(this, 'collapse', [node, offset]);
  }

  public collapseToEnd(): void {
    internalHandler.run<void>(this, 'collapseToEnd', []);
  }

  public collapseToStart(): void {
    internalHandler.run<void>(this, 'collapseToStart', []);
  }

  public containsNode(node: INode, allowPartialContainment?: boolean): boolean {
    return internalHandler.run<boolean>(this, 'containsNode', [node, allowPartialContainment]);
  }

  public deleteFromDocument(): void {
    internalHandler.run<void>(this, 'deleteFromDocument', []);
  }

  public empty(): void {
    internalHandler.run<void>(this, 'empty', []);
  }

  public extend(node: INode, offset?: number): void {
    internalHandler.run<void>(this, 'extend', [node, offset]);
  }

  public getRangeAt(index: number): IRange {
    return internalHandler.run<IRange>(this, 'getRangeAt', [index]);
  }

  public removeAllRanges(): void {
    internalHandler.run<void>(this, 'removeAllRanges', []);
  }

  public removeRange(range: IRange): void {
    internalHandler.run<void>(this, 'removeRange', [range]);
  }

  public selectAllChildren(node: INode): void {
    internalHandler.run<void>(this, 'selectAllChildren', [node]);
  }

  public setBaseAndExtent(anchorNode: INode, anchorOffset: number, focusNode: INode, focusOffset: number): void {
    internalHandler.run<void>(this, 'setBaseAndExtent', [anchorNode, anchorOffset, focusNode, focusOffset]);
  }

  public setPosition(node: INode | null, offset?: number): void {
    internalHandler.run<void>(this, 'setPosition', [node, offset]);
  }

  public toString(): string {
    return internalHandler.run<string>(this, 'string', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface ISelectionProperties {
  anchorNode?: INode | null;
  anchorOffset?: number;
  focusNode?: INode | null;
  focusOffset?: number;
  isCollapsed?: boolean;
  rangeCount?: number;
  type?: string;
}

export interface ISelectionReadonlyProperties {
  anchorNode?: INode | null;
  anchorOffset?: number;
  focusNode?: INode | null;
  focusOffset?: number;
  isCollapsed?: boolean;
  rangeCount?: number;
  type?: string;
}

// tslint:disable-next-line:variable-name
export const SelectionPropertyKeys = ['anchorNode', 'anchorOffset', 'focusNode', 'focusOffset', 'isCollapsed', 'rangeCount', 'type'];

// tslint:disable-next-line:variable-name
export const SelectionConstantKeys = [];
