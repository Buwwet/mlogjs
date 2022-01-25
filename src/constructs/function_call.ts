import ts from "typescript";
import { TInstruction } from "../instructions";
import { IInstruction } from "../instructions/instruction";
import { IConstruct } from "./construct";

export class FunctionCallConstruct<Arguments extends unknown[]>
  implements IConstruct
{
  constructor(public node: ts.CallExpression) {}

  expand(): TInstruction[] {
    return [];
  }
}
