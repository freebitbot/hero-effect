import type Protocol from "devtools-protocol";

export enum ResourceType {
	Document = "Document",
	Stylesheet = "Stylesheet",
	Image = "Image",
	Media = "Media",
	Font = "Font",
	Script = "Script",
	TextTrack = "TextTrack",
	XHR = "XHR",
	Fetch = "Fetch",
	EventSource = "EventSource",
	Websocket = "Websocket",
	Manifest = "Manifest",
	SignedExchange = "SignedExchange",
	Ping = "Ping",
	CSPViolationReport = "CSPViolationReport",
	Redirect = "Redirect",
	Ico = "Ico",
	Preflight = "Preflight",
	Other = "Other",
}

type IResourceType = keyof typeof ResourceType;

export function getResourceTypeForChromeValue(
	resourceType: Protocol.Network.ResourceType,
	method: string,
): IResourceType {
	if (method === "OPTIONS") return "Preflight";

	return resourceType as IResourceType;
}

export default IResourceType;
