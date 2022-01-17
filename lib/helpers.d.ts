/**
 * Allows using special processor variables such as `@this`, `@unit` and `@time`
 * @param name The name of the variable
 */

declare function getVar<T>(key: string): T;

declare function getBuilding<T extends BasicBuilding = AnyBuilding>(
  name: string
): T;
