import type {
	IImageBitmap,
	IOffscreenCanvas,
} from "../../base/interfaces/official";
import {
	type IOffscreenCanvasProperties,
	OffscreenCanvasGenerator,
} from "../../base/official-klasses/OffscreenCanvas";
import StateMachine from "../../base/StateMachine";
import { createImageBitmap } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IOffscreenCanvas,
	IOffscreenCanvasProperties
>();
const OffscreenCanvasBaseClass = OffscreenCanvasGenerator();

export default class OffscreenCanvas
	extends OffscreenCanvasBaseClass
	implements IOffscreenCanvas
{
	public transferToImageBitmap(): IImageBitmap {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createImageBitmap(
			awaitedPath.addMethod(this, "transferToImageBitmap"),
			awaitedOptions,
		);
	}
}
