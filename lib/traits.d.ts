/// <reference path="./globals.d.ts" />

type LiquidHolder = {
  readonly [L in keyof typeof Liquids | Liquid]: number;
} & {
  readonly totalLiquids: number;
  readonly liquidCapacity: number;
};

type ItemHolder = {
  readonly [I in keyof typeof Items | Item]: number;
} & {
  readonly totalItems: number;
  readonly firstItem: Item | null;
  readonly itemCapacity: number;
};

interface PowerHolder {
  readonly totalPower: number;
  readonly powerCapacity: number;
  readonly powerNetStored: number;
  readonly powerNetCapacity: number;
  readonly powerNetIn: number;
  readonly powerNetOut: number;
}

interface Shooting {
  readonly shootX: number;
  readonly shootY: number;
  readonly ammo: number;
  readonly ammoCapacity: number;
}

interface WithHealth {
  readonly health: number;
  readonly maxHealth: number;
  readonly dead: boolean;
}

interface Heatable {
  readonly heat: number;
}

interface WithEffiency {
  readonly efficiency: number;
}

interface WithProgress {
  readonly progress: number;
}

interface WithTimescale {
  readonly timescale: number;
}

interface Rotatable {
  readonly rotation: number;
}

interface Spaced {
  readonly x: number;
  readonly y: number;
  readonly size: number;
}

interface Ranged {
  readonly range: number;
}

interface Boosted {
  readonly boosting: number;
}

interface Mining {
  readonly mineX: number;
  readonly mineY: number;
  readonly mining: number;
}

interface Typed<T extends symbol = symbol> {
  readonly type: T;
}
interface Flagged {
  readonly flag: number;
}

interface Controllable {
  readonly controlled: 0 | ControlKind;
  readonly controller: BasicUnit | BasicBuilding;
}

interface Nameable {
  readonly name: string | null;
}

interface PayloadHolder {
  readonly payloadCount: number;
  readonly payloadType: symbol | null;
}
interface WithEnable {
  enabled: boolean;
}
interface WithConfig {
  readonly config: symbol | null;
}
