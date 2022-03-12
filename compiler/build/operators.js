"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operatorMap = exports.operators = exports.singleOperators = exports.updateOperators = exports.unaryOperators = exports.leftRightOperators = exports.assignmentOperators = exports.bitwiseAssignmentOperators = exports.logicalAssignmentOperators = exports.arithmeticAssignmentOperators = exports.logicalOperators = exports.binaryOperators = exports.bitwiseBinaryOperators = exports.comparisonBinaryOperators = exports.arithmeticBinaryOperators = void 0;
exports.arithmeticBinaryOperators = [
    "*",
    "**",
    "+",
    "-",
    "/",
    "%",
];
exports.comparisonBinaryOperators = [
    "!=",
    "!==",
    "<",
    "<=",
    "==",
    "===",
    ">",
    ">=",
];
exports.bitwiseBinaryOperators = [
    "&",
    "<<",
    ">>",
    ">>>",
    "^",
    "|",
];
exports.binaryOperators = [
    ...exports.arithmeticBinaryOperators,
    ...exports.comparisonBinaryOperators,
    ...exports.bitwiseBinaryOperators,
    "instanceof",
    "in",
];
exports.logicalOperators = ["&&", "??", "||"];
exports.arithmeticAssignmentOperators = [
    "%=",
    "&=",
    "*=",
    "**=",
    "+=",
    "-=",
    "/=",
];
exports.logicalAssignmentOperators = ["&&=", "||="];
exports.bitwiseAssignmentOperators = [
    "<<=",
    ">>=",
    ">>>=",
    "^=",
    "|=",
];
exports.assignmentOperators = [
    ...exports.arithmeticAssignmentOperators,
    ...exports.logicalAssignmentOperators,
    ...exports.bitwiseAssignmentOperators,
    "=",
];
exports.leftRightOperators = [
    ...exports.binaryOperators,
    ...exports.logicalOperators,
    ...exports.assignmentOperators,
];
exports.unaryOperators = [
    "!",
    "u+",
    "u-",
    "delete",
    "typeof",
    "void",
    "~",
];
exports.updateOperators = ["++", "--"];
exports.singleOperators = [...exports.unaryOperators, ...exports.updateOperators];
exports.operators = [...exports.leftRightOperators, ...exports.singleOperators];
exports.operatorMap = {
    "==": "equal",
    "===": "strictEqual",
    "!=": "notEqual",
    "!==": "notEqual",
    "<": "lessThan",
    ">": "greaterThan",
    "<=": "lessThanEq",
    ">=": "greaterThanEq",
    "+": "add",
    "-": "sub",
    "*": "mul",
    "/": "div",
    "%": "mod",
    "**": "pow",
    "|": "or",
    "&": "and",
    "^": "xor",
    ">>": "shr",
    ">>>": "shr",
    "<<": "shl",
    "&&": "land",
    "||": "or",
};
//# sourceMappingURL=operators.js.map