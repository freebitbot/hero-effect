import util, { type InspectOptions } from "node:util";
import { FingerprintGenerator } from "fingerprint-generator";

function debug(object: any, options: InspectOptions = {}) {
	const debug = util.inspect(object, {
		showHidden: false,
		colors: true,
		depth: 2,
		...options,
	});

	console.log(debug);
}

(async () => {
	try {
		const fingerprint = new FingerprintGenerator({
			mockWebRTC: true,
			browsers: ["chrome"],
			operatingSystems: ["macos"],
			devices: ["desktop"],
			httpVersion: "2",
		});

		debug(fingerprint);

		// const option: BunFetchRequestInit = {
		// 	verbose: true,
		// 	decompress: true,
		// 	tls: {
		// 		rejectUnauthorized: true,
		// 	},
		// 	headers: {
		// 		"User-Agent":
		// 			"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:117.0) Gecko/20100101 Firefox/117.0",
		// 		Accept:
		// 			"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
		// 		"Accept-Language": "en-US,en;q=0.5",
		// 		"Accept-Encoding": "gzip, deflate, br",
		// 		"Upgrade-Insecure-Requests": "1",
		// 		"Sec-Fetch-Dest": "document",
		// 		"Sec-Fetch-Mode": "navigate",
		// 		"Sec-Fetch-Site": "none",
		// 		"Sec-Fetch-User": "?1",
		// 		TE: "Trailers",
		// 	},
		// };

		// const res = await fetch(
		// 	"https://github.com/qnaplus/node-curl-impersonate/blob/master/README.md",
		// 	option,
		// );
	} catch (error) {
		console.error(error);
	}
})();
