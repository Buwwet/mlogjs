"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLink = void 0;
const instructions_1 = require("../../instructions");
const __1 = require("..");
const values_1 = require("../../values");
const Building_1 = require("../Building");
class GetLink extends __1.MacroFunction {
    constructor(scope) {
        super(scope, (index) => {
            if (!(index instanceof values_1.StoreValue) &&
                (!(index instanceof values_1.LiteralValue) || typeof index.data !== "number"))
                throw new Error("The getlink index must be a number literal or a store");
            const temp = new values_1.TempValue(scope);
            const outBuild = new Building_1.Building(scope, temp.name);
            return [outBuild, [new instructions_1.InstructionBase("getlink", temp, index)]];
        });
    }
}
exports.GetLink = GetLink;
//# sourceMappingURL=GetLink.js.map