#!/usr/bin/env node
/**
 * CloudLinux / Plesk package: source + .next + public, NO node_modules.
 * Upload contents of upload/ then run NPM Install in Plesk.
 *
 * Usage: npm run deploy:cloudlinux
 *        npm run deploy:cloudlinux:zip
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const uploadDir = path.join(root, "upload");
const zipFlag = process.argv.includes("--zip");

const COPY_DIRS = ["app", "components", "constants", "lib", "styles", "public", ".next"];
const COPY_FILES = [
  "server.js",
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "postcss.config.mjs",
  "tailwind.config.ts",
  "tsconfig.json",
  "env.example",
];

const SKIP_NAMES = new Set([
  "node_modules",
  "release",
  "upload",
  ".git",
  "img",
  "price",
  ".next/cache",
]);

function log(msg) {
  console.log(`[cloudlinux] ${msg}`);
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dest, {
    recursive: true,
    filter: (srcPath) => {
      const rel = path.relative(src, srcPath);
      if (!rel) return true;
      const parts = rel.split(path.sep);
      return !parts.some((p) => SKIP_NAMES.has(p));
    },
  });
}

log("Building production .next …");
execSync("npm run build", {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, NODE_ENV: "production" },
});

if (!fs.existsSync(path.join(root, ".next", "BUILD_ID"))) {
  console.error("[cloudlinux] Build failed — .next/BUILD_ID not found");
  process.exit(1);
}

log("Assembling upload/ (no node_modules) …");
fs.rmSync(uploadDir, { recursive: true, force: true });
fs.mkdirSync(uploadDir, { recursive: true });

for (const dir of COPY_DIRS) {
  copyDir(path.join(root, dir), path.join(uploadDir, dir));
}

for (const file of COPY_FILES) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(uploadDir, file));
  }
}

const notes = `Mary Salon — CloudLinux / Plesk upload package
Generated: ${new Date().toISOString()}

UPLOAD all files inside this folder to:
  /home/vachiksargsyan/MeriSalon/

DO NOT upload node_modules (CloudLinux creates a symlink via NPM Install).

Plesk Node.js:
  Node.js version: 20.x
  Application mode: Production
  Application root: MeriSalon (this folder)
  Application startup file: server.js

Steps after upload:
  1. Delete any real node_modules folder if you uploaded one by mistake
  2. Click NPM Install — wait until it finishes
  3. Restart the application

Requires free disk quota (~400 MB for npm install).
`;

fs.writeFileSync(path.join(uploadDir, "UPLOAD.txt"), notes, "utf8");

log(`Done: ${uploadDir}`);
log("Upload this folder to the server, then Plesk → NPM Install → Restart.");

if (zipFlag) {
  const zipPath = path.join(root, "merisalon-cloudlinux.zip");
  fs.rmSync(zipPath, { force: true });
  if (process.platform === "win32") {
    const ps = `Compress-Archive -Path "${uploadDir}\\*" -DestinationPath "${zipPath}" -Force`;
    execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: "inherit" });
  } else {
    execSync(`cd "${uploadDir}" && zip -r "${zipPath}" .`, { stdio: "inherit", shell: true });
  }
  log(`Zip: ${zipPath}`);
}
