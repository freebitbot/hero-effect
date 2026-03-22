import type { IStyleSheetIsolate } from "../../base/interfaces/isolate";
import StyleSheetIsolateBase, {
	type IStyleSheetIsolateProperties,
} from "../../base/isolate-mixins/StyleSheetIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IStyleSheetIsolate,
	IStyleSheetIsolateProperties
>();

export default class StyleSheetIsolate
	extends StyleSheetIsolateBase
	implements IStyleSheetIsolate {}
