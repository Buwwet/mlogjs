import ts from "typescript";
import { BuildContext } from "../context";
import { IConstruct, TConstructChildren } from "./construct";
import { handleNode, registerHandler } from "./handlers";
import { expandConstructChildren, expandHandleResult } from "./util";
import { TInstruction, JumpInstruction } from "../instructions";
import { InstructionReference } from "../values/reference";

export class IfConstruct implements IConstruct {
  thenBlock: TConstructChildren;
  elseBlock?: TConstructChildren;

  constructor(public node: ts.IfStatement, context: BuildContext) {
    const { elseStatement } = node;

    if (elseStatement) {
      const expression = node.expression;
    } else {
    }

    this.thenBlock = expandHandleResult(
      handleNode(node.thenStatement, context)
    );

    if (elseStatement) {
      this.elseBlock = expandHandleResult(handleNode(elseStatement, context));
    }
  }

  expand(): TInstruction[] {
    return expandConstructChildren(this.thenBlock);
  }
}

registerHandler<ts.IfStatement>(ts.SyntaxKind.IfStatement, (node, context) => {
  return new IfConstruct(node, context);
});
