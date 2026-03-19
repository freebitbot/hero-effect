#!/usr/bin/env node

import * as Fs from "node:fs";
import * as Path from "node:path";
import ChromeApp from "../index";
import { isDebianFlavor } from "../lib/LinuxUtils";

function noOp() {
	process.stdout.write(Path.join(__dirname, "no-op.sh"));
}

if (process.platform === "linux") {
	(async () => {
		const isDebian = await isDebianFlavor();
		if (isDebian) {
			const path = ChromeApp.aptScriptPath;
			if (Fs.existsSync(path)) {
				process.stdout.write(path);
				return;
			}
		}
		noOp();
	})().catch(() => null);
} else {
	noOp();
}
