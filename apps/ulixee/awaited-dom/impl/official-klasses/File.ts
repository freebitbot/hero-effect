import type {
	IBlobPart,
	IFile,
	IFilePropertyBag,
} from "../../base/interfaces/official";
import {
	FileGenerator,
	type IFileProperties,
} from "../../base/official-klasses/File";
import StateMachine from "../../base/StateMachine";
import Blob from "./Blob";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFile, IFileProperties>();
const FileBaseClass = FileGenerator(Blob);

export default class File extends FileBaseClass implements IFile {
	constructor(
		_fileBits: Iterable<IBlobPart>,
		_fileName: string,
		_options?: IFilePropertyBag,
	) {
		super(_fileBits, _fileName, _options);
	}
}
