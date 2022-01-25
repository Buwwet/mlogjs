import ts, { SyntaxKind } from "typescript";

export function validateNode(node: ts.Node) {
  switch (node.kind) {
    case SyntaxKind.FunctionExpression:
    case SyntaxKind.FunctionExpression:
      node.forEachChild(validateNode);
      break;
    case SyntaxKind.AwaitExpression:
    case SyntaxKind.AwaitKeyword:
    case SyntaxKind.AsyncKeyword:
      throw new Error("Async/await is not supported in this context");
    case SyntaxKind.AnyKeyword:
      throw new Error("Any type not allowed");
  }
}
