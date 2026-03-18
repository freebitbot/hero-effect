import { DOMParser } from "linkedom";

export default class DetachedElement {
	static #domParser = new DOMParser();

	public static load(outerHTML: string): Element {
		return DetachedElement.#domParser.parseFromString(outerHTML, "text/html")
			.firstChild;
	}
}
