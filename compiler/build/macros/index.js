"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarsNamespace = exports.NamespaceMacro = exports.BuildingBuilder = exports.commands = void 0;
__exportStar(require("./Function"), exports);
__exportStar(require("./Math"), exports);
__exportStar(require("./Other"), exports);
exports.commands = __importStar(require("./commands"));
__exportStar(require("./Memory"), exports);
var Building_1 = require("./Building");
Object.defineProperty(exports, "BuildingBuilder", { enumerable: true, get: function () { return Building_1.BuildingBuilder; } });
var Namespace_1 = require("./Namespace");
Object.defineProperty(exports, "NamespaceMacro", { enumerable: true, get: function () { return Namespace_1.NamespaceMacro; } });
Object.defineProperty(exports, "VarsNamespace", { enumerable: true, get: function () { return Namespace_1.VarsNamespace; } });
//# sourceMappingURL=index.js.map