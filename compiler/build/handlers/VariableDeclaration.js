"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDeclarator = exports.VariableDeclaration = void 0;
const values_1 = require("../values");
const utils_1 = require("../utils");
const VariableDeclaration = (c, scope, node) => {
    return c.handleMany(scope, node.declarations, (scope, child) => (0, exports.VariableDeclarator)(c, scope, child, node.kind));
};
exports.VariableDeclaration = VariableDeclaration;
const VariableDeclarator = (c, scope, node, kind = "let") => {
    let valinst = node.init
        ? c.handleEval(scope, node.init)
        : [null, []];
    switch (node.id.type) {
        case "Identifier": {
            const { name } = node.id;
            const [init] = valinst;
            if (kind === "const" && !init)
                throw Error("Cannot create constant with void value.");
            if (kind === "const" && init?.constant) {
                scope.set(name, init);
                return valinst;
            }
            else {
                const value = scope.make(name, (0, utils_1.nodeName)(node));
                if (init) {
                    if (init.macro)
                        throw new Error("Macro value must be constant.");
                    valinst[1].push(...value["="](scope, init)[1]);
                }
                if (kind === "const")
                    value.constant = true;
                return valinst;
            }
        }
        case "ArrayPattern": {
            const { elements } = node.id;
            const [init] = valinst;
            if (!init)
                throw new Error("Cannot use array destructuring with constant with void value.");
            if (!init.macro)
                throw new Error("Cannot use array destructuring on non macro values");
            if (!(init instanceof values_1.ObjectValue)) {
                throw new Error("Array destructuring target must be an object value");
            }
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (!element)
                    continue;
                if (element.type !== "Identifier") {
                    throw new Error("Array destructuring expression can only have empty items or identifiers");
                }
                const val = init.data[i];
                scope.set(element.name, val);
            }
            return valinst;
        }
        default:
            throw new Error("");
    }
};
exports.VariableDeclarator = VariableDeclarator;
//# sourceMappingURL=VariableDeclaration.js.map