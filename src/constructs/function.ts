import ts from "typescript";
import { IInstruction } from "../instructions/instruction";
import { IConstruct } from "./construct";

export class FunctionConstruct implements IConstruct {
  constructor(public node: ts.FunctionDeclaration) {}

  expand(): TInstruction[] {
    return [];
  }
}
