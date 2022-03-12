import { IScope, IValue, TValueInstructions } from "../types";
import { VoidValue } from ".";
export declare class BaseValue extends VoidValue implements IValue {
    "u-"(scope: IScope): TValueInstructions;
}
