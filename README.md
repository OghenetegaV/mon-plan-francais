# Mon Plan Français 🥐

A bilingual (French/English) interactive 90-day study planner built for intensive TEF/TCF Canada exam preparation, targeting NCLC 9 across all four skills (listening, reading, speaking, writing).

It's a single-page app — no build step, no framework, no backend — just HTML, CSS, and vanilla JavaScript.

## Features

- **90-day calendar tracker** with a daily task checklist (immersion, vocab, grammar, listening, reading, speaking, writing, exam-block, error log), phase progression (Build the Basics → B2 Acceleration → C1 Push → Exam War Mode), streak tracking, and overall progress.
- **Full FR/EN interface toggle** — every piece of static UI text and generated day-by-day content (grammar topics, vocab themes, speaking prompts) is localized, not machine-translated.
- **Flashcards & quizzes** — 19 themed decks (~130 cards) with a 3D flip animation, shuffle, and an auto-generated multiple-choice quiz (bidirectional FR↔EN) with a persisted best score per deck.
- **Voice reading** — 🔊 buttons on flashcards and quiz questions use the browser's built-in Web Speech API to read the French (or English) text aloud, preferring a feminine voice for whichever language is being spoken when one is installed.
- **TCF Canada grading calculator** — enter a raw score for each of the four TCF competencies and get its CEFR level, NCLC/CLB level, and points, graded independently per skill (never averaged), plus an overall result showing the lowest/highest NCLC level reached and whether NCLC 7/8/9/10 was achieved in *all four* skills — with NCLC 9 (the key immigration threshold) called out specifically.
- **Light/dark theme aware**, responsive down to phone width.

## Files

```
index.html    the page shell — loads styles.css and app.js
styles.css    all styling (design tokens, layout, components)
app.js        all app logic — content data, state, rendering, event handling
```

`index.html` is written as a body fragment (no `<!doctype>`/`<html>`/`<head>` wrapper) because it was originally built and hosted as a Claude Artifact, which supplies that wrapper automatically. Browsers still render it correctly when served directly like this, but if you ever want a fully spec-clean document (e.g. to avoid quirks mode), you can wrap it in a standard `<!doctype html><html><head>…</head><body>…</body></html>` shell yourself — nothing in `app.js` or `styles.css` depends on it either way.

## Running locally

No install step needed. From this folder, run any static file server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Deploying to Vercel

1. Push this folder to a GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel auto-detects it as a static site — no framework preset, no build command, and no environment variables are needed. Just click **Deploy**.

### Pushing to GitHub from VS Code / terminal

```bash
cd mon-plan-francais
git init
git add .
git commit -m "Initial commit: Mon Plan Français"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## A note on data persistence

In its original Claude Artifact hosting, this app saves your checked-off tasks, notes, quiz scores, and TCF scores by calling `window.claude.use('artifact')` — a capability only available inside that hosting environment. On Vercel (or any other static host), `window.claude` won't exist, so the app still works fully in-session (checkboxes, flashcards, quizzes, and the grading calculator all function normally), but nothing is saved between page reloads — there's no backend or browser storage wired up for a standalone deployment. If you want your progress to persist on Vercel, the cleanest options are adding `localStorage` persistence, or wiring `doPublish()` in `app.js` up to a small backend or database of your choice.

## License

Add a license of your choice (e.g. MIT) if you plan to make this repository public.
