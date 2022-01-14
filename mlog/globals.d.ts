declare namespace Constants {
  const ctrlPlayer: number;
  const ctrlProcessor: number;
  const ctrlFormation: number;
}

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

type Item =
  | typeof Items.lead
  | typeof Items.metaglass
  | typeof Items.graphite
  | typeof Items.sand
  | typeof Items.coal
  | typeof Items.titanium
  | typeof Items.thorium
  | typeof Items.scrap
  | typeof Items.silicon
  | typeof Items.plastanium
  | typeof Items.phaseFabric
  | typeof Items.surgeAlloy
  | typeof Items.sporePod
  | typeof Items.blastCompound
  | typeof Items.pyratite;

declare namespace Liquids {
  const water: unique symbol;
  const slag: unique symbol;
  const oil: unique symbol;
  const cryofluid: unique symbol;
}

type Liquid =
  | typeof Liquids.water
  | typeof Liquids.slag
  | typeof Liquids.oil
  | typeof Liquids.cryofluid;

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

type UnitCommand =
  | typeof UnitCommands.attack
  | typeof UnitCommands.rally
  | typeof UnitCommands.idle;

/**
 * Allows using special processor variables such as `@this`, `@unit` and `@time`
 * @param name The name of the variable
 */

declare function getVar<T>(key: string): T;
