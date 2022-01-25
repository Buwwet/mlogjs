import ts from "typescript";
import { BuildContext } from "../context";
import { TInstruction } from "../instructions";
import { IConstruct } from "./construct";

export type TNodeHandler<T extends ts.Node> = (
  node: T,
  context: BuildContext
) => TNodeHandlerResult | undefined;

export type TNodeHandlerResult = IConstruct | TInstruction | TInstruction[];
const handlers: Partial<Record<ts.SyntaxKind, TNodeHandler<ts.Node>[]>> = {};

export function registerHandler<T extends ts.Node>(
  kind: ts.SyntaxKind,
  handler: TNodeHandler<T>
) {
  if (!handlers[kind]) {
    handlers[kind] = [];
  }
  handlers[kind].push(handler as never);
}

export function handleNode(
  node: ts.Node,
  context: BuildContext
): TNodeHandlerResult {
  const { kind } = node;
  let result: TNodeHandlerResult | undefined;
  if (handlers[kind]) {
    for (const handler of handlers[kind]) {
      result = handler(node, context);
      if (result) break;
    }
  }
  if (result) return result;
  throw new Error(`Syntax kind not supported: ${ts.SyntaxKind[kind]}`);
}
