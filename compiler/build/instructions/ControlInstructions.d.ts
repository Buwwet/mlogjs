import { IBindableValue } from "../types";
import { JumpInstruction } from "./JumpInstruction";
export declare class BreakInstruction extends JumpInstruction {
    constructor(address: IBindableValue);
}
export declare class ContinueInstruction extends JumpInstruction {
    constructor(address: IBindableValue);
}
export declare class ReturnInstruction extends JumpInstruction {
    constructor(address: IBindableValue);
}
