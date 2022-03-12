"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitRadar = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
const Radar_1 = require("./Radar");
class UnitRadar extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (filter1, filter2, filter3, order, sort) => {
            if (!(filter1 instanceof values_1.LiteralValue) ||
                typeof filter1.data !== "string" ||
                !(filter2 instanceof values_1.LiteralValue) ||
                typeof filter2.data !== "string" ||
                !(filter3 instanceof values_1.LiteralValue) ||
                typeof filter3.data !== "string")
                throw new Error("The filters must be string literals");
            if (!Radar_1.validRadarFilters.includes(filter1.data))
                throw new Error("Invalid value for filter1");
            if (!Radar_1.validRadarFilters.includes(filter2.data))
                throw new Error("Invalid value for filter2");
            if (!Radar_1.validRadarFilters.includes(filter3.data))
                throw new Error("Invalid value for filter3");
            if (!(order instanceof values_1.LiteralValue || order instanceof values_1.StoreValue))
                throw new Error("The radar order must be a literal or a store");
            if (!(sort instanceof values_1.LiteralValue) || typeof sort.data !== "string")
                throw new Error("The radar sort must be a string literal");
            if (!Radar_1.validRadarSorts.includes(sort.data))
                throw new Error("Invalid sort value");
            const temp = new values_1.TempValue(scope);
            return [
                temp,
                [
                    new instructions_1.InstructionBase("uradar", filter1.data, filter2.data, filter3.data, order, sort.data, temp),
                ],
            ];
        });
    }
}
exports.UnitRadar = UnitRadar;
//# sourceMappingURL=UnitRadar.js.map