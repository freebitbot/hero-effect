import type { DomainType } from "../lib/DomainUtils";
import type { IServerProtocol } from "../servers/BaseServer";
import type OriginType from "./OriginType";
import type ResourceType from "./ResourceType";

export default interface IHeaderDataPage {
	pageName: string;
	method: string;
	isRedirect: boolean;
	protocol: IServerProtocol;
	domainType: DomainType;
	originType: OriginType;
	resourceType: ResourceType;
	pathname: string;
	referer: string;
	rawHeaders: string[][];
}
