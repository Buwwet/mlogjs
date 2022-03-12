import { IScope, IValue, TValueInstructions } from "../types";
import { VoidValue } from "../values";
declare type TFunction<T extends IValue | null> = (...args: IValue[]) => TValueInstructions<T>;
export declare class MacroFunction<RT extends IValue | null = IValue> extends VoidValue {
    macro: boolean;
    constant: boolean;
    fn: TFunction<RT>;
    constructor(scope: IScope, fn: TFunction<RT>);
    call(scope: IScope, args: IValue[]): TValueInstructions<RT>;
    eval(scope: IScope): TValueInstructions;
}
export {};
