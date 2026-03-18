import type ICloudApis from "@ulixee/platform-specification/cloud/CloudApis";
import { CloudApiSchemas } from "@ulixee/platform-specification/cloud/CloudApis";
import ValidatingApiHandler from "@ulixee/platform-specification/utils/ValidatingApiHandler";
import type ICloudApiContext from "../interfaces/ICloudApiContext";

export default class CloudApiHandler<
	Command extends keyof ICloudApis & string,
> extends ValidatingApiHandler<
	typeof CloudApiSchemas,
	Command,
	ICloudApis,
	ICloudApiContext
> {
	constructor(
		command: Command,
		args: {
			handler: (
				this: CloudApiHandler<Command>,
				request: ICloudApis[Command]["args"],
				context?: ICloudApiContext,
			) => Promise<ICloudApis[Command]["result"]>;
		},
	) {
		super(command, CloudApiSchemas, args);
		this.apiHandler = args.handler.bind(this);
	}
}
