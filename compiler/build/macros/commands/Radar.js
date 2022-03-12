"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radar = exports.validRadarSorts = exports.validRadarFilters = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
const Namespace_1 = require("../Namespace");
exports.validRadarFilters = [
    "any",
    "enemy",
    "ally",
    "player",
    "attacker",
    "flying",
    "boss",
    "ground",
];
exports.validRadarSorts = [
    "distance",
    "health",
    "shield",
    "armor",
    "maxHealth",
];
class Radar extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (building, filter1, filter2, filter3, order, sort) => {
            if (!(building instanceof values_1.ObjectValue))
                throw new Error("The building must a store");
            if (!(filter1 instanceof values_1.LiteralValue) ||
                typeof filter1.data !== "string" ||
                !(filter2 instanceof values_1.LiteralValue) ||
                typeof filter2.data !== "string" ||
                !(filter3 instanceof values_1.LiteralValue) ||
                typeof filter3.data !== "string")
                throw new Error("The filters must be string literals");
            if (!exports.validRadarFilters.includes(filter1.data))
                throw new Error("Invalid value for filter1");
            if (!exports.validRadarFilters.includes(filter2.data))
                throw new Error("Invalid value for filter2");
            if (!exports.validRadarFilters.includes(filter3.data))
                throw new Error("Invalid value for filter3");
            if (!(order instanceof values_1.LiteralValue || order instanceof values_1.StoreValue))
                throw new Error("The radar order must be a literal or a store");
            if (!(sort instanceof values_1.LiteralValue) || typeof sort.data !== "string")
                throw new Error("The radar sort must be a string literal");
            if (!exports.validRadarSorts.includes(sort.data))
                throw new Error("Invalid sort value");
            const temp = new values_1.TempValue(scope);
            const resultUnit = new Namespace_1.Unit(scope, temp.name);
            return [
                resultUnit,
                [
                    new instructions_1.InstructionBase("radar", filter1.data, filter2.data, filter3.data, sort.data, building, order, temp),
                ],
            ];
        });
    }
}
exports.Radar = Radar;
//# sourceMappingURL=Radar.js.map