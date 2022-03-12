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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./InstructionBase"), exports);
__exportStar(require("./OperationInstruction"), exports);
__exportStar(require("./SetInstruction"), exports);
__exportStar(require("./EndInstruction"), exports);
__exportStar(require("./AddressResolver"), exports);
__exportStar(require("./JumpInstruction"), exports);
__exportStar(require("./SetCounterInstruction"), exports);
__exportStar(require("./ZeroSpaceInstruction"), exports);
__exportStar(require("./ControlInstructions"), exports);
//# sourceMappingURL=index.js.map