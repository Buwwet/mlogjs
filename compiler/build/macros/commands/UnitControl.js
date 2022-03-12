"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitControl = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
const Building_1 = require("../Building");
const validModes = [
    "idle",
    "stop",
    "move",
    "approach",
    "boost",
    "pathfind",
    "target",
    "targetp",
    "itemDrop",
    "itemTake",
    "payDrop",
    "payTake",
    "payEnter",
    "mine",
    "flag",
    "build",
    "getBlock",
    "within",
];
class UnitControl extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (mode, ...args) => {
            if (!(mode instanceof values_1.LiteralValue) || typeof mode.data !== "string")
                throw new Error("The unitControl mode must be a string literal");
            if (!validModes.includes(mode.data))
                throw new Error("Invalid unitControl mode");
            if (args.some(value => !(value instanceof values_1.StoreValue ||
                value instanceof values_1.LiteralValue ||
                value instanceof values_1.ObjectValue)))
                throw new Error("The others arguments of unitControl must be literals or stores");
            let result = null;
            let extraArgs = [];
            switch (mode.data) {
                case "getBlock": {
                    const outType = new values_1.TempValue(scope);
                    const outBuilding = new values_1.TempValue(scope);
                    result = new values_1.ObjectValue(scope, {
                        0: outType,
                        1: new Building_1.Building(scope, outBuilding.name),
                        length: new values_1.LiteralValue(scope, 2),
                    });
                    extraArgs = [outType, outBuilding, new values_1.LiteralValue(scope, 0)];
                    break;
                }
                case "within": {
                    const temp = new values_1.TempValue(scope);
                    result = temp;
                    extraArgs = [temp, new values_1.LiteralValue(scope, 0)];
                    break;
                }
            }
            return [
                result,
                [new instructions_1.InstructionBase("ucontrol", mode.data, ...args, ...extraArgs)],
            ];
        });
    }
}
exports.UnitControl = UnitControl;
//# sourceMappingURL=UnitControl.js.map