/**
 * @deprecated
 */
export default interface ILog extends IBoundLog<ILogData> {
	/**
	 * @deprecated
	 */
	level?: string;
	/**
	 * @deprecated
	 */
	flush?();
}

/**
 * @deprecated
 */
export interface IBoundLog<Base = any> {
	/**
	 * @deprecated
	 */
	boundContext: any;

	/**
	 * @deprecated
	 */
	stats<T extends Base>(action: string, data?: T): number;

	/**
	 * @deprecated
	 */
	info<T extends Base>(action: string, data?: T): number;
	/**
	 * @deprecated
	 */
	warn<T extends Base>(action: string, data?: T): number;

	/**
	 * @deprecated
	 */
	error<T extends Base>(action: string, data?: T | { error: Error }): number;
	/**
	 * @deprecated
	 */
	createChild(module, boundData?: any): IBoundLog;
}

/**
 * @deprecated
 */
export interface ILogData {
	sessionId: string;
	parentLogId?: number;
}
