import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IDOMRectInit, IDOMRectReadOnly } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfDOMRectReadOnly } = StateMachine<
  IDOMRectReadOnly,
  IDOMRectReadOnlyProperties,
  IDOMRectReadOnlyReadonlyProperties
>('DOMRectReadOnly');
export const internalHandler = new InternalHandler<IDOMRectReadOnly>('DOMRectReadOnly', getState, setState);

export default class DOMRectReadOnly implements IDOMRectReadOnly {
  constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
    initializeConstantsAndPrototypes<DOMRectReadOnly>(DOMRectReadOnly, this, internalHandler, DOMRectReadOnlyConstantKeys, DOMRectReadOnlyPropertyKeys);
  }

  // properties

  public get bottom(): number {
    return internalHandler.get<number>(this, 'bottom', false);
  }

  public get height(): number {
    return internalHandler.get<number>(this, 'height', false);
  }

  public get left(): number {
    return internalHandler.get<number>(this, 'left', false);
  }

  public get right(): number {
    return internalHandler.get<number>(this, 'right', false);
  }

  public get top(): number {
    return internalHandler.get<number>(this, 'top', false);
  }

  public get width(): number {
    return internalHandler.get<number>(this, 'width', false);
  }

  public get x(): number {
    return internalHandler.get<number>(this, 'x', false);
  }

  public get y(): number {
    return internalHandler.get<number>(this, 'y', false);
  }

  // methods

  public fromRect(other?: IDOMRectInit): IDOMRectReadOnly {
    return internalHandler.run<IDOMRectReadOnly>(this, 'fromRect', [other]);
  }

  public toJSON(): any {
    internalHandler.run<any>(this, 'toJSON', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDOMRectReadOnlyProperties {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

export interface IDOMRectReadOnlyReadonlyProperties {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

// tslint:disable-next-line:variable-name
export const DOMRectReadOnlyPropertyKeys = ['bottom', 'height', 'left', 'right', 'top', 'width', 'x', 'y'];

// tslint:disable-next-line:variable-name
export const DOMRectReadOnlyConstantKeys = [];
