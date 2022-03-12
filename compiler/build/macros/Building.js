"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingBuilder = exports.Building = exports.itemNames = void 0;
const utils_1 = require("../utils");
const instructions_1 = require("../instructions");
const values_1 = require("../values");
const Function_1 = require("./Function");
const operators_1 = require("../operators");
exports.itemNames = [
    "copper",
    "lead",
    "metaglass",
    "graphite",
    "sand",
    "coal",
    "titanium",
    "thorium",
    "scrap",
    "silicon",
    "plastanium",
    "phaseFabric",
    "surgeAlloy",
    "sporePod",
    "blastCompound",
    "pyratite",
];
class Building extends values_1.ObjectValue {
    constructor(scope, name) {
        super(scope, {
            $get: new Function_1.MacroFunction(scope, (prop) => {
                if (prop instanceof values_1.LiteralValue && typeof prop.data === "string") {
                    const name = exports.itemNames.includes(prop.data)
                        ? (0, utils_1.camelToDashCase)(prop.data)
                        : prop.data;
                    const temp = new values_1.TempValue(scope);
                    return [
                        temp,
                        [new instructions_1.InstructionBase("sensor", temp, this, `@${name}`)],
                    ];
                }
                if (prop instanceof values_1.StoreValue) {
                    const temp = new values_1.TempValue(scope);
                    return [temp, [new instructions_1.InstructionBase("sensor", temp, this, prop)]];
                }
                throw new Error("Building property acessors must be string literals or stores");
            }),
        });
        this.name = name;
    }
    toString() {
        return this.name;
    }
}
exports.Building = Building;
class BuildingBuilder extends values_1.ObjectValue {
    constructor(scope) {
        super(scope, {
            $call: new Function_1.MacroFunction(scope, (nameLit) => {
                if (!(nameLit instanceof values_1.LiteralValue))
                    throw new Error("Block name must be a literal.");
                if (typeof nameLit.data !== "string")
                    throw new Error("Block name must be a string.");
                return [new Building(scope, nameLit.data), []];
            }),
        });
    }
}
exports.BuildingBuilder = BuildingBuilder;
for (const key in operators_1.operatorMap) {
    const kind = operators_1.operatorMap[key];
    Building.prototype[key] = function (scope, value) {
        const left = new values_1.StoreValue(scope, this.name);
        const [right, rightInst] = value.eval(scope);
        const temp = new values_1.TempValue(scope);
        return [
            temp,
            [...rightInst, new instructions_1.OperationInstruction(kind, temp, left, right)],
        ];
    };
}
//# sourceMappingURL=Building.js.map