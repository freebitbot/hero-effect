import UlixeeConfig from "@ulixee/commons/config";
import { loadEnv } from "@ulixee/commons/lib/envUtils";

loadEnv(UlixeeConfig.global.directoryPath);
loadEnv(process.cwd());
loadEnv(__dirname);
const env = process.env;

export default {
	listenHostname: env.ULX_HOSTNAME,
	publicPort: env.ULX_PORT ?? env.PORT,
	publicHost: env.ULX_PUBLIC_HOST,
};
