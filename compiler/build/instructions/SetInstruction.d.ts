import { InstructionBase } from ".";
import { IValue } from "../types";
export declare class SetInstruction extends InstructionBase {
    constructor(store: IValue, value: IValue);
}
