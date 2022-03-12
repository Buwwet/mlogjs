import { IScope, IBindableValue, TLiteral, TValueInstructions, IValue } from "../types";
import { BaseValue } from ".";
export declare class LiteralValue extends BaseValue implements IBindableValue {
    data: TLiteral;
    constant: boolean;
    constructor(scope: IScope, data: TLiteral);
    eval(scope: IScope): TValueInstructions;
    toString(): string;
    get(scope: IScope, name: IValue): TValueInstructions;
    get num(): number;
    typeof(scope: IScope): TValueInstructions;
}
