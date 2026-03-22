import type { IHTMLTrackElementIsolate } from "../../base/interfaces/isolate";
import HTMLTrackElementIsolateBase, {
	type IHTMLTrackElementIsolateProperties,
} from "../../base/isolate-mixins/HTMLTrackElementIsolate";
import StateMachine from "../../base/StateMachine";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLTrackElementIsolate,
	IHTMLTrackElementIsolateProperties
>();

export default class HTMLTrackElementIsolate
	extends HTMLTrackElementIsolateBase
	implements IHTMLTrackElementIsolate {}
