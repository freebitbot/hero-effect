import type {
	ICSSStyleDeclaration,
	IElementCSSInlineStyle,
} from "../../base/interfaces/official";
import ElementCSSInlineStyleBase, {
	type IElementCSSInlineStyleProperties,
} from "../../base/official-mixins/ElementCSSInlineStyle";
import StateMachine from "../../base/StateMachine";
import { createCSSStyleDeclaration } from "../create";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IElementCSSInlineStyle,
	IElementCSSInlineStyleProperties
>();

export default class ElementCSSInlineStyle
	extends ElementCSSInlineStyleBase
	implements IElementCSSInlineStyle
{
	public get style(): ICSSStyleDeclaration {
		const { awaitedPath, awaitedOptions } = getState(this);
		return createCSSStyleDeclaration(
			awaitedPath.addProperty(this, "style"),
			awaitedOptions,
		);
	}
}
