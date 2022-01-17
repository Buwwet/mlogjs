import { IReadable, IWritable } from "../values/value";
import { IInstruction } from "./instruction";
import { TRadarFilter, TRadarFilterArray, TRadarSort } from "./units";

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

export class RadarInstruction implements IInstruction<"radar"> {
  readonly name = "radar";

  constructor(
    public from: IReadable,
    public filter: TRadarFilterArray,
    public order: boolean,
    public sort: TRadarSort,
    public output: IWritable
  ) {}

  toMlog(): string {
    const [f1, f2 = "any", f3 = "any"] = this.filter;

    return `${this.name} ${f1} ${f2} ${f3} ${this.sort} ${this.from.value} ${this.order} ${this.output.identifier}`;
  }
}

export class SensorInstruction implements IInstruction<"sensor"> {
  readonly name = "sensor";

  constructor(
    public type: IReadable,
    public target: IReadable,
    public output: IWritable
  ) {}

  toMlog(): string {
    return `${this.name} ${this.output.identifier} ${this.target.value} ${this.type.value}`;
  }
}
