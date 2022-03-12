"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
const validKinds = ["enabled", "shoot", "shootp", "config", "color"];
class Control extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (kind, building, ...args) => {
            if (!(kind instanceof values_1.LiteralValue) || typeof kind.data !== "string")
                throw new Error("The control kind must be a string literal");
            if (!validKinds.includes(kind.data))
                throw new Error("Invalid control kind");
            if (!(building instanceof values_1.ObjectValue))
                throw new Error("The building must be an object value");
            return [
                null,
                [new instructions_1.InstructionBase("control", kind.data, building, ...args)],
            ];
        });
    }
}
exports.Control = Control;
//# sourceMappingURL=Control.js.map