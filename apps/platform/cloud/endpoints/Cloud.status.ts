import type ICloudApiContext from "../interfaces/ICloudApiContext";

interface IStatusResponse {
	version: string;
}

const CloudStatus = {
	command: "Cloud.status",
	async handler(
		_request: void,
		context: ICloudApiContext,
	): Promise<IStatusResponse> {
		return { version: context.version };
	},
};

export default CloudStatus;
