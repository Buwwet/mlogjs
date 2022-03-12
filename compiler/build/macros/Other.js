"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concat = void 0;
const values_1 = require("../values");
const Function_1 = require("./Function");
class Concat extends Function_1.MacroFunction {
    constructor(scope) {
        super(scope, (...values) => {
            for (const value of values)
                if (!(value instanceof values_1.LiteralValue))
                    throw new Error("Concat arguments must all be literal values.");
            return [
                new values_1.LiteralValue(scope, values.map(v => v.data).join("")),
                [],
            ];
        });
    }
}
exports.Concat = Concat;
//# sourceMappingURL=Other.js.map