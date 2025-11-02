import Constructable from '../Constructable';
import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IBlob, IBlobPart, IFilePropertyBag, IFile } from '../interfaces';
import { IBlobProperties, IBlobReadonlyProperties, BlobPropertyKeys, BlobConstantKeys } from './Blob';

export const { getState, setState, setHiddenState, setReadonlyOfFile } = StateMachine<
  IFile,
  IFileProperties,
  IFileReadonlyProperties
>('File');
export const internalHandler = new InternalHandler<IFile>('File', getState, setState);

// tslint:disable-next-line:variable-name
export function FileGenerator(Blob: Constructable<IBlob>) {
  return class File extends Blob implements IFile {
    constructor(_fileBits: Iterable<IBlobPart>, _fileName: string, _options?: IFilePropertyBag) {
      super();
      initializeConstantsAndPrototypes<File>(File, this, internalHandler, FileConstantKeys, FilePropertyKeys);
    }

    // properties

    public get lastModified(): number {
      return internalHandler.get<number>(this, 'lastModified', false);
    }

    public get name(): string {
      return internalHandler.get<string>(this, 'name', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IFileProperties extends IBlobProperties {
  lastModified?: number;
  name?: string;
}

export interface IFileReadonlyProperties extends IBlobReadonlyProperties {
  lastModified?: number;
  name?: string;
}

// tslint:disable-next-line:variable-name
export const FilePropertyKeys = [...BlobPropertyKeys, 'lastModified', 'name'];

// tslint:disable-next-line:variable-name
export const FileConstantKeys = [...BlobConstantKeys];
