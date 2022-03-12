"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lookup = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
const validKinds = ["block", "unit", "item", "liquid"];
class Lookup extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (kind, index) => {
            if (!(kind instanceof values_1.LiteralValue && typeof kind.data === "string"))
                throw new Error("The lookup kind must be a string literal");
            if (!validKinds.includes(kind.data))
                throw new Error("Invalid lookup kind");
            if (!(index instanceof values_1.LiteralValue && typeof index.data === "number") &&
                !(index instanceof values_1.StoreValue))
                throw new Error("The lookup index must be a number literal or a store");
            const temp = new values_1.TempValue(scope);
            return [temp, [new instructions_1.InstructionBase("lookup", kind.data, temp, index)]];
        });
    }
}
exports.Lookup = Lookup;
//# sourceMappingURL=Lookup.js.map