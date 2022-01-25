import ts from "typescript";

const commands = new Set([""]);
// TODO: if we are going to support custom function definitions
// we should check if any of our predefined functions is overwritten

export default {
  [ts.SyntaxKind.VariableDeclaration](
    node: ts.VariableDeclaration,
    checker: ts.TypeChecker
  ) {
    const { initializer } = node;
    if (!ts.isCallExpression(initializer)) return;
    const { expression } = initializer;
    if (!ts.isIdentifier(expression)) return;
    const identSymbol = checker.getSymbolAtLocation(expression);
    identSymbol.getDeclarations()[0];
  },
};
