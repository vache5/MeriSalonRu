#!/usr/bin/env node
/**
 * Builds the site and assembles `release/` — upload this folder to your host.
 * Usage: npm run deploy
 *        npm run deploy -- --zip
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const releaseDir = path.join(root, "release");
const zipFlag = process.argv.includes("--zip");

function log(msg) {
  console.log(`[deploy] ${msg}`);
}

function copyDir(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

log("Running production build…");
execSync("npm run build", {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, NODE_ENV: "production" },
});

const standaloneDir = path.join(root, ".next", "standalone");
if (!fs.existsSync(standaloneDir)) {
  console.error("[deploy] Missing .next/standalone — check output: 'standalone' in next.config.ts");
  process.exit(1);
}

log("Assembling release/ …");
fs.rmSync(releaseDir, { recursive: true, force: true });
fs.mkdirSync(releaseDir, { recursive: true });

copyDir(standaloneDir, releaseDir);
copyDir(path.join(root, ".next", "static"), path.join(releaseDir, ".next", "static"));
copyDir(path.join(root, "public"), path.join(releaseDir, "public"));

const deployNotes = `Mary Salon — production package
Generated: ${new Date().toISOString()}

UPLOAD: Upload everything inside this folder to your hosting application root.

PLESK (Node.js):
  - Node.js version: 20.x
  - Application mode: production
  - Application root: this folder (where server.js is)
  - Application startup file: server.js
  - Environment: NODE_ENV=production, PORT=<port Plesk assigns>

After upload, in Plesk open "NPM Install" only if you deploy the full repo.
For this release/ package, dependencies are already bundled — just restart the app.

DOMAIN: Point https://merisalon.ru to this Node app (reverse proxy to PORT).

Local test:
  cd release
  set NODE_ENV=production
  node server.js
  Open http://localhost:3000
`;

fs.writeFileSync(path.join(releaseDir, "DEPLOY.txt"), deployNotes, "utf8");
fs.copyFileSync(path.join(root, "env.example"), path.join(releaseDir, "env.example"));

const manifest = {
  name: "meri-salon",
  node: "20.x",
  startup: "server.js",
  generatedAt: new Date().toISOString(),
  files: ["server.js", "package.json", ".next/", "public/", "node_modules/"],
};
fs.writeFileSync(path.join(releaseDir, "manifest.json"), JSON.stringify(manifest, null, 2));

log(`Done. Release folder: ${releaseDir}`);

if (zipFlag) {
  const zipPath = path.join(root, "merisalon-release.zip");
  fs.rmSync(zipPath, { force: true });
  if (process.platform === "win32") {
    const ps = `Compress-Archive -Path "${releaseDir}\\*" -DestinationPath "${zipPath}" -Force`;
    execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: "inherit" });
  } else {
    execSync(`cd "${releaseDir}" && zip -r "${zipPath}" .`, { stdio: "inherit", shell: true });
  }
  log(`Zip archive: ${zipPath}`);
}
