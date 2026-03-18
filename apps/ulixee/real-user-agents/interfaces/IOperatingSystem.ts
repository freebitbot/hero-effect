import type { IDeviceCategory } from "./DeviceCategory";
import type IOperatingSystemVersion from "./IOperatingSystemVersion";

export default interface IOperatingSystem {
	id: string;
	name: string;
	marketshare: number;
	version: IOperatingSystemVersion;
	deviceCategory: IDeviceCategory;
	releaseDate: string;
	description: string;
}
