declare enum ControlKind {
  ctrlPlayer,
  ctrlProcessor,
  ctrlFormation,
}

declare const Vars: {
  readonly this: BasicBuilding;
  readonly thisx: number;
  readonly thisy: number;
  readonly mapw: number;
  readonly maph: number;
  readonly links: number;
  readonly ipt: number;
  readonly unit: AnyUnit;
};

declare namespace Items {
  const copper: unique symbol;
  const lead: unique symbol;
  const metaglass: unique symbol;
  const graphite: unique symbol;
  const sand: unique symbol;
  const coal: unique symbol;
  const titanium: unique symbol;
  const thorium: unique symbol;
  const scrap: unique symbol;
  const silicon: unique symbol;
  const plastanium: unique symbol;
  const phaseFabric: unique symbol;
  const surgeAlloy: unique symbol;
  const sporePod: unique symbol;
  const blastCompound: unique symbol;
  const pyratite: unique symbol;
}

type Item = typeof Items[keyof typeof Items];

declare namespace Liquids {
  const water: unique symbol;
  const slag: unique symbol;
  const oil: unique symbol;
  const cryofluid: unique symbol;
}

type Liquid = typeof Liquids[keyof typeof Liquids];

declare namespace Units {
  const dagger: unique symbol;
  const mace: unique symbol;
  const fortress: unique symbol;
  const scepter: unique symbol;
  const reign: unique symbol;
  const nova: unique symbol;
  const pulsar: unique symbol;
  const quasar: unique symbol;
  const vela: unique symbol;
  const corvus: unique symbol;
  const crawler: unique symbol;
  const atrax: unique symbol;
  const spiroct: unique symbol;
  const arkyid: unique symbol;
  const toxopid: unique symbol;
  const flare: unique symbol;
  const horizon: unique symbol;
  const zenith: unique symbol;
  const antumbra: unique symbol;
  const eclipse: unique symbol;
  const mono: unique symbol;
  const poly: unique symbol;
  const mega: unique symbol;
  const quad: unique symbol;
  const oct: unique symbol;
  const risso: unique symbol;
  const minke: unique symbol;
  const bryde: unique symbol;
  const sei: unique symbol;
  const omura: unique symbol;
  const retusa: unique symbol;
  const oxynoe: unique symbol;
  const cyerce: unique symbol;
  const aegires: unique symbol;
  const navanax: unique symbol;
  const alpha: unique symbol;
  const beta: unique symbol;
  const gamma: unique symbol;
}

type Unit = typeof Units[keyof typeof Units];

declare namespace LAccess {
  const totalItems: unique symbol;
  const firstItem: unique symbol;
  const totalLiquids: unique symbol;
  const totalPower: unique symbol;
  const itemCapacity: unique symbol;
  const liquidCapacity: unique symbol;
  const powerCapacity: unique symbol;
  const powerNetStored: unique symbol;
  const powerNetCapacity: unique symbol;
  const powerNetIn: unique symbol;
  const powerNetOut: unique symbol;
  const ammo: unique symbol;
  const ammoCapacity: unique symbol;
  const health: unique symbol;
  const maxHealth: unique symbol;
  const heat: unique symbol;
  const efficiency: unique symbol;
  const progress: unique symbol;
  const timescale: unique symbol;
  const rotation: unique symbol;
  const x: unique symbol;
  const y: unique symbol;
  const shootX: unique symbol;
  const shootY: unique symbol;
  const size: unique symbol;
  const dead: unique symbol;
  const range: unique symbol;
  const shooting: unique symbol;
  const boosting: unique symbol;
  const mineX: unique symbol;
  const mineY: unique symbol;
  const mining: unique symbol;
  const team: unique symbol;
  const type: unique symbol;
  const flag: unique symbol;
  const controlled: unique symbol;
  const controller: unique symbol;
  const commanded: unique symbol;
  const name: unique symbol;
  const payloadCount: unique symbol;
  const payloadType: unique symbol;
  const enabled: unique symbol;
  const shoot: unique symbol;
  const shootp: unique symbol;
  const config: unique symbol;
  const color: unique symbol;
}

declare namespace UnitCommands {
  const attack: unique symbol;
  const rally: unique symbol;
  const idle: unique symbol;
}

type UnitCommand = typeof UnitCommands[keyof typeof UnitCommands];

/**
 * Allows using special processor variables such as `@this`, `@unit` and `@time`
 * @param name The name of the variable
 */

declare function getVar<T>(key: string): T;
