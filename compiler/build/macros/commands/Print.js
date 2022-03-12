"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
class Print extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (...values) => {
            const inst = [];
            for (const value of values) {
                inst.push(new instructions_1.InstructionBase("print", value));
            }
            return [null, inst];
        });
    }
}
exports.Print = Print;
//# sourceMappingURL=Print.js.map