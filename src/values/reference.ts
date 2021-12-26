import { BuildContext } from "../context";
import { IInstruction } from "../instructions/instruction";

export class InstructionReference<
  T extends IInstruction<string> = IInstruction<string>
> {
  constructor(public context: BuildContext, public instruction: T) {}

  lineNumber(): number {
    return this.context.instructions.indexOf(this.instruction);
  }
}
