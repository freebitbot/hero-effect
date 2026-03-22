import type { IImageBitmap } from "../../base/interfaces/official";
import {
	type IImageBitmapProperties,
	ImageBitmapGenerator,
} from "../../base/official-klasses/ImageBitmap";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IImageBitmap,
	IImageBitmapProperties
>();
const ImageBitmapBaseClass = ImageBitmapGenerator();

export default class ImageBitmap
	extends ImageBitmapBaseClass
	implements IImageBitmap {}
