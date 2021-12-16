import { IReadable, IWritable } from "../values/value";
import { IInstruction } from "./instruction";

export class SetInstruction implements IInstruction<"set"> {
  readonly name = "set";

  constructor(public target: IWritable, public value: IReadable) {}

  toMlog(): string {
    return `${this.name} ${this.target.identifier} ${this.value.value}`;
  }
}

export type BinaryOperator =
  | "+"
  | "-"
  | "*"
  | "/"
  | "//"
  | "%"
  | "^"
  | "=="
  | "not"
  | "and"
  | "<"
  | "<="
  | ">"
  | ">="
  | "==="
  | "<<"
  | ">>"
  | "or"
  | "b-and"
  | "xor"
  | "max"
  | "min"
  | "angle"
  | "len"
  | "noise";
export type UnaryOperator =
  | "flip"
  | "abs"
  | "log"
  | "log10"
  | "floor"
  | "ceil"
  | "sqrt"
  | "rand"
  | "sin"
  | "cos"
  | "tan"
  | "asin"
  | "acos"
  | "atan";

export type Operator = BinaryOperator | UnaryOperator;
export type TOperationData =
  | [op: BinaryOperator, a: IReadable, b: IReadable]
  | [op: UnaryOperator, a: IReadable];
// TODO: Binary operators, unary operator: some operators only take one operand like tan

export class OperationInstruction implements IInstruction<"op"> {
  readonly name = "op";

  constructor(public target: IWritable, public data: TOperationData) {}

  toMlog(): string {
    const [op, a, b] = this.data;
    const base = `${this.name} ${op} ${this.target.identifier} ${a.value}`;
    if (b) {
      return `${base} ${b.value}`;
    }
    return base;
  }
}

export class WaitOperation implements IInstruction<"wait"> {
  readonly name = "wait";

  constructor(public seconds: IReadable) {}

  toMlog(): string {
    return `${this.name} ${this.seconds.value}`;
  }
}
export type TLookupType = "block" | "unit" | "item" | "liquid";
export class LookupOperation implements IInstruction<"lookup"> {
  readonly name = "lookup";

  constructor(
    public result: IWritable,
    public type: TLookupType,
    public number: IReadable
  ) {}

  toMlog(): string {
    return `${this.name} ${this.type} ${this.number.value}`;
  }
}

function getOperationName(op: Operator) {
  switch (op) {
    case "+":
      return "add";
    case "-":
      return "sub";
    case "*":
      return "mul";
    case "/":
      return "div";
    case "//":
      return "idiv";
    case "^":
      return "pow";
    case "%":
      return "mod";
    case "==":
      return "equal";
    case "not":
      return "notEqual";
    case "and":
      return "land";
    case "<":
      return "lessThan";
    case "<=":
      return "lessThanEq";
    case ">":
      return "greaterThan";
    case ">=":
      return "greaterThanEq";
    case "===":
      return "strictEqual";
    case "<<":
      return "shl";
    case ">>":
      return "shr";
    case "b-and":
      return "and";
    case "flip":
      return "not";
    default:
      return op;
  }
}
