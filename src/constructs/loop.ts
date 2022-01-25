import ts from "typescript";
import { IInstruction } from "../instructions/instruction";
import { EndInstruction, JumpInstruction } from "../instructions/flow";
import { TConstructChildren, IConstruct } from "./construct";
import { InstructionReference } from "../values/reference";
import { BuildContext } from "../context";

export class ForConstruct implements IConstruct {
  initializer: TConstructChildren;
  condition: TConstructChildren;
  jump: JumpInstruction;
  block: TConstructChildren;

  constructor(context: BuildContext, public node: ts.ForStatement) {}
  expand(): TInstruction[] {
    throw new Error("Method not implemented.");
  }
}
