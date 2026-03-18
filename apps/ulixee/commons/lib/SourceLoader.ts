import * as fs from "node:fs";
import { URL } from "node:url";
import type ISourceCodeLocation from "../interfaces/ISourceCodeLocation";
import { SourceMapSupport } from "./SourceMapSupport";

export default class SourceLoader {
	private static sourceLines: { [source: string]: string[] } = {};
	private static fileContentsCache: { [filepath: string]: string } = {};

	static resetCache(): void {
		SourceLoader.sourceLines = {};
		SourceLoader.fileContentsCache = {};
	}

	static clearFileCache(filepath: string): void {
		delete SourceLoader.fileContentsCache[filepath];
	}

	static getSource(
		codeLocation: ISourceCodeLocation,
	): ISourceCodeLocation & { code: string } {
		if (!codeLocation) return null;

		const sourcePosition = SourceMapSupport.getOriginalSourcePosition(
			codeLocation,
			true,
		);

		const code = sourcePosition.content;
		if (!SourceLoader.sourceLines[sourcePosition.source]) {
			const file = code || SourceLoader.getFileContents(sourcePosition.source);
			if (!file) return null;
			SourceLoader.sourceLines[sourcePosition.source] = file.split(/\r?\n/);
		}

		(sourcePosition as any).code =
			SourceLoader.sourceLines[sourcePosition.source][sourcePosition.line - 1];
		return sourcePosition as any;
	}

	static getSourceLines(codeLocation: ISourceCodeLocation): string[] {
		if (!codeLocation) return [];

		const source = SourceLoader.getSource(codeLocation);
		if (source?.code) return SourceLoader.sourceLines[source.source];
		return [];
	}

	static getFileContents(filepath: string, cache = true): string {
		if (!filepath) return null;
		const cacheKey = SourceMapSupport.getCacheKey(filepath);
		if (cache && cacheKey in SourceLoader.fileContentsCache)
			return SourceLoader.fileContentsCache[cacheKey];

		// Trim the path to make sure there is no extra whitespace.
		let lookupFilepath: string | URL = filepath.trim();
		if (filepath.startsWith("file://")) {
			lookupFilepath = new URL(filepath);
		}

		let data: string = null;
		try {
			data = fs.readFileSync(lookupFilepath, "utf8");
		} catch (err) {
			// couldn't read
		}
		if (cache) {
			SourceLoader.fileContentsCache[cacheKey] = data;
		}
		return data;
	}

	static setFileContents(filepath: string, data: string): void {
		const cacheKey = SourceMapSupport.getCacheKey(filepath);
		SourceLoader.fileContentsCache[cacheKey] = data;
	}
}
