# ENC 1102 Outcome-Based ePortfolio (React, Vite layout)

Outcome-organized ePortfolio scaffold with placeholders for all six ENC 1102 outcomes. It is pre-populated with artifact slots (PDF embeds) and reflection prompts. Theme draws on Istanbul/Bosphorus tones.

## Quick start
1) Install dependencies (works best with Node 20/22 LTS):
```bash
npm install
npm run dev
```
2) Open the dev server URL Vite prints (usually http://localhost:5173).

> If you are on an experimental Node version (e.g., 23) and `esbuild` fails to install, switch to an LTS version (Node 20/22) and re-run `npm install`.

## Swap in your artifacts
- Place files in `public/artifacts/`, e.g. `public/artifacts/literate-activity-report.pdf`.
- Edit `src/App.jsx` and replace each `embedSrc` with your path (e.g., `/artifacts/research-log.pdf`).
- Replace the placeholder reflection hooks with your own 2–3 sentence reflections that mention what’s visible in the embed.

## Customize the look
- Colors/spacing live in `src/App.css` and `src/index.css`.
- Add your photos or hero image to `public/images/` and reference them in `src/App.jsx`.
- Navigation uses anchor links; add new sections by extending the `outcomes` array.

## Structure
- `Home` + `About` sections: introduce your argument, audience, and identity as an international CS student from Istanbul.
- `Checklist`: keeps Choice · Variety · Reflection visible as you update.
- `Outcome 1–6`: each section contains artifact cards (PDF/image embeds) with reflection prompts and a TODO note.
- `Contact`: placeholder for your email/LinkedIn/GitHub.

## Deploy
```bash
npm run build
```
The static build will be in `dist/`. You can host it with any static host (Netlify, Vercel static, GitHub Pages, etc.).
