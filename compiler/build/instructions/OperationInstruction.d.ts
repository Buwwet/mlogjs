import { InstructionBase } from ".";
import { IValue } from "../types";
export declare class OperationInstruction extends InstructionBase {
    constructor(kind: string, temp: IValue, left: IValue, right: IValue | null);
}
