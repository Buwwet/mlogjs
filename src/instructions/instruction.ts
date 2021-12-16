export interface IInstruction<Name extends string> {
  readonly name: Name;

  toMlog(): string;
}
