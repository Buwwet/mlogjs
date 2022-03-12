"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExpression = exports.UnaryExpression = exports.AssignmentExpression = exports.LogicalExpression = exports.BinaryExpression = exports.LRExpression = void 0;
const LRExpression = (c, scope, node) => {
    const [left, leftInst] = c.handleEval(scope, node.left);
    const [right, rightInst] = c.handleEval(scope, node.right);
    const [op, opInst] = left[node.operator](scope, right);
    return [op, [...leftInst, ...rightInst, ...opInst]];
};
exports.LRExpression = LRExpression;
exports.BinaryExpression = exports.LRExpression;
exports.LogicalExpression = exports.LRExpression;
const AssignmentExpression = (c, scope, node) => {
    const [left, leftInst] = c.handle(scope, node.left);
    const [right, rightInst] = c.handleEval(scope, node.right);
    const [op, opInst] = left[node.operator](scope, right);
    return [op, [...leftInst, ...rightInst, ...opInst]];
};
exports.AssignmentExpression = AssignmentExpression;
const UnaryExpression = (c, scope, { argument, operator }) => {
    const [arg, argInst] = c.handleEval(scope, argument);
    const operatorId = operator == "+" || operator == "-" ? `u${operator}` : operator;
    const [op, opInst] = arg[operatorId](scope);
    return [op, [...argInst, ...opInst]];
};
exports.UnaryExpression = UnaryExpression;
const UpdateExpression = (c, scope, { argument, operator, prefix }) => {
    const [arg, argInst] = c.handle(scope, argument);
    const [op, opInst] = arg[operator](scope, prefix);
    return [op, [...argInst, ...opInst]];
};
exports.UpdateExpression = UpdateExpression;
//# sourceMappingURL=OperationExpressions.js.map