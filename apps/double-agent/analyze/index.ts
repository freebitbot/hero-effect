import "@ulixee/commons/lib/SourceMapSupport";
import * as Fs from "node:fs";
import * as Path from "node:path";
import type IBaseProfile from "@double-agent/interfaces/IBaseProfile";
import {
	type IUserAgentToTestPickType,
	UserAgentToTestPickType,
} from "@double-agent/interfaces/IUserAgentToTest";
import {
	extractProfilePathsMap,
	importProfile,
} from "@double-agent/interfaces/lib/ProfileUtils";
import getAllPlugins from "./lib/getAllPlugins";
import Layer from "./lib/Layer";
import type Plugin from "./lib/Plugin";
import type { IResultFlag } from "./lib/Plugin";
import Probe from "./lib/Probe";
import ProbeBucket from "./lib/ProbeBucket";

interface IResult {
	userAgentId: string;
	flags: IResultFlag[];
}

interface IResultsMap {
	byUserAgentId: {
		[userAgentId: string]: IResultFlag[];
	};
	byPickType: {
		// @ts-expect-error
		[UserAgentToTestPickType.popular]: IResult[];
		// @ts-expect-error
		[UserAgentToTestPickType.random]: IResult[];
	};
}

export default class Analyze {
	public plugins: Plugin[] = [];

	private readonly probesDataDir: string;
	private readonly profileCountOverTime: number;
	private resultsMap: IResultsMap = {
		byUserAgentId: {},
		byPickType: {
			[UserAgentToTestPickType.popular]: [],
			[UserAgentToTestPickType.random]: [],
		},
	};

	constructor(profileCountOverTime: number, probesDataDir: string) {
		this.profileCountOverTime = profileCountOverTime;
		this.probesDataDir = probesDataDir;
		this.plugins = loadAllPlugins(this.probesDataDir);
	}

	public addIndividual(
		individualsDir: string,
		userAgentId: string,
	): IResultFlag[] {
		this.resultsMap.byUserAgentId[userAgentId] = [];
		const profileDir = Path.join(individualsDir, userAgentId, "raw-data");
		const profilePathsMap = extractProfilePathsMap(profileDir, userAgentId);

		for (const plugin of this.plugins) {
			const profilePathsByUserAgentId = profilePathsMap[plugin.id];
			if (!profilePathsByUserAgentId) {
				console.log(`${userAgentId} IS MISSING ${plugin.id}`);
				continue;
			}

			const profilePath = profilePathsByUserAgentId[userAgentId];
			if (!profilePath) continue;

			const profile = importProfile<IBaseProfile>(profilePath);

			if (plugin.runIndividual) {
				const flags = plugin.runIndividual(profile);
				this.resultsMap.byUserAgentId[userAgentId].push(...flags);
			}
		}

		return this.resultsMap.byUserAgentId[userAgentId];
	}

	public addOverTime(
		sessionsDir: string,
		pickType: IUserAgentToTestPickType,
	): IResult[] {
		const plugins = loadAllPlugins(this.probesDataDir);
		if (!Fs.existsSync(sessionsDir)) return [];
		const dirNames = Fs.readdirSync(sessionsDir)
			.filter((x) => x.startsWith(pickType))
			.sort();

		for (const dirName of dirNames) {
			const userAgentId = dirName.match(/^[^:]+:(.+)$/)[1];
			const flags: IResultFlag[] = [];
			const profileDir = Path.join(sessionsDir, dirName, "raw-data");
			const profilePathsMap = extractProfilePathsMap(profileDir, userAgentId);
			for (const plugin of plugins) {
				if (
					!profilePathsMap[plugin.id] ||
					!profilePathsMap[plugin.id][userAgentId]
				)
					continue;
				const profilePath = profilePathsMap[plugin.id][userAgentId];
				const profile = importProfile<IBaseProfile>(profilePath);

				if (plugin.runOverTime) {
					flags.push(...plugin.runOverTime(profile, dirNames.length));
				}
			}
			this.resultsMap.byPickType[pickType].push({ userAgentId, flags });
		}

		return this.resultsMap.byPickType[pickType];
	}

	public generateTestResults(): IAnalyzeScore {
		const humanScoreMap: IAnalyzeScore = {
			total: {
				[UserAgentToTestPickType.popular]: 100,
				[UserAgentToTestPickType.random]: 100,
			},
			individualByUserAgentId: {},
			sessionsByPickType: {
				[UserAgentToTestPickType.popular]: [],
				[UserAgentToTestPickType.random]: [],
			},
		};

		for (const userAgentId of Object.keys(this.resultsMap.byUserAgentId)) {
			const humanScore = this.resultsMap.byUserAgentId[userAgentId].reduce(
				(score, flag) => {
					return Math.min(score, flag.humanScore);
				},
				100,
			);
			humanScoreMap.individualByUserAgentId[userAgentId] = humanScore;
		}

		const pickTypes = [
			UserAgentToTestPickType.popular,
			UserAgentToTestPickType.random,
		];
		for (const pickType of pickTypes) {
			const sessionDetails: ISessionScore[] = [];
			for (const sessionResult of this.resultsMap.byPickType[pickType]) {
				const { userAgentId, flags } = sessionResult;
				const humanScoreIndividual =
					humanScoreMap.individualByUserAgentId[userAgentId];
				const humanScoreOverTime = flags.reduce(
					(score, flag) => Math.min(score, flag.humanScore),
					100,
				);
				let humanScoreTotal = humanScoreIndividual + humanScoreOverTime / 2;
				if (humanScoreTotal > 100) humanScoreTotal = 100;
				if (humanScoreTotal < 0) humanScoreTotal = 0;
				sessionDetails.push({
					userAgentId,
					humanScore: {
						individual: humanScoreIndividual,
						overTime: humanScoreOverTime,
						total: humanScoreTotal,
					},
				});
			}
			humanScoreMap.sessionsByPickType[pickType] = sessionDetails;
			humanScoreMap.total[pickType] = sessionDetails
				.map((x) => x.humanScore.total)
				.reduce((a, b) => Math.min(a, b), 100);
		}

		console.log("humanScoreMap: ", humanScoreMap);

		return humanScoreMap;
	}
}

// HELPERS

function loadAllPlugins(probesDataDir: string): Plugin[] {
	const plugins = getAllPlugins();
	for (const plugin of plugins) {
		const layersPath = Path.join(probesDataDir, "layers.json");
		const probesPath = Path.join(probesDataDir, "probes", `${plugin.id}.json`);
		const probeBucketsPath = Path.join(
			probesDataDir,
			"probe-buckets",
			`${plugin.id}.json`,
		);

		const probesById: { [id: string]: Probe } = {};
		const probeObjs = JSON.parse(Fs.readFileSync(probesPath, "utf-8"));
		probeObjs.forEach((probeObj) => {
			probesById[probeObj.id] = Probe.load(probeObj, plugin.id);
		});

		const probeBucketObjs = JSON.parse(
			Fs.readFileSync(probeBucketsPath, "utf-8"),
		);
		plugin.probeBuckets = probeBucketObjs.map((obj) => {
			return ProbeBucket.load(obj, probesById);
		});

		const layerObjs = JSON.parse(Fs.readFileSync(layersPath, "utf-8")).filter(
			(x) => x.pluginId === plugin.id,
		);
		plugin.layers = layerObjs.map((obj) => Layer.load(obj));
	}
	return plugins;
}

export interface IAnalyzeScore {
	total: {
		[UserAgentToTestPickType.popular]: number;
		[UserAgentToTestPickType.random]: number;
	};
	individualByUserAgentId: { [userAgentId: string]: number };
	sessionsByPickType: {
		[UserAgentToTestPickType.popular]: ISessionScore[];
		[UserAgentToTestPickType.random]: ISessionScore[];
	};
}
export interface ISessionScore {
	userAgentId: string;
	humanScore: {
		individual: number;
		overTime: number;
		total: number;
	};
}
