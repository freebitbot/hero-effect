import type ISessionCreateOptions from "@ulixee/hero-interfaces/ISessionCreateOptions";
import type ConnectionToHeroCore from "../connections/ConnectionToHeroCore";
import type CallsiteLocator from "../lib/CallsiteLocator";
import type IConnectionToCoreOptions from "./IConnectionToCoreOptions";

export default interface IHeroCreateOptions
	extends Partial<
		Omit<ISessionCreateOptions, "sessionName" | "dependencyMap">
	> {
	name?: string;
	connectionToCore?: IConnectionToCoreOptions | ConnectionToHeroCore | string;
	callsiteLocator?: CallsiteLocator;
}
