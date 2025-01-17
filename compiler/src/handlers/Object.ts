import { Scope } from "../Scope";
import { es, IInstruction, THandler } from "../types";
import { IObjectValueData, LiteralValue, ObjectValue } from "../values";

export const ObjectExpression: THandler = (
  c,
  scope,
  node: es.ObjectExpression
) => {
  const data: IObjectValueData = {};
  const inst = [];
  for (const prop of node.properties as es.Property[]) {
    if (prop.computed) throw new Error("Cannot handle computed property.");
    const { key, value } = prop;
    let index: string;
    if (key.type === "Identifier") index = key.name;
    else if (key.type === "Literal") index = "" + key.value;
    else {
      throw new Error(`Unsupported object key type: ${key.type}`);
    }
    const [member, memberInst] = c.handleEval(scope, value);
    data[index] = member;
    inst.push(...memberInst);
  }
  return [new ObjectValue(scope, data), inst];
};

export const ArrayExpression: THandler = (
  c,
  scope,
  node: es.ArrayExpression
) => {
  const data: IObjectValueData = {};
  const inst: IInstruction[] = [];
  node.elements.forEach((element, i) => {
    if (!element) return;
    const [value, valueInst] = c.handleEval(scope, element);
    data[i] = value;
    inst.push(...valueInst);
  });
  return [new ObjectValue(scope, data), inst];
};

export const MemberExpression: THandler = (
  c,
  scope,
  node: es.MemberExpression
) => {
  const [obj, objInst] = c.handleEval(scope, node.object);

  const [prop, propInst] = node.computed
    ? c.handleEval(scope, node.property)
    : [new LiteralValue(scope, (node.property as es.Identifier).name), []];

  const [got, gotInst] = obj.get(scope, prop);
  return [got, [...objInst, ...propInst, ...gotInst]];
};
