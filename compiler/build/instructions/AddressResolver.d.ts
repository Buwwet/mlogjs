import { InstructionBase } from ".";
import { IBindableValue, IScope } from "../types";
export declare class AddressResolver extends InstructionBase {
    get hidden(): boolean;
    set hidden(value: boolean);
    bonds: IBindableValue[];
    constructor(...bonds: IBindableValue[]);
    resolve(i: number): void;
    bind(bond: IBindableValue): void;
    bindBreak(scope: IScope): this;
    bindContinue(scope: IScope): this;
}
