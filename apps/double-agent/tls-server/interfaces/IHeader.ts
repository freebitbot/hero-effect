import type IClientHello from "./IClientHello";
import type IServerHello from "./IServerHello";

export default interface IHeader {
	from: "client" | "server";
	version: string;
	contentType: string;
	length: string;
	content: IClientHello | IServerHello | string;
}
