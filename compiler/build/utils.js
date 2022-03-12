"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToDashCase = exports.nodeName = void 0;
function nodeName(node) {
    const { line, column } = node.loc.start;
    return line + ":" + column;
}
exports.nodeName = nodeName;
function camelToDashCase(name) {
    return name.replace(/[A-Z]/g, str => `-${str.toLowerCase()}`);
}
exports.camelToDashCase = camelToDashCase;
//# sourceMappingURL=utils.js.map