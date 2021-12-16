import { IReadable, IWritable } from "../values/value";
import { IInstruction } from "./instruction";

export class DrawFlushInstruction implements IInstruction<"drawflush"> {
  readonly name = "drawflush";

  constructor(public target: IReadable) {}

  toMlog(): string {
    return `${this.name} ${this.target.value}`;
  }
}

export class PrintFlushInstruction implements IInstruction<"printflush"> {
  readonly name = "printflush";

  constructor(public target: IReadable) {}

  toMlog(): string {
    return `${this.name} ${this.target.value}`;
  }
}

export class GetLinkInstruction implements IInstruction<"getlink"> {
  readonly name = "getlink";

  constructor(public result: IWritable, public number: IReadable) {}

  toMlog(): string {
    return `${this.name} ${this.result.identifier} ${this.number.value}`;
  }
}

export type TControlData =
  | [field: "enabled", block: IReadable, value: IReadable]
  | [
      field: "shoot",
      block: IReadable,
      x: IReadable,
      y: IReadable,
      shoot: IReadable
    ]
  | [field: "shootp", block: IReadable, unit: IReadable, shoot: IReadable]
  | [field: "config", block: IReadable, value: IReadable]
  | [
      field: "color",
      block: IReadable,
      r: IReadable,
      g: IReadable,
      b: IReadable
    ];
export class ControlInstruction implements IInstruction<"control"> {
  readonly name = "control";

  constructor(public data: TControlData) {}

  toMlog(): string {
    const [mode, ...values] = this.data;
    return `${this.name} ${mode} ${values.map(({ value }) => value).join(" ")}`;
  }
}
