import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
mkdirSync(join(__dirname, "../build"));
const packageJson = JSON.parse(readFileSync(
  join(__dirname, "../package.json"),
  { encoding: "utf8" },
));
delete packageJson.devDependencies;
delete packageJson.scripts;
Object.assign(packageJson, { main: "index.js", private: false });
writeFileSync(
  join(__dirname, "../build/package.json"),
  JSON.stringify(packageJson, null, 2),
  { encoding: "utf8" },
);
copyFileSync(
  join(__dirname, "../src/index.js"),
  join(__dirname, "../build/index.js"),
);

copyFileSync(
  join(__dirname, "../src/index.d.ts"),
  join(__dirname, "../build/index.d.ts"),
);

copyFileSync(
  join(__dirname, "../README.md"),
  join(__dirname, "../build/README.md"),
);
