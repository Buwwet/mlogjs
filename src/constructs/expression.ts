import ts from "typescript";
import { BuildContext } from "../context";
import { TInstruction } from "../instructions";
import { Variable } from "../values/variables";
import { IConstruct } from "./construct";
import { registerHandler } from "./handlers";

export class ExpressionConstruct implements IConstruct {
  constructor(
    public node: ts.Expression,
    context: BuildContext,
    public variable = Variable.temporary
  ) {
    if (ts.isBinaryExpression(node)) {
    }
  }

  expand(): TInstruction[] {
    return [];
  }
}

registerHandler<ts.Identifier>(ts.SyntaxKind.Identifier, (node, context) => {
  const { parent } = node;
  if (!ts.isBinaryExpression(parent) || !ts.isIfStatement(parent)) return;
  return new ExpressionConstruct(node, context);
});

registerHandler<ts.BinaryExpression>(
  ts.SyntaxKind.BinaryExpression,
  (node, context) => new ExpressionConstruct(node, context)
);

function isTruthinessExpression(
  expression: ts.Identifier | ts.LiteralExpression
): boolean {
  const { parent } = expression;
  return (
    ts.isBinaryExpression(parent) ||
    ts.isIfStatement(parent) ||
    ts.isWhileStatement(parent)
  );
}
