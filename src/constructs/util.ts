import ts from "typescript";
import { TInstruction } from "../instructions";
import { TConstructChildren } from "./construct";
import { TNodeHandlerResult } from "./handlers";

export function invertCondition(condition: ts.Expression) {
  throw "foo";
}

export function expandHandleResult(
  result: TNodeHandlerResult
): TConstructChildren {
  return Array.isArray(result) ? result : [result];
}
export function expandConstructChildren(children: TConstructChildren) {
  let result: TInstruction[] = [];
  for (const child of this.thenBlock) {
    if ("toMlog" in child) {
      result.push(child);
    } else {
      result = result.concat(child.expand());
    }
  }
  return result;
}
