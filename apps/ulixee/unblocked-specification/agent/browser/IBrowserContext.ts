import type { URL } from "node:url";
import type ITypedEventEmitter from "@ulixee/commons/interfaces/ITypedEventEmitter";
import type { IBrowserContextHooks } from "../hooks/IBrowserHooks";
import type IInteractHooks from "../hooks/IInteractHooks";
import type { ICookie } from "../net/ICookie";
import type IBrowser from "./IBrowser";
import type { IPage } from "./IPage";
import type { IWorker } from "./IWorker";

export default interface IBrowserContext
	extends ITypedEventEmitter<IBrowserContextEvents> {
	id: string;
	browserId: string;
	browser: IBrowser;
	isIncognito: boolean;
	pagesById: Map<string, IPage>;
	workersById: Map<string, IWorker>;
	hooks: IBrowserContextHooks & IInteractHooks;

	newPage(): Promise<IPage>;
	close(): Promise<void>;

	getCookies(url?: URL): Promise<ICookie[]>;
	addCookies(
		cookies: (Omit<ICookie, "expires"> & {
			expires?: string | Date | number;
		})[],
		origins?: string[],
	): Promise<void>;
}

export interface IBrowserContextEvents {
	page: { page: IPage };
	worker: { worker: IWorker };
	close: void;
	"all-pages-closed": void;
}
