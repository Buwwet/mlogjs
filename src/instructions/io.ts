import { IMemory, IReadable, IWritable } from "../values/value";
import { IInstruction } from "./instruction";

export class ReadInstruction implements IInstruction<"read"> {
  readonly name = "read";

  constructor(
    public result: IWritable,
    public cell: IMemory,
    public pos: IReadable
  ) {}

  toMlog(): string {
    return `${this.name} ${this.result.identifier} ${this.cell.identifier} ${this.pos.value}`;
  }
}

export class WriteInstruction implements IInstruction<"write"> {
  readonly name = "write";

  constructor(
    public data: IReadable,
    public cell: IMemory,
    public pos: IReadable
  ) {}

  toMlog(): string {
    return `${this.name} ${this.data.value} ${this.cell.identifier} ${this.pos.value}`;
  }
}

export type TDrawData =
  | [mode: "clear", r: IReadable, g: IReadable, b: IReadable]
  | [mode: "color", r: IReadable, g: IReadable, b: IReadable, a: IReadable]
  | [mode: "stroke", width: IReadable]
  | [mode: "line", x: IReadable, y: IReadable, x2: IReadable, y2: IReadable]
  | [
      mode: "rect",
      x: IReadable,
      y: IReadable,
      width: IReadable,
      height: IReadable
    ]
  | [
      mode: "lineRect",
      x: IReadable,
      y: IReadable,
      width: IReadable,
      height: IReadable
    ]
  | [
      mode: "poly",
      x: IReadable,
      y: IReadable,
      sides: IReadable,
      radius: IReadable,
      rotation: IReadable
    ]
  | [
      mode: "linePoly",
      x: IReadable,
      y: IReadable,
      sides: IReadable,
      radius: IReadable,
      rotation: IReadable
    ]
  | [
      mode: "triangle",
      x: IReadable,
      y: IReadable,
      x2: IReadable,
      y2: IReadable,
      x3: IReadable,
      y3: IReadable
    ]
  | [
      mode: "image",
      x: IReadable,
      y: IReadable,
      image: IReadable,
      size: IReadable,
      rotation: IReadable
    ];

export class DrawInstruction implements IInstruction<"draw"> {
  readonly name = "draw";

  constructor(public data: TDrawData) {}

  toMlog(): string {
    const [mode, ...values] = this.data;

    return `${this.name} ${mode} ${values.map(({ value }) => value).join(" ")}`;
  }
}

export class PrintInstruction implements IInstruction<"print"> {
  readonly name = "print";

  constructor(public content: IReadable) {}

  toMlog(): string {
    return `${this.name} ${this.content.value}`;
  }
}
