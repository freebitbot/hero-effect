import type { URL } from "node:url";

export default interface IDetectionDomains {
	main: URL;
	external?: URL;
	subdomain?: URL;
}
