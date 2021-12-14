import * as ts from "typescript";
import { readFileSync } from "fs";

function getCompilerOptions(path = process.cwd()): ts.ParsedCommandLine {
  const configFileName = ts.findConfigFile(path, ts.sys.fileExists);
  const configFile = ts.readConfigFile(configFileName, ts.sys.readFile);
  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, "./");
}

export function createProgram(tsconfigPath?: string) {
  const { fileNames, options } = getCompilerOptions(tsconfigPath);
  return ts.createProgram(fileNames, options);
}

function getAST(program: ts.Program) {
  const checker = program.getTypeChecker();
  for (const file of program.getRootFileNames()) {
    const node = program.getSourceFile(file);
    ts.forEachChild(node, child => {
      const type = checker.getTypeAtLocation(child);
      t
      if (type.isNumberLiteral()) {
          type.
      }
      console.log(child.kind === ts.SyntaxKind.InterfaceDeclaration);
    });
  }
}

getAST(createProgram());
