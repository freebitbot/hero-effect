import type IDomState from "@ulixee/hero-interfaces/IDomState";
import type { IDomStateAssertions } from "@ulixee/hero-interfaces/IDomState";

export default class DomState implements IDomState {
	public url?: string | RegExp;
	public all: (options: IDomStateAssertions) => void;

	constructor(options: IDomState) {
		this.url = options.url;
		this.all = options.all;
	}
}
