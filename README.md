# Heartbeat AI & BI Center

Internal portal for the Heartbeat Team — one place for AI assistants, BI dashboards,
automation studios, and process models.

## Files

```
index.html      → page structure
style.css        → all styling
script.js        → tools data + render logic
images/          → you create this folder and upload the PNGs below
```

**Upload `index.html`, `style.css`, and `script.js` directly into the repo root** —
don't put them in subfolders. GitHub's "Add file → Upload files" web UI can silently
flatten subfolders, which breaks the `<link>`/`<script>` paths and makes the page
load with no styling at all (plain black text, broken layout). Only `images/` should
be a folder.

## Image folder

** Create an `images/` folder in the repo root (same level as `index.html`) and upload
these exact filenames — the code already points to them:
Upload photos using GitHub Web UI
Open your repository.
Click Add file → Create new file.
In the filename box, type:
images/.gitkeep
Commit the change. This creates an images folder.
Open the images folder.
Click Add file → Upload files.
Drag and drop your photos (.png, .jpg, etc.).
Click Commit changes.

**Footer — "Powered by AI & BI" logos**
- `ChatGPT Logo.png`
- `Claude Logo full.png`
- `copilot logo full.png`
- `Google Gemini logo full.png`
- `Python_logo_PNG3.png`
- `PowerBI logo full 2.png`

**Tool card logos**
- `PowerBI logo.png` → Project Heartbeat Dashboard
- `OPS Flow Studio Logo.png` → OPS Flow Studio
- `Heartbeat iNote Logo R.png` → Heartbeat iNote
- `iMeet Logo.png` → Heartbeat iMeet

The **Core Express Business Process Model** card has no logo file yet, so it falls
back to an icon automatically. Add a `logo: "images/your-file.png"` line to its
entry in `js/script.js` once you have one.

## Adding or editing a tool

Open `script.js` and edit the `TOOLS` array at the top — one object per card:

```js
{
  title: "Tool Name",
  description: "Short description shown on the card.",
  category: "BI Dashboard",   // shown as the badge
  logo: "images/file.png",    // OR: icon: "fa-solid fa-chart-line"
  url: "https://your-tool-url.com"
}
```

Set each `url` to the real link for that tool — they're currently placeholders (`#`).

## Deploying with GitHub Pages

1. Push all files (`index.html`, `style.css`, `script.js`, `images/`) to a repo.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.
