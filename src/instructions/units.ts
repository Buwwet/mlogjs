import { IReadable, IWritable } from "../values/value";
import { IInstruction } from "./instruction";

export class UnitBindInstruction implements IInstruction<"ubind"> {
  readonly name = "ubind";

  constructor(public type: IReadable) {}

  toMlog(): string {
    return `${this.name} ${this.type.value}`;
  }
}
export type TUnitControlInstructionData =
  | "idle"
  | "stop"
  | "pathfind"
  | "payDrop"
  | "payEnter"
  | [mode: "move", x: IReadable, y: IReadable]
  | [mode: "approach", x: IReadable, y: IReadable, radius: IReadable]
  | [mode: "boost", enable: IReadable]
  | [mode: "target", x: IReadable, y: IReadable, shoot: IReadable]
  | [mode: "targetp", unit: IReadable, shoot: IReadable]
  | [mode: "itemDrop", to: IReadable, amount: IReadable]
  | [mode: "itemTake", from: IReadable, item: IReadable, amount: IReadable]
  | [mode: "itemTake", from: IReadable, item: IReadable, amount: IReadable]
  | [mode: "itemTake", from: IReadable, item: IReadable, amount: IReadable]
  | [mode: "payTake", takeUnits: IReadable]
  | [mode: "mine", x: IReadable, y: IReadable]
  | [mode: "flag", value: IReadable]
  | [
      mode: "build",
      x: IReadable,
      y: IReadable,
      block: IReadable,
      rotation: IReadable,
      config: IReadable
    ]
  | [
      mode: "getBlock",
      x: IReadable,
      y: IReadable,
      type: IReadable,
      building: IReadable
    ]
  | [
      mode: "within",
      x: IReadable,
      y: IReadable,
      radius: IReadable,
      result: IReadable
    ];

export class UnitControlInstruction implements IInstruction<"ucontrol"> {
  readonly name = "ucontrol";

  constructor(public data: TUnitControlInstructionData) {}

  toMlog(): string {
    if (typeof this.data === "string") {
      return `${this.name} ${this.data}`;
    }
    const [mode, ...params] = this.data;
    return `${this.name} ${mode} ${params.map(val => val.value).join(" ")}`;
  }
}

export type TRadarFilter =
  | "any"
  | "enemy"
  | "ally"
  | "player"
  | "attacker"
  | "flying"
  | "boss"
  | "ground";

export type TRadarFilterArray =
  | [TRadarFilter]
  | [TRadarFilter, TRadarFilter]
  | [TRadarFilter, TRadarFilter, TRadarFilter];

export type TRadarSort =
  | "distance"
  | "health"
  | "shield"
  | "armor"
  | "maxHealth";

export class UnitRadarInstruction implements IInstruction<"uradar"> {
  readonly name = "uradar";

  constructor(
    public filter: TRadarFilterArray,
    public order: IReadable,
    public sort: TRadarSort,
    public output: IWritable
  ) {}

  toMlog(): string {
    const filter = [
      this.filter[0],
      this.filter[1] || "any",
      this.filter[2] || "any",
    ];
    return `${this.name} ${filter.join(" ")} ${this.sort} 0 ${
      this.order.value
    } ${this.output}`;
  }
}

export type TUnitLocateBuildingGroup =
  | "core"
  | "storage"
  | "generator"
  | "turret"
  | "factory"
  | "repair"
  | "rally"
  | "battery"
  | "reactor";

export type TUnitLocateData =
  | [
      find: "ore",
      ore: IReadable,
      outX: IWritable,
      outY: IWritable,
      found: IWritable
    ]
  | [
      find: "building",
      group: TUnitLocateBuildingGroup,
      enemy: IReadable,
      outX: IWritable,
      outY: IWritable,
      found: IWritable,
      building: IWritable
    ]
  | [
      find: "spawn" | "damaged",
      outX: IWritable,
      outY: IWritable,
      found: IWritable,
      building: IWritable
    ];
export class UnitLocateInstruction implements IInstruction<"ulocate"> {
  readonly name = "ulocate";

  constructor(public data: TUnitLocateData) {}

  toMlog(): string {
    const [find] = this.data;
    switch (find) {
      case "ore": {
        const [, ore, outX, outY, found] = this.data;
        return `${this.name} storage true ${find} ${ore} ${outX} ${outY} ${found}`;
      }
      case "building": {
        const [, group, enemy, ...outs] = this.data;
        return `${this.name} ${find} ${group} ${enemy.value} @copper ${outs
          .map(({ identifier }) => identifier)
          .join(" ")}`;
      }
      case "spawn":
      case "damaged": {
        const [, ...outs] = this.data;
        return `${this.name} ${find} storage true @copper ${outs
          .map(({ identifier }) => identifier)
          .join(" ")}`;
      }
    }
  }
}
