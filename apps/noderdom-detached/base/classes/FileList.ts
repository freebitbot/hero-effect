import InternalHandler, { initializeConstantsAndPrototypes } from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IFile, IFileList } from '../interfaces';

export const { getState, setState, setHiddenState, setReadonlyOfFileList } = StateMachine<
  IFileList,
  IFileListProperties,
  IFileListReadonlyProperties
>('FileList');
export const internalHandler = new InternalHandler<IFileList>('FileList', getState, setState);

export default class FileList implements IFileList {
  constructor() {
    initializeConstantsAndPrototypes<FileList>(FileList, this, internalHandler, FileListConstantKeys, FileListPropertyKeys);
  }

  // properties

  public get length(): number {
    return internalHandler.get<number>(this, 'length', false);
  }

  // methods

  public item(index: number): IFile | null {
    return internalHandler.run<IFile | null>(this, 'item', [index]);
  }

  public [Symbol.iterator](): IterableIterator<IFile> {
    return internalHandler.run<IterableIterator<IFile>>(this, '[Symbol.iterator]', []);
  }

  [index: number]: IFile;
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IFileListProperties {
  length?: number;
}

export interface IFileListReadonlyProperties {
  length?: number;
}

// tslint:disable-next-line:variable-name
export const FileListPropertyKeys = ['length'];

// tslint:disable-next-line:variable-name
export const FileListConstantKeys = [];
