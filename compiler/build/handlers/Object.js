"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberExpression = exports.ArrayExpression = exports.ObjectExpression = void 0;
const values_1 = require("../values");
const ObjectExpression = (c, scope, node) => {
    const data = {};
    const inst = [];
    for (const prop of node.properties) {
        if (prop.computed)
            throw new Error("Cannot handle computed property.");
        const { key, value } = prop;
        let index;
        if (key.type === "Identifier")
            index = key.name;
        else if (key.type === "Literal")
            index = "" + key.value;
        else {
            throw new Error(`Unsupported object key type: ${key.type}`);
        }
        const [member, memberInst] = c.handleEval(scope, value);
        data[index] = member;
        inst.push(...memberInst);
    }
    return [new values_1.ObjectValue(scope, data), inst];
};
exports.ObjectExpression = ObjectExpression;
const ArrayExpression = (c, scope, node) => {
    const data = {};
    const inst = [];
    node.elements.forEach((element, i) => {
        if (!element)
            return;
        const [value, valueInst] = c.handleEval(scope, element);
        data[i] = value;
        inst.push(...valueInst);
    });
    return [new values_1.ObjectValue(scope, data), inst];
};
exports.ArrayExpression = ArrayExpression;
const MemberExpression = (c, scope, node) => {
    const [obj, objInst] = c.handleEval(scope, node.object);
    const [prop, propInst] = node.computed
        ? c.handleEval(scope, node.property)
        : [new values_1.LiteralValue(scope, node.property.name), []];
    const [got, gotInst] = obj.get(scope, prop);
    return [got, [...objInst, ...propInst, ...gotInst]];
};
exports.MemberExpression = MemberExpression;
//# sourceMappingURL=Object.js.map