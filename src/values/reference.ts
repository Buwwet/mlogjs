import { ProcessorContext } from "../context";
import { IInstruction } from "../instructions/instruction";

export class InstructionReference<
  T extends IInstruction<string> = IInstruction<string>
> {
  constructor(public context: ProcessorContext, public instruction: T) {}

  lineNumber(): number {
    return this.context.instructions.indexOf(this.instruction);
  }
}
