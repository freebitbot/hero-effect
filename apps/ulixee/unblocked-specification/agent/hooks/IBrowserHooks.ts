import Protocol from "devtools-protocol";
import type IBrowser from "../browser/IBrowser";
import type IBrowserContext from "../browser/IBrowserContext";
import type IBrowserUserConfig from "../browser/IBrowserUserConfig";
import type IDevtoolsSession from "../browser/IDevtoolsSession";
import type { IPage } from "../browser/IPage";
import type { IWorker } from "../browser/IWorker";

import TargetInfo = Protocol.Target.TargetInfo;

import type { IFrame } from "../browser/IFrame";

export interface IBrowserContextHooks {
	onNewPage?(page: IPage): Promise<any>;
	onNewFrameProcess?(frame: IFrame): Promise<any>;
	onNewWorker?(worker: IWorker): Promise<any>;

	onDevtoolsPanelAttached?(
		devtoolsSession: IDevtoolsSession,
		targetInfo?: TargetInfo,
	): Promise<any>;
	onDevtoolsPanelDetached?(devtoolsSession: IDevtoolsSession): Promise<any>;
}

export default interface IBrowserHooks {
	onNewBrowser?(browser: IBrowser, userConfig: IBrowserUserConfig): void;
	onNewBrowserContext?(context: IBrowserContext): Promise<any>;
	onDevtoolsPanelAttached?(
		devtoolsSession: IDevtoolsSession,
		targetInfo?: TargetInfo,
	): Promise<any>;
}
