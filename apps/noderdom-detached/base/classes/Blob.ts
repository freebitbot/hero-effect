import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IBlob, IBlobPart, IBlobPropertyBag } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfBlob } = StateMachine<
  IBlob,
  IBlobProperties,
  IBlobReadonlyProperties
>('Blob');
export const internalHandler = new InternalHandler<IBlob>('Blob', getState, setState);

export default class Blob implements IBlob {
  constructor(_blobParts?: Iterable<IBlobPart>, _options?: IBlobPropertyBag) {
    initializeConstantsAndPrototypes<Blob>(Blob, this, internalHandler, BlobConstantKeys, BlobPropertyKeys);
  }

  // properties

  public get size(): number {
    return internalHandler.get<number>(this, 'size', false);
  }

  public get type(): string {
    return internalHandler.get<string>(this, 'type', false);
  }

  // methods

  public slice(start?: number, end?: number, contentType?: string): IBlob {
    return internalHandler.run<IBlob>(this, 'slice', [start, end, contentType]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IBlobProperties {
  size?: number;
  type?: string;
}

export interface IBlobReadonlyProperties {
  size?: number;
  type?: string;
}

// tslint:disable-next-line:variable-name
export const BlobPropertyKeys = ['size', 'type'];

// tslint:disable-next-line:variable-name
export const BlobConstantKeys = [];
