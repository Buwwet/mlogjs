import { IScope } from "../types";
import { ObjectValue } from "../values";
export declare const itemNames: string[];
export declare class Building extends ObjectValue {
    name: string;
    toString(): string;
    constructor(scope: IScope, name: string);
}
export declare class BuildingBuilder extends ObjectValue {
    constructor(scope: IScope);
}
