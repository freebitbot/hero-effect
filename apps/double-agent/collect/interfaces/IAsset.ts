import type HostDomain from "./HostDomain";
import type OriginType from "./OriginType";
import type ResourceType from "./ResourceType";

export default interface IAsset {
	secureDomain: boolean;
	resourceType: ResourceType;
	domainType?: HostDomain;
	originType?: OriginType;
	pathname?: string;
	referer?: string;
}
