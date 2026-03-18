import { z } from "zod";
import { ServicesSetupSchema } from "../types/IServicesSetup";
import type { IZodHandlers, IZodSchemaToApiTypes } from "../utils/IZodApi";

export const ServicesSetupApiSchemas = {
	"Services.getSetup": {
		args: z
			.object({})
			.describe("Request default services setup from a node in the cluster."),
		result: ServicesSetupSchema,
	},
};

export type IServicesSetupApiTypes = IZodSchemaToApiTypes<
	typeof ServicesSetupApiSchemas
>;
export type IServicesSetupApis<TContext = any> = IZodHandlers<
	typeof ServicesSetupApiSchemas,
	TContext
>;

export default IServicesSetupApiTypes;
