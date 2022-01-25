import { IReadable, IWritable } from "./value";

export class Variable implements IReadable, IWritable {
  constructor(public identifier: string) {}

  get value() {
    return this.identifier;
  }

  static readonly temporary = new Variable("_");
}
