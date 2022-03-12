"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = exports.UCommandsNamespace = exports.VarsNamespace = exports.NamespaceMacro = void 0;
const utils_1 = require("../utils");
const _1 = require(".");
const values_1 = require("../values");
const Building_1 = require("./Building");
const instructions_1 = require("../instructions");
const operators_1 = require("../operators");
class NamespaceMacro extends values_1.ObjectValue {
    constructor(scope, { changeCasing = false } = {}) {
        super(scope, {
            $get: new _1.MacroFunction(scope, prop => {
                if (!(prop instanceof values_1.LiteralValue) || typeof prop.data !== "string")
                    throw new Error("Cannot use dynamic properties on object macros");
                const symbolName = this.changeCasing
                    ? (0, utils_1.camelToDashCase)(prop.data)
                    : prop.data;
                return [new values_1.StoreValue(scope, `@${symbolName}`), []];
            }),
        });
        this.changeCasing = changeCasing;
    }
}
exports.NamespaceMacro = NamespaceMacro;
class VarsNamespace extends NamespaceMacro {
    constructor(scope) {
        super(scope);
        const $get = this.data.$get;
        this.data.$get = new _1.MacroFunction(scope, prop => {
            if (prop instanceof values_1.LiteralValue) {
                if (prop.data === "unit")
                    return [new Unit(scope, "@unit"), []];
                if (prop.data === "this")
                    return [new Building_1.Building(scope, "@this"), []];
            }
            return $get.call(scope, [prop]);
        });
    }
}
exports.VarsNamespace = VarsNamespace;
class UCommandsNamespace extends NamespaceMacro {
    constructor(scope) {
        super(scope);
        const $get = this.data.$get;
        this.data.$get = new _1.MacroFunction(scope, prop => {
            if (!(prop instanceof values_1.LiteralValue) || typeof prop.data !== "string")
                throw new Error("Cannot use dynamic properties on object macros");
            const symbolName = prop.data[0].toUpperCase() + prop.data.slice(1);
            return [new values_1.StoreValue(scope, `@command${symbolName}`), []];
        });
    }
}
exports.UCommandsNamespace = UCommandsNamespace;
// TODO: repeated logic between UnitMacro and Building
class Unit extends values_1.ObjectValue {
    constructor(scope, name) {
        super(scope, {
            $get: new _1.MacroFunction(scope, prop => {
                if (prop instanceof values_1.LiteralValue && typeof prop.data === "string") {
                    const name = Building_1.itemNames.includes(prop.data)
                        ? (0, utils_1.camelToDashCase)(prop.data)
                        : prop.data;
                    const temp = new values_1.TempValue(scope);
                    // special case, should return another unit or building
                    const result = prop.data === "controller" ? new Unit(scope, temp.name) : temp;
                    return [
                        result,
                        [new instructions_1.InstructionBase("sensor", result, this, `@${name}`)],
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
exports.Unit = Unit;
for (const key in operators_1.operatorMap) {
    const kind = operators_1.operatorMap[key];
    Unit.prototype[key] = function (scope, value) {
        const left = new values_1.StoreValue(scope, this.name);
        const [right, rightInst] = value.eval(scope);
        const temp = new values_1.TempValue(scope);
        return [
            temp,
            [...rightInst, new instructions_1.OperationInstruction(kind, temp, left, right)],
        ];
    };
}
//# sourceMappingURL=Namespace.js.map