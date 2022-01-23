import {
  ControlInstruction,
  DrawFlushInstruction,
  GetLinkInstruction,
  PrintFlushInstruction,
  RadarInstruction,
  SensorInstruction,
} from "./blocks";
import { EndInstruction, JumpInstruction } from "./flow";
import {
  DrawInstruction,
  PrintInstruction,
  ReadInstruction,
  WriteInstruction,
} from "./io";
import {
  UnitBindInstruction,
  UnitControlInstruction,
  UnitLocateInstruction,
  UnitRadarInstruction,
} from "./units";
import {
  LookupInstruction,
  OperationInstruction,
  SetInstruction,
  WaitInstruction,
} from "./variables";

export type TInstruction =
  | ControlInstruction
  | DrawFlushInstruction
  | GetLinkInstruction
  | PrintFlushInstruction
  | RadarInstruction
  | SensorInstruction
  | EndInstruction
  | JumpInstruction
  | DrawInstruction
  | PrintInstruction
  | ReadInstruction
  | WriteInstruction
  | UnitBindInstruction
  | UnitControlInstruction
  | UnitLocateInstruction
  | UnitRadarInstruction
  | LookupInstruction
  | OperationInstruction
  | SetInstruction
  | WaitInstruction;

export * from "./blocks";
export * from "./flow";
export * from "./instruction";
export * from "./io";
export * from "./units";
export * from "./variables";
