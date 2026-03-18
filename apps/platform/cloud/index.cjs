const cjsImport = require("./index.js");

module.exports = cjsImport.default;

for (const key in cjsImport) {
	if (!Object.hasOwn(cjsImport, key)) continue;
	module.exports[key] = cjsImport[key];
}
