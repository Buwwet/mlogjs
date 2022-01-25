import ts from "typescript";

export class Scope {
  public names: Map<string, ts.Node> = new Map();
  constructor(block: ts.Block, public parent?: Scope) {
    for (const child of block.getChildren()) {
      if (!ts.isVariableStatement(child)) continue;
      for (const declaration of child.declarationList.declarations) {
        this.names.set(declaration.name.getText(), declaration);
      }
    }
  }

  set(name: string, node: ts.Node, force = false) {
    if (!force && this.get(name)) {
      throw new Error(`name '${name}' is already declared!`);
    }
    return this.names.set(name, node);
  }

  get(name: string): ts.Node {
    return this.names.get(name) ?? this.parent?.get(name);
  }
}
/**
 * ts compiler and checker => eslint validation => mlog compiler
 *
 */

let myGlobal: null | number = null; // a

function a(b: number) {
  if (typeof myGlobal /* b */ === "number") {
    myGlobal = 8; // c
  }
}
