import { IScope } from "../types";
import { ObjectValue } from "../values";
interface NamespaceMacroOptions {
    changeCasing?: boolean;
}
export declare class NamespaceMacro extends ObjectValue {
    changeCasing: boolean;
    constructor(scope: IScope, { changeCasing }?: NamespaceMacroOptions);
}
export declare class VarsNamespace extends NamespaceMacro {
    constructor(scope: IScope);
}
export declare class UCommandsNamespace extends NamespaceMacro {
    constructor(scope: IScope);
}
export declare class Unit extends ObjectValue {
    name: string;
    constructor(scope: IScope, name: string);
    toString(): string;
}
export {};
