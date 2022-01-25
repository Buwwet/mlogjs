import ts from "typescript";
import * as tsutils from "tsutils";

function getCompilerOptions(path = process.cwd()): ts.ParsedCommandLine {
  const configFileName = ts.findConfigFile(path, ts.sys.fileExists)!;
  const configFile = ts.readConfigFile(configFileName, ts.sys.readFile);
  return ts.parseJsonConfigFileContent(configFile.config, ts.sys, "./");
}

export function createProgram(tsconfigPath?: string) {
  const { fileNames, options } = getCompilerOptions(tsconfigPath);
  return ts.createProgram(fileNames, options);
}

function compile(program: ts.Program) {
  const checker = program.getTypeChecker();
  for (const file of program.getRootFileNames()) {
    const commands = [];
    const source = program.getSourceFile(file)!;

    const diagnostics = ts.getPreEmitDiagnostics(program, source);
    source.forEachChild(child => {
      console.log(child.getText(), ts.SyntaxKind[child.kind]);
      if (ts.isVariableStatement(child)) {
        for (const declaration of child.declarationList.declarations) {
          commands.push(`set ${declaration.name.getText()} `);
        }
        // console.log(child.declarationList.declarations[0].name.pos);
      } else if (
        ts.isExpressionStatement(child) &&
        ts.isBinaryExpression(child.expression) &&
        ts.isIdentifier(child.expression.left)
      ) {
        console.log(child.expression.left.pos);
      }
    });
  }
}

compile(createProgram());

let a = 2;

function getVariables() {}

function purgeUnused(source: ts.SourceFile) {
  const usageData = tsutils.collectVariableUsage(source);
  for (const [identifier, info] of usageData.entries()) {
  }
}
