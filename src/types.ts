export * as es from "estree";
export type THandler = (
	compiler: Compiler,
	scope: IScope,
	node: any,
	arg: any
) => TValueInstructions;

import { Compiler } from "./Compiler";
import { AddressResolver } from "./instructions";
import {
	AssignementOperator,
	BinaryOperator,
	LogicalOperator,
	UnaryOperator,
	UpdateOperator,
} from "./operators";

export interface IInstruction {
	hidden: boolean;
	resolve(i: number): void;
}


export interface IScope {
	name: string;
	extraInstructions: IInstruction[];
	breakAddressResolver: AddressResolver;
	continueAddressResolver: AddressResolver;
	fnRet: IValue;
	fnTemp: IValue;
	tempIndex: number;
	createScope(): IScope;
	createFunction(name: string, stacked?: boolean): IScope;
	has(name: string): boolean;
	get(name: string): IValue;
	set(name: string, value: IValue): IValue;
	make(name: string, storeName: string): IValue;
}

export type IValue = { [k in UnaryOperator]?: (scope: IScope) => TValueInstructions } &
	{ [k in UpdateOperator]?: (scope: IScope, prefix: boolean) => TValueInstructions } &
	{
		[k in BinaryOperator | AssignementOperator | LogicalOperator]?: (
			scope: IScope,
			value: IValue
		) => TValueInstructions;
	} & {
		scope: IScope;
		constant: boolean;
		macro: boolean;
		eval(scope: IScope): TValueInstructions;
		call(scope: IScope, args: IValue[]): TValueInstructions;
		get(scope: IScope, name: IValue): TValueInstructions;
	};

export type TLiteral = string | number;
export interface TBindableValue extends IValue {
	data: TLiteral;
}

export type TValueInstructions = [IValue, IInstruction[]];
