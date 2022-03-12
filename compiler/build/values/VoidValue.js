"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidValue = void 0;
const operators_1 = require("../operators");
class VoidValue {
    constructor(scope) {
        this.constant = false;
        this.macro = false;
        this.scope = scope;
    }
    eval(scope) {
        throw new Error(`${this} cannot eval.`);
    }
    call(scope, args) {
        throw new Error(`${this} cannot call.`);
    }
    get(scope, name) {
        throw new Error(`${this} cannot get.`);
    }
    toString() {
        return "void";
    }
}
exports.VoidValue = VoidValue;
for (const key of operators_1.operators) {
    VoidValue.prototype[key] = function () {
        console.log(this);
        throw new Error(`${this} cannot '${key}' operation.`);
    };
}
//# sourceMappingURL=VoidValue.js.map