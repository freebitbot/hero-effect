import { loadEnv, parseEnvBool } from "@ulixee/commons/lib/envUtils";

loadEnv(__dirname);
const env = process.env;

export default {
	disableMitm: parseEnvBool(env.ULX_DISABLE_MITM),
	showChrome: parseEnvBool(env.ULX_SHOW_CHROME),
	noChromeSandbox: parseEnvBool(env.ULX_NO_CHROME_SANDBOX),
	useRemoteDebuggingPort: parseEnvBool(env.ULX_USE_REMOTE_DEBUGGING_PORT),
	disableGpu: parseEnvBool(env.ULX_DISABLE_GPU),
};
