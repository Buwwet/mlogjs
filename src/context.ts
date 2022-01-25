import ts from "typescript";
import { TInstruction } from "./instructions";

export class BuildContext {
  instructions: TInstruction[];
  constructor(public checker: ts.TypeChecker) {}
}
