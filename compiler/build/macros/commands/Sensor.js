"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
class Sensor extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (property, target) => {
            if (!(property instanceof values_1.StoreValue))
                throw new Error("The sensor property must be a store");
            if (!(target instanceof values_1.ObjectValue))
                throw new Error("The sensor target must be a store");
            const temp = new values_1.TempValue(scope);
            return [temp, [new instructions_1.InstructionBase("sensor", temp, property, target)]];
        });
    }
}
exports.Sensor = Sensor;
//# sourceMappingURL=Sensor.js.map