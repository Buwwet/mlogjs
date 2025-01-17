import { JumpInstruction, AddressResolver } from "../instructions";
import { EJumpKind } from "../instructions";
import { THandler, es } from "../types";
import { LiteralValue } from "../values";

export const IfStatement: THandler<null> = (c, scope, node: es.IfStatement) => {
  const inst = [];
  const [test, testInst] = c.handleEval(scope, node.test);

  if (test instanceof LiteralValue) {
    if (test.data) inst.push(...c.handle(scope, node.consequent)[1]);
    else if (node.alternate) inst.push(...c.handle(scope, node.alternate)[1]);
    return [null, inst];
  }

  const endIfAddr = new LiteralValue(scope, null as never);
  inst.push(
    ...testInst,
    new JumpInstruction(
      endIfAddr,
      EJumpKind.Equal,
      test,
      new LiteralValue(scope, 0)
    ),
    ...c.handle(scope, node.consequent)[1],
    new AddressResolver(endIfAddr)
  );
  const endElseAddr = new LiteralValue(scope, null as never);
  if (node.alternate)
    inst.push(
      new JumpInstruction(endElseAddr, EJumpKind.Always),
      new AddressResolver(endIfAddr),
      ...c.handle(scope, node.alternate)[1],
      new AddressResolver(endElseAddr)
    );
  return [null, inst];
};
