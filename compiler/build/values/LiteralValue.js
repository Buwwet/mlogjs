"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralValue = void 0;
const _1 = require(".");
const literalMethods = {
    length: function (scope) {
        if (typeof this.data !== "string")
            throw new Error("Length method only works on string literal values.");
        return new LiteralValue(scope, this.data.length);
    },
};
class LiteralValue extends _1.BaseValue {
    constructor(scope, data) {
        super(scope);
        this.constant = true;
        this.data = data;
    }
    eval(scope) {
        return [this, []];
    }
    toString() {
        return JSON.stringify(this.data);
    }
    get(scope, name) {
        if (!(name instanceof LiteralValue && typeof name.data === "string"))
            return super.get(scope, name);
        const method = literalMethods[name.data];
        if (!method)
            throw new Error(`Method ${name.data} does not exist on literal values.`);
        return [method.apply(this, [scope]), []];
    }
    get num() {
        if (this.data === null)
            return 0;
        if (typeof this.data === "string")
            return 1;
        return this.data;
    }
    typeof(scope) {
        return [new LiteralValue(scope, "literal"), []];
    }
}
exports.LiteralValue = LiteralValue;
const operatorMap = {
    "==": (a, b) => +(a == b),
    "===": (a, b) => +(a === b),
    "!=": (a, b) => +(a != b),
    "!==": (a, b) => +(a !== b),
    "<": (a, b) => +(a < b),
    ">": (a, b) => +(a > b),
    "<=": (a, b) => +(a <= b),
    ">=": (a, b) => +(a >= b),
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b,
    "**": (a, b) => a ** b,
    "|": (a, b) => a | b,
    "&": (a, b) => a & b,
    "^": (a, b) => a ^ b,
    ">>": (a, b) => a >> b,
    ">>>": (a, b) => a >> b,
    "<<": (a, b) => a << b,
    "&&": (a, b) => +(a && b),
    "||": (a, b) => +(a || b),
};
for (const key in operatorMap) {
    const fn = operatorMap[key];
    LiteralValue.prototype[key] = function (scope, value) {
        if (!(value instanceof LiteralValue)) {
            return _1.BaseValue.prototype[key].apply(this, [scope, value]);
        }
        return [new LiteralValue(scope, fn(this.num, value.num)), []];
    };
}
const unaryOperatorMap = {
    "!": v => +!v,
    "~": v => ~v,
    "u-": v => -v,
};
for (const key in unaryOperatorMap) {
    LiteralValue.prototype[key] = function (scope) {
        const fn = unaryOperatorMap[key];
        return [new LiteralValue(scope, fn(this.num)), []];
    };
}
//# sourceMappingURL=LiteralValue.js.map