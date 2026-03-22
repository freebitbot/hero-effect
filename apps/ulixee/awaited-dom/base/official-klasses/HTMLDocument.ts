import AwaitedHandler from "../AwaitedHandler";
import type AwaitedPath from "../AwaitedPath";
import type Constructable from "../Constructable";
import inspectInstanceProperties from "../inspectInstanceProperties";
import type { IDocument, IHTMLDocument } from "../interfaces/official";
import StateMachine from "../StateMachine";
import {
	DocumentConstantKeys,
	DocumentPropertyKeys,
	type IDocumentProperties,
} from "./Document";

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<
	IHTMLDocument,
	IHTMLDocumentProperties
>();
export const awaitedHandler = new AwaitedHandler<IHTMLDocument>(
	"HTMLDocument",
	getState,
	setState,
);

export function HTMLDocumentGenerator(Document: Constructable<IDocument>) {
	return class HTMLDocument extends Document implements IHTMLDocument {
		constructor() {
			super();
		}

		public [Symbol.for("nodejs.util.inspect.custom")]() {
			return inspectInstanceProperties(
				this,
				HTMLDocumentPropertyKeys,
				HTMLDocumentConstantKeys,
			);
		}
	};
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLDocumentProperties extends IDocumentProperties {
	awaitedPath: AwaitedPath;
	awaitedOptions: any;
}

export const HTMLDocumentPropertyKeys = [...DocumentPropertyKeys];

export const HTMLDocumentConstantKeys = [...DocumentConstantKeys];
