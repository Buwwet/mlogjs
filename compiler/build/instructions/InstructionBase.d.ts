import { IInstruction, IValue } from "../types";
export declare class InstructionBase implements IInstruction {
    private _hidden;
    get hidden(): boolean;
    set hidden(value: boolean);
    args: (string | IValue | null)[];
    constructor(...args: (string | IValue | null)[]);
    resolve(i: number): void;
    toString(): string;
}
