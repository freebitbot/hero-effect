import type { IStyleSheet } from "../../base/interfaces/official";
import {
	type IStyleSheetProperties,
	StyleSheetGenerator,
} from "../../base/official-klasses/StyleSheet";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IStyleSheet,
	IStyleSheetProperties
>();
const StyleSheetBaseClass = StyleSheetGenerator();

export default class StyleSheet
	extends StyleSheetBaseClass
	implements IStyleSheet {}
