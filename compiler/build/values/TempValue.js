"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempValue = void 0;
const instructions_1 = require("../instructions");
const operators_1 = require("../operators");
const _1 = require("./");
const LiteralValue_1 = require("./LiteralValue");
class TempValue extends _1.StoreValue {
    constructor(scope, name) {
        super(scope, name ?? "t" + scope.ntemp + (scope.name ? ":" + scope.name : ""));
        this.canProxy = true;
        if (!name)
            scope.ntemp++;
    }
    eval(scope) {
        return super.eval(scope);
    }
    "="(scope, value) {
        if (this.proxied) {
            this.noProxy();
            return [this, [new instructions_1.SetInstruction(this, value)]];
        }
        if (value instanceof LiteralValue_1.LiteralValue && this.canProxy) {
            return this.proxy(value);
        }
        return super["="](scope, value);
    }
    proxy(value) {
        if (!this.canProxy) {
            console.log(this.proxied);
            throw new Error("Cannot proxy (canProxy = false).");
        }
        if (this.proxied)
            throw new Error("Cannot proxy multiple times.");
        this.proxied = value;
        this.canProxy = false;
        for (const key of [
            ...operators_1.operators,
            "eval",
            "get",
            "call",
            "toString",
            "proxy",
        ]) {
            if (key !== "=" && key in value)
                this[key] = (...args) => value[key].apply(value, args);
        }
        this.setInst = new instructions_1.SetInstruction(this, value);
        this.setInst.hidden = true;
        return [this, [this.setInst]];
    }
    noProxy() {
        this.setInst.hidden = false;
        for (const key of [
            ...operators_1.operators,
            "eval",
            "get",
            "call",
            "toString",
            "proxy",
        ]) {
            this[key] = TempValue.prototype[key];
        }
    }
}
exports.TempValue = TempValue;
//# sourceMappingURL=TempValue.js.map