import type IHttpSocketConnectOptions from "./IHttpSocketConnectOptions";
import type IHttpSocketWrapper from "./IHttpSocketWrapper";

export default interface IHttpSocketAgent {
	createSocketConnection(
		options: IHttpSocketConnectOptions,
	): Promise<IHttpSocketWrapper>;
}
