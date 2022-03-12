import { es, IScope, IValue, THandler, TValueInstructions } from "./types";
declare type THandlerMap = {
    [k in es.Node["type"]]?: THandler<IValue | null>;
};
export declare class Compiler {
    protected stackName?: string;
    protected usingStack: boolean;
    protected handlers: THandlerMap;
    constructor(stackName?: string);
    compile(script: string): [string, null, es.Node[]] | [null, Error, es.Node[]];
    protected resolve(valueInst: TValueInstructions<IValue | null>): void;
    protected serialize(resLines: TValueInstructions<IValue | null>): string;
    protected parse(script: string): es.Node;
    handle(scope: IScope, node: es.Node): TValueInstructions<IValue | null>;
    handleEval(scope: IScope, node: es.Node): TValueInstructions;
    handleMany<T extends es.Node>(scope: IScope, nodes: T[], handler?: (scope: IScope, node: T) => TValueInstructions<IValue | null>): TValueInstructions<null>;
}
export {};
