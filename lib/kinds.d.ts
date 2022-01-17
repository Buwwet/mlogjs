/// <reference path="./traits.d.ts" />

interface BasicUnit
  extends Shooting,
    WithHealth,
    Rotatable,
    Spaced,
    Ranged,
    Typed<Unit>,
    Flagged,
    Controllable,
    Nameable {}

interface AnyUnit extends BasicUnit, Boosted {}

interface BasicBuilding
  extends LiquidHolder,
    ItemHolder,
    PowerHolder,
    WithHealth,
    WithEffiency,
    WithTimescale,
    Rotatable,
    Spaced,
    Ranged,
    Typed<Block>,
    WithEnable,
    WithConfig {}

interface BasicTurret extends BasicBuilding, Shooting, WithProgress {}

// just to make this future proof
interface AnyTurret extends BasicTurret {}

interface AnyBuilding extends AnyTurret, Heatable {}
