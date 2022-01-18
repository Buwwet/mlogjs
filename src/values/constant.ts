import { IReadable, TLiteral } from "./value";

export class Constant implements IReadable {
  constructor(public readonly value: TLiteral) {}
}
