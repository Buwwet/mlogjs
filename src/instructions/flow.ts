import { InstructionReference } from "../values/reference";
import { IReadable } from "../values/value";
import { IInstruction } from "./instruction";

export class EndInstruction implements IInstruction<"end"> {
  readonly name = "end";

  toMlog(): string {
    return this.name;
  }
}
export type TJumpData =
  | "always"
  | [
      mode:
        | "equal"
        | "strictEqual"
        | "notEqual"
        | "lessThan"
        | "lessThanEq"
        | "greaterThan"
        | "greaterThanEq",
      a: IReadable,
      b: IReadable
    ];

export class JumpInstruction implements IInstruction<"end"> {
  readonly name = "end";

  constructor(public data: TJumpData, public ref: InstructionReference) {}

  toMlog(): string {
    const header = `${this.name} ${this.ref.lineNumber()}`;
    if (typeof this.data === "string") {
      return `${header} ${this.data}`;
    }
    const [operator, a, b] = this.data;
    return `${header} ${operator} ${a.value} ${b.value}`;
  }
}
