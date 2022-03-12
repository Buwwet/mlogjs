"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockStatement = void 0;
const BlockStatement = (c, scope, node) => {
    const [value, insts] = c.handleMany(scope.createScope(), node.body);
    // const cleanInst = []
    // for (const inst of insts) {
    //     if (inst instanceof BreakInstruction || inst instanceof ContinueInstruction || inst instanceof ReturnInstruction || inst instanceof SetCounterInstruction) break
    //     cleanInst.push(inst)
    // }
    return [value, insts];
};
exports.BlockStatement = BlockStatement;
//# sourceMappingURL=BlockStatement.js.map