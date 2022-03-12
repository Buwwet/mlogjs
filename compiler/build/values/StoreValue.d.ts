import { BaseValue } from ".";
import { IScope, IValue, TValueInstructions } from "../types";
export declare class StoreValue extends BaseValue implements IValue {
    name: string;
    constant: boolean;
    constructor(scope: IScope, name: string);
    typeof(scope: IScope): TValueInstructions;
    "="(scope: IScope, value: IValue): TValueInstructions;
    eval(scope: IScope): TValueInstructions;
    toString(): string;
}
