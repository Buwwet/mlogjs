import { BuildContext } from "../context";
import { TInstruction } from "../instructions";

export class InstructionReference<T extends TInstruction = TInstruction> {
  constructor(
    public context: BuildContext,
    public instruction: T,
    public offset = 0
  ) {}

  lineNumber(): number {
    return this.context.instructions.indexOf(this.instruction) + this.offset;
  }
}
