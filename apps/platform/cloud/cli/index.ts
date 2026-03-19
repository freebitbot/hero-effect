import * as os from "node:os";
import * as Path from "node:path";
import {
	applyEnvironmentVariables,
	parseEnvBool,
} from "@ulixee/commons/lib/envUtils";
import { filterUndefined } from "@ulixee/commons/lib/objectUtils";
import { Command } from "commander";
import { CloudNode } from "../index";

import pkg from "../package.json";

export default function cliCommands(options?: {
	suppressLogs: boolean;
	onStart?: (node: CloudNode) => Promise<void>;
}): Command {
	const program = new Command().version(pkg.version);

	program
		.command("start", { isDefault: true })
		.description("start a Ulixee CloudNode")
		.addOption(
			program
				.createOption(
					"-p, --port <number>",
					"The port to use. Defaults to any 1818, or any available port.",
				)
				.env("PORT"),
		)
		.addOption(
			program
				.createOption(
					"-u, --hostname <hostname>",
					"The hostname the Cloud node should listen on.",
				)
				.env("ULX_HOSTNAME"),
		)
		.addOption(
			program
				.createOption(
					"--public-host <address>",
					"The public dns name or ip the Cloud node can be addressed with (default: localhost)",
				)
				.env("ULX_PUBLIC_HOST"),
		)
		.addOption(
			program.createOption(
				"--env <path>",
				"Load environment settings from a .env file.",
			),
		)
		.addOption(
			program
				.createOption(
					"--disable-session-persistence",
					"Disable persisting session databases long-term. NOTE: will still persist for the duration of the session.",
				)
				.argParser(parseEnvBool)
				.env("ULX_DISABLE_SESSION_PERSISTENCE"),
		)
		.addOption(
			program
				.createOption(
					"--max-concurrent-heroes <count>",
					"Max number of concurrent Datastores/Heroes to run at a time.",
				)
				.argParser(parseInt)
				.default(10),
		)
		.addOption(
			program
				.createOption(
					"--max-concurrent-heroes-per-browser <count>",
					"Max number of concurrent Heroes to run per Chrome instance.",
				)
				.argParser(parseInt)
				.default(10),
		)
		.addOption(
			program.createOption(
				"--unblocked-plugins <plugins...>",
				"Register default Unblocked Plugin npm module names for all Hero instances to load.",
			),
		)
		.addOption(
			program
				.createOption(
					"--hero-data-dir <dir>",
					"Override the default data directory for Hero sessions and dbs.",
				)
				.env("ULX_DATA_DIR"),
		)
		.allowUnknownOption(true)
		.action(async (opts) => {
			if (!options?.suppressLogs)
				console.log("Starting Ulixee Cloud with configuration:", opts);
			const cloudNode = await startCloudViaCli(opts);
			if (options?.onStart) await options.onStart(cloudNode);

			if (!options?.suppressLogs)
				console.log("Ulixee Cloud listening at %s", await cloudNode.address);
		});

	return program;
}

export async function startCloudViaCli(opts: any): Promise<CloudNode> {
	const { port, hostname, publicHost, env } = opts;

	if (env) {
		const envPath = env.startsWith("~")
			? Path.resolve(os.homedir(), env.slice(1))
			: env;
		applyEnvironmentVariables(Path.resolve(envPath), process.env);
	}

	const {
		unblockedPlugins,
		heroDataDir,
		maxConcurrentHeroes,
		maxConcurrentHeroesPerBrowser,
		disableSessionPersistence,
	} = opts;

	const cloudNode = new CloudNode(
		filterUndefined({
			port,
			host: hostname,
			publicHost,
			heroConfiguration: filterUndefined({
				maxConcurrentClientCount: maxConcurrentHeroes,
				maxConcurrentClientsPerBrowser: maxConcurrentHeroesPerBrowser,
				disableSessionPersistence,
				dataDir: heroDataDir,
				defaultUnblockedPlugins: unblockedPlugins?.map((x: string) => {
					// eslint-disable-next-line import/no-dynamic-require
					const mod: any = require(x);
					if (mod.default) return mod.default;
					return mod;
				}),
			}),
		}),
	);
	await cloudNode.listen();
	return cloudNode;
}
