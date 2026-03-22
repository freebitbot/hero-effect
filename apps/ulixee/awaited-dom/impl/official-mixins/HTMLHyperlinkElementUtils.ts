import type { IHTMLHyperlinkElementUtils } from "../../base/interfaces/official";
import HTMLHyperlinkElementUtilsBase, {
	type IHTMLHyperlinkElementUtilsProperties,
} from "../../base/official-mixins/HTMLHyperlinkElementUtils";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLHyperlinkElementUtils,
	IHTMLHyperlinkElementUtilsProperties
>();

export default class HTMLHyperlinkElementUtils
	extends HTMLHyperlinkElementUtilsBase
	implements IHTMLHyperlinkElementUtils {}
