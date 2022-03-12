"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawValueMacro = void 0;
const values_1 = require("../values");
const Function_1 = require("./Function");
class RawValueMacro extends Function_1.MacroFunction {
    constructor(scope) {
        super(scope, (name) => {
            if (!(name instanceof values_1.LiteralValue) || typeof name.data !== "string")
                throw new Error("The name of the building must be a string literal.");
            return [new values_1.StoreValue(scope, name.data), []];
        });
    }
}
exports.RawValueMacro = RawValueMacro;
//# sourceMappingURL=RawValue.js.map