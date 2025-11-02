import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IAbstractRange, INode, IRange, IDocumentFragment } from '../interfaces';
import { IAbstractRangeProperties, IAbstractRangeReadonlyProperties, AbstractRangePropertyKeys, AbstractRangeConstantKeys } from './AbstractRange';

export const { getState, setState, setHiddenState, setReadonlyOfRange } = StateMachine<
  IRange,
  IRangeProperties,
  IRangeReadonlyProperties
>('Range');
export const internalHandler = new InternalHandler<IRange>('Range', getState, setState);

// tslint:disable-next-line:variable-name
export function RangeGenerator(AbstractRange: Constructable<IAbstractRange>) {
  return class Range extends AbstractRange implements IRange {
    public static readonly END_TO_END: number = 2;
    public static readonly END_TO_START: number = 3;
    public static readonly START_TO_END: number = 1;
    public static readonly START_TO_START: number = 0;

    public readonly END_TO_END: number = 2;
    public readonly END_TO_START: number = 3;
    public readonly START_TO_END: number = 1;
    public readonly START_TO_START: number = 0;

    constructor() {
      super();
      initializeConstantsAndPrototypes<Range>(Range, this, internalHandler, RangeConstantKeys, RangePropertyKeys);
    }

    // properties

    public get commonAncestorContainer(): INode {
      return internalHandler.get<INode>(this, 'commonAncestorContainer', false);
    }

    // methods

    public cloneContents(): IDocumentFragment {
      return internalHandler.run<IDocumentFragment>(this, 'cloneContents', []);
    }

    public cloneRange(): IRange {
      return internalHandler.run<IRange>(this, 'cloneRange', []);
    }

    public collapse(toStart?: boolean): void {
      internalHandler.run<void>(this, 'collapse', [toStart]);
    }

    public compareBoundaryPoints(how: number, sourceRange: IRange): number {
      return internalHandler.run<number>(this, 'compareBoundaryPoints', [how, sourceRange]);
    }

    public comparePoint(node: INode, offset: number): number {
      return internalHandler.run<number>(this, 'comparePoint', [node, offset]);
    }

    public createContextualFragment(fragment: string): IDocumentFragment {
      return internalHandler.run<IDocumentFragment>(this, 'createContextualFragment', [fragment]);
    }

    public deleteContents(): void {
      internalHandler.run<void>(this, 'deleteContents', []);
    }

    public detach(): void {
      internalHandler.run<void>(this, 'detach', []);
    }

    public extractContents(): IDocumentFragment {
      return internalHandler.run<IDocumentFragment>(this, 'extractContents', []);
    }

    public insertNode(node: INode): void {
      internalHandler.run<void>(this, 'insertNode', [node]);
    }

    public intersectsNode(node: INode): boolean {
      return internalHandler.run<boolean>(this, 'intersectsNode', [node]);
    }

    public isPointInRange(node: INode, offset: number): boolean {
      return internalHandler.run<boolean>(this, 'isPointInRange', [node, offset]);
    }

    public selectNode(node: INode): void {
      internalHandler.run<void>(this, 'selectNode', [node]);
    }

    public selectNodeContents(node: INode): void {
      internalHandler.run<void>(this, 'selectNodeContents', [node]);
    }

    public setEnd(node: INode, offset: number): void {
      internalHandler.run<void>(this, 'setEnd', [node, offset]);
    }

    public setEndAfter(node: INode): void {
      internalHandler.run<void>(this, 'setEndAfter', [node]);
    }

    public setEndBefore(node: INode): void {
      internalHandler.run<void>(this, 'setEndBefore', [node]);
    }

    public setStart(node: INode, offset: number): void {
      internalHandler.run<void>(this, 'setStart', [node, offset]);
    }

    public setStartAfter(node: INode): void {
      internalHandler.run<void>(this, 'setStartAfter', [node]);
    }

    public setStartBefore(node: INode): void {
      internalHandler.run<void>(this, 'setStartBefore', [node]);
    }

    public surroundContents(newParent: INode): void {
      internalHandler.run<void>(this, 'surroundContents', [newParent]);
    }

    public toString(): string {
      return internalHandler.run<string>(this, 'string', []);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IRangeProperties extends IAbstractRangeProperties {
  commonAncestorContainer?: INode;
}

export interface IRangeReadonlyProperties extends IAbstractRangeReadonlyProperties {
  commonAncestorContainer?: INode;
}

// tslint:disable-next-line:variable-name
export const RangePropertyKeys = [...AbstractRangePropertyKeys, 'commonAncestorContainer'];

// tslint:disable-next-line:variable-name
export const RangeConstantKeys = [...AbstractRangeConstantKeys, 'START_TO_START', 'START_TO_END', 'END_TO_END', 'END_TO_START'];
