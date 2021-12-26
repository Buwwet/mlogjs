import ts from "typescript";
import { IInstruction } from "./instructions/instruction";

export class BuildContext {
  instructions: IInstruction<string>[];
  constructor(public checker: ts.TypeChecker) {}
}
