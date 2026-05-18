/**
 * CloudLinux / Plesk / LiteSpeed Node startup file.
 * Requires: Plesk "NPM Install" (creates node_modules symlink) + .next build on disk.
 */
"use strict";

const fs = require("fs");
const http = require("http");
const path = require("path");

const appDir = __dirname;
process.env.NODE_ENV = process.env.NODE_ENV || "production";

const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

function fail(message) {
  console.error("[merisalon] " + message);
  process.exit(1);
}

const nextPkg = path.join(appDir, "node_modules", "next", "package.json");
const buildId = path.join(appDir, ".next", "BUILD_ID");

if (!fs.existsSync(nextPkg)) {
  fail(
    "Dependencies missing. In Plesk click NPM Install (do not upload node_modules from your PC). " +
      "Expected: " +
      nextPkg,
  );
}

if (!fs.existsSync(buildId)) {
  fail(
    "Production build missing. On your PC run: npm run build — then upload the .next folder. " +
      "Expected: " +
      buildId,
  );
}

let next;
try {
  next = require("next");
} catch (err) {
  fail("Cannot load next package. Run NPM Install in Plesk. " + (err && err.message ? err.message : err));
}

const app = next({ dev: false, dir: appDir, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => {
        handle(req, res).catch((err) => {
          console.error("[merisalon] Request error:", err);
          res.statusCode = 500;
          res.end("Internal Server Error");
        });
      })
      .listen(port, hostname, () => {
        console.log("[merisalon] Ready at http://" + hostname + ":" + port);
      });
  })
  .catch((err) => {
    console.error("[merisalon] Failed to start:", err);
    process.exit(1);
  });
