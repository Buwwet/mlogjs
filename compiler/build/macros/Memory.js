"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryBuilder = void 0;
const operators_1 = require("../operators");
const instructions_1 = require("../instructions");
const values_1 = require("../values");
const Function_1 = require("./Function");
class MemoryEntry extends values_1.ObjectValue {
    constructor(scope, mem, prop) {
        super(scope, {
            $eval: new Function_1.MacroFunction(scope, () => {
                const temp = new values_1.TempValue(scope);
                return [temp, [new instructions_1.InstructionBase("read", temp, mem.cell, prop)]];
            }),
            "$=": new Function_1.MacroFunction(scope, value => {
                return [value, [new instructions_1.InstructionBase("write", value, mem.cell, prop)]];
            }),
        });
    }
}
for (const operator of operators_1.operators) {
    if (operator === "=")
        continue;
    MemoryEntry.prototype[operator] = function (...args) {
        return values_1.BaseValue.prototype[operator].apply(this, args);
    };
}
class MemoryMacro extends values_1.ObjectValue {
    constructor(scope, cell, size) {
        super(scope, {
            $get: new Function_1.MacroFunction(scope, (prop) => {
                if (prop instanceof values_1.LiteralValue && typeof prop.data !== "number")
                    throw new Error(`Invalid memory object property: "${prop.data}"`);
                const obj = new MemoryEntry(scope, this, prop);
                return [obj, []];
            }),
            length: size,
            size,
        });
        this.cell = cell;
        this.name = cell.toString();
    }
    toString() {
        return this.name;
    }
}
class MemoryBuilder extends values_1.ObjectValue {
    constructor(scope) {
        super(scope, {
            $call: new Function_1.MacroFunction(scope, (cell, size = new values_1.LiteralValue(scope, 64)) => {
                if (!(cell instanceof values_1.ObjectValue))
                    throw new Error("Memory cell must be a building object.");
                if (!(size instanceof values_1.LiteralValue && typeof size.data === "number"))
                    throw new Error("The memory size must be a number literal.");
                return [new MemoryMacro(scope, cell, size), []];
            }),
        });
    }
}
exports.MemoryBuilder = MemoryBuilder;
//# sourceMappingURL=Memory.js.map