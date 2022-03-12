import { StoreValue } from "./values";
import { AddressResolver } from "./instructions";
import { IFunctionValue, IInstruction, IScope, IValue } from "./types";
export declare class Scope implements IScope {
    parent: IScope | null;
    stacked: boolean;
    ntemp: number;
    name: string;
    inst: IInstruction[];
    data: Record<string, IValue | null>;
    break: AddressResolver;
    continue: AddressResolver;
    function: IFunctionValue;
    constructor(values: Record<string, IValue | null>, parent?: IScope | null, stacked?: boolean, ntemp?: number, name?: string, inst?: IInstruction[]);
    copy(): IScope;
    createScope(): IScope;
    createFunction(name: string, stacked?: boolean): IScope;
    has(name: string): boolean;
    get(name: string): IValue;
    set<T extends IValue>(name: string, value: T): T;
    hardSet<T extends IValue>(name: string, value: T): T;
    make(name: string, storeName: string): StoreValue;
}
