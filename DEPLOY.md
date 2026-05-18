# Deploy Mary Salon (merisalon.ru)

## CloudLinux / Plesk (recommended for your host)

CloudLinux **must** create `node_modules` as a symlink. Do **not** upload `node_modules` or the `release/` standalone bundle.

### 1. Build upload package on your PC

```bash
npm install
npm run deploy:cloudlinux:zip
```

Creates **`upload/`** and **`merisalon-cloudlinux.zip`** (no `node_modules`, includes `.next` build).

### 2. Upload to server

Upload **all contents** of `upload/` into:

`/home/vachiksargsyan/MeriSalon/`

Delete on the server if present:

- `release/`
- `merisalon-release.zip`
- any uploaded **`node_modules`** folder (not a symlink)

### 3. Plesk Node.js settings

| Setting | Value |
|--------|--------|
| Node.js version | **20.x** |
| Application mode | **Production** |
| Application root | `MeriSalon` |
| Application startup file | **`server.js`** |

### 4. Install dependencies on the server

1. Free disk space if quota was exceeded  
2. **NPM Install** (once, wait until finished)  
3. **Restart** app  

### 5. Verify

- `node_modules` is a **symlink** (not a folder you uploaded)  
- `.next/BUILD_ID` exists  
- Site opens at https://merisalon.ru  

### Troubleshooting

| Error | Fix |
|-------|-----|
| `Cannot find module 'next'` | Run **NPM Install**; do not upload `node_modules` |
| `Cannot find .../next/dist/bin/next` | Use the new `server.js` from this repo (do not point startup at `next` bin) |
| `Could not find a production build` | Upload `.next` from `npm run deploy:cloudlinux` |
| Disk quota exceeded | Delete `release/`, old zips, duplicates; ask host to increase quota |

---

## VPS / dedicated (standalone bundle)

For hosts that allow a real `node_modules` folder in the app root:

```bash
npm run deploy:zip
```

Upload contents of **`release/`** — no NPM Install needed.

---

## Local test

```bash
npm install
npm run build
node server.js
```

Open http://localhost:3000
