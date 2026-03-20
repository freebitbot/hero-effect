import { readFileSync } from "node:fs";

let transpiler: Bun.Transpiler | undefined;

if (typeof transpiler === "undefined") {
	transpiler = new Bun.Transpiler({
		loader: "ts",
		trimUnusedImports: true,
		jsxOptimizationInline: true,
		logLevel: "verbose",
	});
}

export default function tsTransform(file: string): string {
	try {
		const code = readFileSync(file, "utf8");
		return transpiler?.transformSync(code) || "";
	} catch (e) {
		throw e;
	}
}
