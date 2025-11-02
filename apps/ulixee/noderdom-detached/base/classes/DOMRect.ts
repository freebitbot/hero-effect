import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDOMRectReadOnly, IDOMRectInit, IDOMRect } from '../interfaces';
import { IDOMRectReadOnlyProperties, IDOMRectReadOnlyReadonlyProperties, DOMRectReadOnlyPropertyKeys, DOMRectReadOnlyConstantKeys } from './DOMRectReadOnly';

export const { getState, setState, setHiddenState, setReadonlyOfDOMRect } = StateMachine<
  IDOMRect,
  IDOMRectProperties,
  IDOMRectReadonlyProperties
>('DOMRect');
export const internalHandler = new InternalHandler<IDOMRect>('DOMRect', getState, setState);

// tslint:disable-next-line:variable-name
export function DOMRectGenerator(DOMRectReadOnly: Constructable<IDOMRectReadOnly>) {
  return class DOMRect extends DOMRectReadOnly implements IDOMRect {
    constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
      super();
      initializeConstantsAndPrototypes<DOMRect>(DOMRect, this, internalHandler, DOMRectConstantKeys, DOMRectPropertyKeys);
    }

    // properties

    public get height(): number {
      return internalHandler.get<number>(this, 'height', false);
    }

    public set height(value: number) {
      internalHandler.set<number>(this, 'height', value);
    }

    public get width(): number {
      return internalHandler.get<number>(this, 'width', false);
    }

    public set width(value: number) {
      internalHandler.set<number>(this, 'width', value);
    }

    public get x(): number {
      return internalHandler.get<number>(this, 'x', false);
    }

    public set x(value: number) {
      internalHandler.set<number>(this, 'x', value);
    }

    public get y(): number {
      return internalHandler.get<number>(this, 'y', false);
    }

    public set y(value: number) {
      internalHandler.set<number>(this, 'y', value);
    }

    // methods

    public fromRect(other?: IDOMRectInit): IDOMRect {
      return internalHandler.run<IDOMRect>(this, 'fromRect', [other]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMRectProperties extends IDOMRectReadOnlyProperties {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
}

export interface IDOMRectReadonlyProperties extends IDOMRectReadOnlyReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const DOMRectPropertyKeys = [...DOMRectReadOnlyPropertyKeys, 'height', 'width', 'x', 'y'];

// tslint:disable-next-line:variable-name
export const DOMRectConstantKeys = [...DOMRectReadOnlyConstantKeys];
