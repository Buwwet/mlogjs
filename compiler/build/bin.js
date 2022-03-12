#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const helpers_1 = require("yargs/helpers");
const _1 = require(".");
const cli_highlight_1 = require("cli-highlight");
const yargs_1 = __importDefault(require("yargs"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = require("path");
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .command("$0 [path] [out]", "compiles your Javascript file to MLog", yargs => {
    return yargs
        .positional("path", {
        describe: "path of the file to compile",
        type: "string",
    })
        .positional("out", {
        describe: "path of the output file",
        type: "string",
    });
}, argv => {
    const path = argv.path;
    if (!path)
        return console.log("missing required path argument");
    if (!(0, fs_1.existsSync)(path))
        return console.log(`file at ${path} does not exist`);
    const out = argv.out ?? defaultOutPath(path);
    if (path == out)
        return console.log("The out path cannot be the same as the input path");
    const code = (0, fs_1.readFileSync)(path, "utf8");
    const [output, error, [node]] = (0, _1.compile)(code);
    if (error) {
        // @ts-ignore
        let start = error?.loc;
        let end = start;
        if (node) {
            start = node.loc.start;
            end = node.loc.end;
        }
        const lines = code.split("\n");
        console.log(chalk_1.default.cyanBright([(0, path_1.resolve)(path), start.line, start.column].join(":")));
        for (let i = Math.max(start.line - 3, 0); i < Math.min(end.line + 2, lines.length); i++) {
            const n = i + 1;
            const head = chalk_1.default.gray((n + " | ").padStart(6, " "));
            console.log(head + (0, cli_highlight_1.highlight)(lines[i], { language: "js" }));
            if (n === start.line) {
                console.log(chalk_1.default.red(" ".repeat(6 + start.column) + "^ " + error.message));
            }
        }
        return;
    }
    (0, fs_1.writeFileSync)(out, output);
    console.log(`Success: Compiled ${path}. Your compiled code is at ${out}.`);
})
    .help()
    .scriptName("mlogjs")
    .demandCommand()
    .parse();
function defaultOutPath(path) {
    const parsed = (0, path_1.parse)(path);
    return (0, path_1.join)(parsed.dir, `${parsed.name}.mlog`);
}
//# sourceMappingURL=bin.js.map