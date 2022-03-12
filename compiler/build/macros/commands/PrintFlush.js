"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintFlush = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
class PrintFlush extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (target) => {
            if (!(target instanceof values_1.ObjectValue))
                throw new Error("The printflush target must be a building");
            return [null, [new instructions_1.InstructionBase("printflush", target)]];
        });
    }
}
exports.PrintFlush = PrintFlush;
//# sourceMappingURL=PrintFlush.js.map