import type { IHTMLTrackElement } from "../../base/interfaces/official";
import {
	HTMLTrackElementGenerator,
	type IHTMLTrackElementProperties,
} from "../../base/official-klasses/HTMLTrackElement";
import StateMachine from "../../base/StateMachine";
import HTMLElement from "./HTMLElement";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTrackElement,
	IHTMLTrackElementProperties
>();
const HTMLTrackElementBaseClass = HTMLTrackElementGenerator(HTMLElement);

export default class HTMLTrackElement
	extends HTMLTrackElementBaseClass
	implements IHTMLTrackElement
{
	constructor() {
		super();
	}
}
