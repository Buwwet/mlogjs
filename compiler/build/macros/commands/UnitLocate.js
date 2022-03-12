"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitLocate = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
const Building_1 = require("../Building");
const validFinds = ["ore", "building", "spawn", "damaged"];
const validBuildingGroups = [
    "core",
    "storage",
    "generator",
    "turret",
    "factory",
    "repair",
    "rally",
    "battery",
    "reactor",
];
class UnitLocate extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (find, ...args) => {
            if (!(find instanceof values_1.LiteralValue && typeof find.data === "string"))
                throw new Error("The unitLocate find must be a string literal");
            if (!validFinds.includes(find.data))
                throw new Error("Invalid find value");
            if (args.some(value => !(value instanceof values_1.StoreValue || value instanceof values_1.LiteralValue)))
                throw new Error("The others arguments of unitLocate must be literals or stores");
            const outFound = new values_1.TempValue(scope);
            const outX = new values_1.TempValue(scope);
            const outY = new values_1.TempValue(scope);
            const outBuilding = new values_1.TempValue(scope);
            const outArgs = [outX, outY, outFound, outBuilding];
            let inputArgs = [];
            switch (find.data) {
                case "ore": {
                    const [ore] = args;
                    inputArgs = [find.data, "core", "true", ore];
                    break;
                }
                case "building": {
                    const [group, enemy] = args;
                    if (!(group instanceof values_1.LiteralValue && typeof group.data === "string")) {
                        throw new Error("The building group must be a string literal");
                    }
                    if (!validBuildingGroups.includes(group.data))
                        throw new Error("Invalid building group");
                    inputArgs = [find.data, group.data, enemy, "@copper"];
                    break;
                }
                case "spawn":
                case "damaged": {
                    inputArgs = [find.data, "core", "true", "@copper"];
                    break;
                }
            }
            return [
                new values_1.ObjectValue(scope, {
                    0: outFound,
                    1: outX,
                    2: outY,
                    3: new Building_1.Building(scope, outBuilding.name),
                    length: new values_1.LiteralValue(scope, find.data === "ore" ? 3 : 4),
                }),
                [new instructions_1.InstructionBase("ulocate", ...inputArgs, ...outArgs)],
            ];
        });
    }
}
exports.UnitLocate = UnitLocate;
//# sourceMappingURL=UnitLocate.js.map