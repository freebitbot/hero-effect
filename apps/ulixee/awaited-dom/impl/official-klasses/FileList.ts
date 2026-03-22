import type { IFile, IFileList } from "../../base/interfaces/official";
import {
	FileListGenerator,
	type IFileListProperties,
} from "../../base/official-klasses/FileList";
import StateMachine from "../../base/StateMachine";
import { createFile } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IFileList,
	IFileListProperties
>();
const FileListBaseClass = FileListGenerator();

export default class FileList extends FileListBaseClass implements IFileList {
	public item(index: number): IFile {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createFile(
			awaitedPath.addMethod(this, "item", index),
			awaitedOptions,
		);
	}
}
