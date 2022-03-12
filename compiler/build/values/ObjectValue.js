"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectValue = void 0;
const operators_1 = require("../operators");
const LiteralValue_1 = require("./LiteralValue");
const VoidValue_1 = require("./VoidValue");
class ObjectValue extends VoidValue_1.VoidValue {
    constructor(scope, data = {}) {
        super(scope);
        this.constant = true;
        this.macro = true;
        this.data = data;
    }
    typeof(scope) {
        return [new LiteralValue_1.LiteralValue(scope, "object"), []];
    }
    get(scope, key) {
        // avoids naming collisions with keys like
        // constructor or toString
        if (this.data.hasOwnProperty(key.data)) {
            const member = this.data[key.data];
            return [member, []];
        }
        const { $get } = this.data;
        if (!$get)
            throw new Error("Cannot get undefined member.");
        return $get.call(scope, [key]);
    }
    eval(scope) {
        const { $eval } = this.data;
        if (!$eval)
            return [this, []];
        return $eval.call(scope, []);
    }
    call(scope, args) {
        const { $call } = this.data;
        if (!$call)
            return super.call(scope, args);
        return $call.call(scope, args);
    }
}
exports.ObjectValue = ObjectValue;
for (const op of operators_1.operators) {
    ObjectValue.prototype[op] = function (...args) {
        const $ = this.data[`$${op}`];
        if (!$)
            return VoidValue_1.VoidValue.prototype[op].apply(this, args);
        let [scope, ...fnArgs] = args;
        return $.call(scope, fnArgs);
    };
}
//# sourceMappingURL=ObjectValue.js.map