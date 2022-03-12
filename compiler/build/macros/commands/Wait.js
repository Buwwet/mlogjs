"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wait = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
class Wait extends __1.MacroFunction {
    constructor(scope) {
        super(scope, seconds => {
            if (!(seconds instanceof values_1.StoreValue) &&
                !(seconds instanceof values_1.LiteralValue && typeof seconds.data === "number"))
                throw new Error("The wait seconds must be either a number literal or a store");
            return [null, [new instructions_1.InstructionBase("wait", seconds)]];
        });
    }
}
exports.Wait = Wait;
//# sourceMappingURL=Wait.js.map