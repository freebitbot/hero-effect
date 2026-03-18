import type { IDeviceCategory } from "./DeviceCategory";
import type IBrowserVersion from "./IBrowserVersion";

export default interface IBrowser {
	id: string;
	name: string;
	marketshare: number;
	version: IBrowserVersion;
	deviceCategory: IDeviceCategory;
	releaseDate: string;
	description: string;
}
