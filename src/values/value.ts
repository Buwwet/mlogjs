export type TLiteral = string | number;
export interface IReadable {
  value: TLiteral;
}
export interface IWritable {
  identifier: string;
}

export interface IMemory extends IWritable {}
