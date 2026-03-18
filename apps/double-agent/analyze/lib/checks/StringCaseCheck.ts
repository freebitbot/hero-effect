import { CheckType } from "./BaseCheck";
import StringCheck from "./StringCheck";

export default class StringCaseCheck extends StringCheck {
	public override readonly prefix = "STRC";
	public override readonly type = CheckType.Individual;

	public override get signature(): string {
		return `${this.id}:${this.value}`;
	}

	public override get args(): any[] {
		return [this.value];
	}
}
