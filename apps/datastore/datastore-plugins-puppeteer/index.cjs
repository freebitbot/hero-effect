const cjsImport = require("./index.js");

for (const key in cjsImport) {
	if (!Object.hasOwn(cjsImport, key) || key in module.exports) continue;
	module.exports[key] = cjsImport[key];
}
