import { identityValidation } from "@ulixee/platform-specification/types";
import { z } from "zod";

export const NodeInfoSchema = z.object({
	nodeId: identityValidation.describe("Network identity of the node."),
	apiHost: z
		.string()
		.describe("IpOrDomain:port where Ulixee APIs are reachable."),
});

type INodeInfo = z.infer<typeof NodeInfoSchema>;
export default INodeInfo;
