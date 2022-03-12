"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
const acorn_1 = require("acorn");
const handlers = __importStar(require("./handlers"));
const initScope_1 = require("./initScope");
const instructions_1 = require("./instructions");
const Scope_1 = require("./Scope");
class Compiler {
    constructor(stackName) {
        this.handlers = handlers;
        this.usingStack = !!stackName;
        this.stackName = stackName;
    }
    compile(script) {
        let output;
        try {
            const program = this.parse(script);
            const scope = new Scope_1.Scope({});
            (0, initScope_1.initScope)(scope);
            const valueInst = this.handle(scope, program);
            valueInst[1].push(new instructions_1.EndInstruction(), ...scope.inst);
            this.resolve(valueInst);
            output = this.serialize(valueInst) + "\n";
        }
        catch (error) {
            return [null, error, error?.nodeStack ?? []];
        }
        return [output, null, []];
    }
    resolve(valueInst) {
        let i = 0;
        for (const inst of valueInst[1]) {
            inst.resolve(i);
            if (!inst.hidden)
                i++;
        }
    }
    serialize(resLines) {
        const [_, inst] = resLines;
        return inst.filter(l => !l.hidden).join("\n");
    }
    parse(script) {
        return (0, acorn_1.parse)(script, {
            locations: true,
            ecmaVersion: "latest",
        });
    }
    handle(scope, node) {
        try {
            const handler = this.handlers[node.type];
            if (!handler)
                throw Error("Missing handler for " + node.type);
            return handler(this, scope, node, null);
        }
        catch (error) {
            error.nodeStack ??= [];
            error.nodeStack.push(node);
            throw error;
        }
    }
    handleEval(scope, node) {
        const [res, inst] = this.handle(scope, node);
        const [evaluated, evaluatedLines] = res.eval(scope);
        return [evaluated, [...inst, ...evaluatedLines]];
    }
    handleMany(scope, nodes, handler = this.handle.bind(this)) {
        const lines = [];
        for (const node of nodes) {
            const [_, nodeLines] = handler(scope, node);
            lines.push(...nodeLines);
        }
        return [null, lines];
    }
}
exports.Compiler = Compiler;
//# sourceMappingURL=Compiler.js.map