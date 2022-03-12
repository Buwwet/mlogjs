import { IBindableValue, IValue } from "../types";
import { InstructionBase } from "./InstructionBase";
export declare enum EJumpKind {
    Equal = "equal",
    NotEqual = "notEqual",
    LessThan = "lessThan",
    LessThanEq = "lessThanEq",
    GreaterThan = "greaterThan",
    GreaterThanEq = "greaterThanEq",
    StrictEqual = "strictEqual",
    Always = "always"
}
export declare class JumpInstruction extends InstructionBase {
    constructor(address: IBindableValue, kind: EJumpKind, left?: IValue | null, right?: IValue | null);
}
