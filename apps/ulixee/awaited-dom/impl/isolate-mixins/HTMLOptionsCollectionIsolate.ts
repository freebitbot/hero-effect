import type { IHTMLOptionsCollectionIsolate } from "../../base/interfaces/isolate";
import { ISuperElement } from "../../base/interfaces/super";
import HTMLOptionsCollectionIsolateBase, {
	type IHTMLOptionsCollectionIsolateProperties,
} from "../../base/isolate-mixins/HTMLOptionsCollectionIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLOptionsCollectionIsolate,
	IHTMLOptionsCollectionIsolateProperties
>();

export default class HTMLOptionsCollectionIsolate
	extends HTMLOptionsCollectionIsolateBase
	implements IHTMLOptionsCollectionIsolate {}
