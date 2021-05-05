import * as es from "estree";
export type TValueMap = { [key: string]: IValue };

export interface IScope {
	accIndex: number;
	valueMap: TValueMap;
	superMap: TValueMap;
	stacked: boolean;
	name: string;
	extend(name: string, stacked: boolean): IScope;
	nameExistsInCurrent(name: string): boolean;
	nameExistsInSuper(name: string): boolean;
	nameExists(name: string): boolean;
	set(name: string, value: IValue): IValue;
	createValue(name: string): IValue;
	get(name: string): IValue;
}

export interface IValue {
	constant: boolean;
	assignFromResLines(scope: IScope, [res, lines]: TResLines): TResLines
	binaryOperation(operator: es.BinaryOperator, scope: IScope, value: IValue): TResLines;
	logicalOperation(operator: es.LogicalOperator, scope: IScope, value: IValue): TResLines;
	assignmentOperation(operator: es.AssignmentOperator, scope: IScope, value: IValue): TResLines;
	updateOperation(operator: es.UpdateOperator, scope: IScope): TResLines;
	unaryOperation(operator: es.UnaryOperator, scope: IScope): TResLines;
	serialize(): string;
	evaluate(scope: IScope): TResLines;
	getMember(scope: IScope, value: IValue): TResLines;
	getComputedMember(scope: IScope, value: IValue): TResLines;
	call(scope: IScope, args: IValue[]): TResLines;
	tryAssign(scope: IScope, value: IValue): TResLines;
	assign(scope: IScope, value: IValue): TResLines;
	addAssign(scope: IScope, value: IValue): TResLines;
	subtractAssign(scope: IScope, value: IValue): TResLines;
	multiplyAssign(scope: IScope, value: IValue): TResLines;
	divideAssign(scope: IScope, value: IValue): TResLines;
	remainderAssign(scope: IScope, value: IValue): TResLines;
	powerAssign(scope: IScope, value: IValue): TResLines;
	bitwiseLeftShiftAssign(scope: IScope, value: IValue): TResLines;
	bitwiseRightShiftAssign(scope: IScope, value: IValue): TResLines;
	bitwiseUnsignedRightShiftAssign(scope: IScope, value: IValue): TResLines;
	bitwiseAndAssign(scope: IScope, value: IValue): TResLines;
	bitwiseXorAssign(scope: IScope, value: IValue): TResLines;
	bitwiseOrAssign(scope: IScope, value: IValue): TResLines;
	logicalAndAssign(scope: IScope, value: IValue): TResLines;
	logicalOrAssign(scope: IScope, value: IValue): TResLines;
	logicalNullishAssign(scope: IScope, value: IValue): TResLines;
	equal(scope: IScope, value: IValue): TResLines;
	strictEqual(scope: IScope, value: IValue): TResLines;
	notEqual(scope: IScope, value: IValue): TResLines;
	strictNotEqual(scope: IScope, value: IValue): TResLines;
	greaterThan(scope: IScope, value: IValue): TResLines;
	greaterThanOrEqual(scope: IScope, value: IValue): TResLines;
	lessThan(scope: IScope, value: IValue): TResLines;
	lessThanOrEqual(scope: IScope, value: IValue): TResLines;
	add(scope: IScope, value: IValue): TResLines;
	subtract(scope: IScope, value: IValue): TResLines;
	multiply(scope: IScope, value: IValue): TResLines;
	divide(scope: IScope, value: IValue): TResLines;
	remainder(scope: IScope, value: IValue): TResLines;
	power(scope: IScope, value: IValue): TResLines;
	bitwiseAnd(scope: IScope, value: IValue): TResLines;
	bitwiseOr(scope: IScope, value: IValue): TResLines;
	bitwiseXor(scope: IScope, value: IValue): TResLines;
	bitwiseLeftShift(scope: IScope, value: IValue): TResLines;
	bitwiseRightShift(scope: IScope, value: IValue): TResLines;
	bitwiseUnsignedRightShift(scope: IScope, value: IValue): TResLines;
	logicalAnd(scope: IScope, value: IValue): TResLines;
	logicalOr(scope: IScope, value: IValue): TResLines;
	logicalNullish(scope: IScope, value: IValue): TResLines;
	inOperation(scope: IScope, value: IValue): TResLines;
	// unary
	instanceofOperation(scope: IScope): TResLines;
	bitwiseNot(scope: IScope): TResLines;
	logicalNot(scope: IScope): TResLines;
	voidOperation(scope: IScope): TResLines;
	typeofOperation(scope: IScope): TResLines;
	deleteOperation(scope: IScope): TResLines;
	unaryNegate(scope: IScope): TResLines;
	unaryPlus(scope: IScope): TResLines;
	increment(scope: IScope): TResLines;
	decrement(scope: IScope): TResLines;
}

export type TLine = (string | IValue)[];

export type TResLines = [IValue, TLine[]];

export enum EOperation {
	Equal = "equal",
	NotEqual = "notEqual",
	LessThan = "lessThan",
	GreaterThan = "greaterThan",
	LessThanEqual = "lessThanEq",
	GreaterThanEqual = "greaterThanEq",
	Add = "add",
	Subtract = "sub",
	Multiply = "mul",
	Divide = "div",
	Modulus = "mod",
	Pow = "pow",
	LogicalAnd = "land",
	BitwiseOr = "or",
	BitwiseAnd = "and",
	BitwiseXor = "xor",
	BitwiseShiftRight = "shr",
	BitwiseShiftLeft = "shl",
	LogicalNot = "not",
	BitwiseNot = "flip",
}
