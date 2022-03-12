"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitBind = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
class UnitBind extends __1.MacroFunction {
    constructor(scope) {
        super(scope, type => {
            if (!(type instanceof values_1.StoreValue))
                throw new Error("The unitBind type must be a store");
            return [null, [new instructions_1.InstructionBase("ubind", type)]];
        });
    }
}
exports.UnitBind = UnitBind;
//# sourceMappingURL=UnitBind.js.map