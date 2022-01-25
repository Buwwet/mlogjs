import { TInstruction } from "../instructions";

export interface IConstruct {
  expand(): TInstruction[];
}
export type TConstructChildren = (IConstruct | TInstruction)[];
