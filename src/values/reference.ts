import { IInstruction } from "../instructions/instruction";

export class InstructionReference<
  T extends IInstruction<string> = IInstruction<string>
> {
  constructor(public instruction: T) {}

  lineNumber(): number {
    return 0; // TODO
  }
}
