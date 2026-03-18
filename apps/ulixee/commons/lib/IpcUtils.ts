import * as os from "node:os";

export function createIpcSocketPath(name: string): string {
	if (os.platform() === "win32") {
		return `\\\\.\\pipe\\${name}`;
	}
	return `${os.tmpdir()}/${name}.sock`;
}
