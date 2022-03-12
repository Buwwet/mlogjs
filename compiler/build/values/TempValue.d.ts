import { IInstruction, IScope, IValue, TValueInstructions } from "../types";
import { StoreValue } from "./";
export declare class TempValue extends StoreValue {
    proxied: IValue;
    canProxy: boolean;
    setInst: IInstruction;
    constructor(scope: IScope, name?: string);
    eval(scope: IScope): TValueInstructions;
    "="(scope: IScope, value: IValue): TValueInstructions;
    proxy(value: IValue): TValueInstructions;
    noProxy(): void;
}
