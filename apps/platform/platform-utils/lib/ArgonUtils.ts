export default class ArgonUtils {
	static ArgonSymbol = "₳";
	static MicrogonsSymbol = "m";
	static MicrogonsPerArgon = 1000000n;

	static parseUnits(units: string, output: "microgons"): bigint;
	static parseUnits(units: string, output: "argons"): bigint;
	static parseUnits(units: string, output: "microgons" | "argons"): bigint {
		if (!units.endsWith(ArgonUtils.MicrogonsSymbol) && !units.endsWith("a")) {
			units += ArgonUtils.MicrogonsSymbol;
		}

		let value = BigInt(units.substring(0, units.length - 1));
		if (output === "microgons") {
			if (units.endsWith("a")) value = ArgonUtils.microgonsToArgons(value);

			return value;
		}

		// else argons
		if (units.endsWith(ArgonUtils.MicrogonsSymbol))
			return ArgonUtils.microgonsToArgons(value);

		return value;
	}

	static printArgons(argons: number): string {
		let argonsb = argons;
		const prefix = argonsb < 0 ? "-" : "";
		if (argonsb < 0) {
			argonsb *= -1;
		}
		return `${prefix}${ArgonUtils.ArgonSymbol}${argonsb}`;
	}

	static format(
		value: number | bigint,
		fromUnits: "microgons" | "argons",
		toUnits?: "microgons" | "argons",
	): string {
		if (typeof value === "number") {
			value = BigInt(value);
		}

		if (fromUnits === "microgons") {
			if (toUnits === "argons" || value % ArgonUtils.MicrogonsPerArgon === 0n) {
				const argons = ArgonUtils.microgonsToRoundedArgons(value);
				return ArgonUtils.printArgons(argons);
			}
			return `${value}${ArgonUtils.MicrogonsSymbol}`;
		}

		if (toUnits === "microgons") {
			return `${value * ArgonUtils.MicrogonsPerArgon}${ArgonUtils.MicrogonsSymbol}`;
		}
		return ArgonUtils.printArgons(Number(value));
	}

	private static microgonsToArgons(microgons: number | bigint): bigint {
		if (typeof microgons === "number") {
			microgons = BigInt(microgons);
		}

		return microgons / ArgonUtils.MicrogonsPerArgon;
	}

	private static microgonsToRoundedArgons(microgons: number | bigint): number {
		return (
			Math.round(Number(ArgonUtils.microgonsToArgons(microgons) * 1000n)) / 1000
		);
	}
}
