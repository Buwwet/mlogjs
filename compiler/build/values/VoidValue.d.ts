import { IScope, IValue, TValueInstructions } from "../types";
export declare class VoidValue implements IValue {
    scope: IScope;
    constant: boolean;
    macro: boolean;
    constructor(scope: IScope);
    eval(scope: IScope): TValueInstructions;
    call(scope: IScope, args: IValue[]): TValueInstructions<IValue | null>;
    get(scope: IScope, name: IValue): TValueInstructions;
    toString(): string;
}
export interface VoidValue extends IValue {
}
