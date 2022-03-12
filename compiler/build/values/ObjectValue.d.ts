import { MacroFunction } from "../macros";
import { IScope, IValue, TOperatorMacroMap, TValueInstructions } from "../types";
import { LiteralValue } from "./LiteralValue";
import { VoidValue } from "./VoidValue";
export interface IObjectValueData extends TOperatorMacroMap {
    [k: string]: IValue | undefined;
    $get?: MacroFunction<IValue>;
    $eval?: MacroFunction<IValue>;
}
export declare class ObjectValue extends VoidValue {
    constant: boolean;
    macro: boolean;
    data: IObjectValueData;
    constructor(scope: IScope, data?: IObjectValueData);
    typeof(scope: IScope): TValueInstructions;
    get(scope: IScope, key: LiteralValue): TValueInstructions;
    eval(scope: IScope): TValueInstructions;
    call(scope: IScope, args: IValue[]): TValueInstructions<IValue | null>;
}
