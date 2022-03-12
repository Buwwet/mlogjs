"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initScope = void 0;
const macros_1 = require("./macros");
const Namespace_1 = require("./macros/Namespace");
const RawValue_1 = require("./macros/RawValue");
function initScope(scope) {
    // namespaces
    scope.hardSet("ControlKind", new macros_1.NamespaceMacro(scope));
    scope.hardSet("Vars", new macros_1.VarsNamespace(scope));
    scope.hardSet("Items", new macros_1.NamespaceMacro(scope, { changeCasing: true }));
    scope.hardSet("Liquids", new macros_1.NamespaceMacro(scope));
    scope.hardSet("Units", new macros_1.NamespaceMacro(scope));
    scope.hardSet("LAccess", new macros_1.NamespaceMacro(scope));
    scope.hardSet("UnitCommands", new Namespace_1.UCommandsNamespace(scope));
    scope.hardSet("Blocks", new macros_1.NamespaceMacro(scope, { changeCasing: true }));
    // helper methods
    scope.hardSet("getBuilding", new macros_1.BuildingBuilder(scope));
    scope.hardSet("getVar", new RawValue_1.RawValueMacro(scope));
    scope.hardSet("concat", new macros_1.Concat(scope));
    scope.hardSet("Math", new macros_1.MlogMath(scope));
    scope.hardSet("Memory", new macros_1.MemoryBuilder(scope));
    // commands
    scope.hardSet("draw", new macros_1.commands.Draw(scope));
    scope.hardSet("print", new macros_1.commands.Print(scope));
    scope.hardSet("printFlush", new macros_1.commands.PrintFlush(scope));
    scope.hardSet("drawFlush", new macros_1.commands.DrawFlush(scope));
    scope.hardSet("getLink", new macros_1.commands.GetLink(scope));
    scope.hardSet("control", new macros_1.commands.Control(scope));
    scope.hardSet("radar", new macros_1.commands.Radar(scope));
    scope.hardSet("sensor", new macros_1.commands.Sensor(scope));
    scope.hardSet("wait", new macros_1.commands.Wait(scope));
    scope.hardSet("lookup", new macros_1.commands.Lookup(scope));
    scope.hardSet("unitBind", new macros_1.commands.UnitBind(scope));
    scope.hardSet("unitControl", new macros_1.commands.UnitControl(scope));
    scope.hardSet("unitRadar", new macros_1.commands.UnitRadar(scope));
    scope.hardSet("unitLocate", new macros_1.commands.UnitLocate(scope));
}
exports.initScope = initScope;
//# sourceMappingURL=initScope.js.map