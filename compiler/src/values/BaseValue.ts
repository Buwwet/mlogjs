import { OperationInstruction } from "../instructions";
import {
  AssignementOperator,
  BinaryOperator,
  LogicalOperator,
  UnaryOperator,
  updateOperators,
} from "../operators";
import { IScope, IValue, TValueInstructions } from "../types";
import { LiteralValue, TempValue, VoidValue } from ".";

export class BaseValue extends VoidValue implements IValue {
  "u-"(scope: IScope): TValueInstructions {
    const [that, inst] = this.eval(scope);
    const temp = new TempValue(scope);
    return [
      temp,
      [
        ...inst,
        new OperationInstruction("sub", temp, new LiteralValue(scope, 0), that),
      ],
    ];
  }
}

const operatorMap: Record<
  Exclude<BinaryOperator | LogicalOperator, "instanceof" | "in" | "??">,
  string
> = {
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
} as const;

for (const key in operatorMap) {
  type K = keyof typeof operatorMap;
  const kind = operatorMap[key as K] as string;
  BaseValue.prototype[key as K] = function (
    this: BaseValue,
    scope: IScope,
    value: IValue
  ): TValueInstructions {
    const [left, leftInst] = this.eval(scope);
    const [right, rightInst] = value.eval(scope);
    const temp = new TempValue(scope);
    return [
      temp,
      [
        ...leftInst,
        ...rightInst,
        new OperationInstruction(kind, temp, left, right),
      ],
    ];
  };
}

const unaryOperatorMap: Record<Extract<UnaryOperator, "!" | "~">, string> = {
  "!": "not",
  "~": "flip",
} as const;

for (const key in unaryOperatorMap) {
  type K = keyof typeof unaryOperatorMap;
  const name = unaryOperatorMap[key as K];
  BaseValue.prototype[key as K] = function (
    this: BaseValue,
    scope: IScope
  ): TValueInstructions {
    const [that, inst] = this.eval(scope);
    const temp = new TempValue(scope);
    return [temp, [...inst, new OperationInstruction(name, temp, that, null)]];
  };
}

const assignmentToBinary: Record<
  Exclude<AssignementOperator, "=">,
  BinaryOperator | LogicalOperator
> = {
  "+=": "+",
  "-=": "-",
  "*=": "*",
  "/=": "/",
  "%=": "%",
  "**=": "**",
  "|=": "|",
  "&=": "&",
  "^=": "^",
  ">>=": ">>",
  ">>>=": ">>>",
  "<<=": "<<",
  "&&=": "&&",
  "||=": "||",
} as const;

for (const op in assignmentToBinary) {
  type K = keyof typeof assignmentToBinary;
  BaseValue.prototype[op as K] = function (
    this: IValue,
    scope: IScope,
    value: IValue
  ): TValueInstructions {
    const [opValue, opInst] = this[assignmentToBinary[op as K]](scope, value);
    const [retValue, retInst] = this["="](scope, opValue);
    return [retValue, [...opInst, ...retInst]];
  };
}

for (const key of updateOperators) {
  BaseValue.prototype[key] = function (
    this: IValue,
    scope: IScope,
    prefix: boolean
  ): TValueInstructions {
    let [ret, inst] = this.eval(scope);
    if (!prefix) {
      const temp = new TempValue(scope);
      const [tempValue, tempInst] = temp["="](scope, ret);
      ret = tempValue;
      inst.push(...tempInst);
    }
    const kind = key === "++" ? "+=" : "-=";
    return [
      ret,
      [...inst, ...this[kind](scope, new LiteralValue(scope, 1))[1]],
    ];
  };
}
