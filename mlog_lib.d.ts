type MemoryCapacity = 64 | 512;
declare class Memory<
  T = number,
  S extends MemoryCapacity = 64,
  L extends number = number
> {
  /** The size of the memory cell/bank */
  readonly size: S;
  constructor(size?: S);

  /** Returns a raw view of the underying data
   *
   * @example
   *  // The order of the fields matters when
   * // the memory layout is built
   *  interface Point {
   *    x: number;
   *    y: number;
   *  }
   *  const cell = new Memory<Point>();
   *  cell[0].x = 10;
   *  cell[0].y = 50;
   *
   *  // get raw memory view
   *  const rawCell = cell.raw();
   *  print(rawCell[0]); // 10
   *  print(rawCell[1]); // 50
   */
  raw(): Memory<number, S>;
  [Symbol.iterator](): IterableIterator<T>;
  [index: number]: T;

  /**
   * The practical length of the memory view, for numbers and
   * booleans it has the same value as `size`. For custom types it is
   * the `size` of the cell divided by the total size required by the type.
   */
  readonly length: L;
}

declare function print(...items: unknown[]): void;

declare namespace draw {
  function clear(r: number, g: number, b: number): void;

  function color(r: number, g: number, b: number, a: number): void;

  function stroke(width: number): void;

  function line(x1: number, y1: number, x2: number, y2: number): void;

  function rect(x: number, y: number, width: number, height: number): void;

  function lineRect(x: number, y: number, width: number, height: number): void;

  function poly(
    x: number,
    y: number,
    sides: number,
    radius: number,
    rotation: number
  ): void;

  function linePoly(
    x: number,
    y: number,
    sides: number,
    radius: number,
    rotation: number
  ): void;

  function triangle(
    x: number,
    y: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ): void;

  function image(
    x: number,
    y: number,
    image: unknown,
    size: number,
    rotation: number
  ): void;
}
