# Mon Plan Français 🥐

A bilingual (French/English) interactive 90-day study planner built for intensive TEF/TCF Canada exam preparation, targeting NCLC 9 across all four skills (listening, reading, speaking, writing).

It's a single-page app — no build step, no framework — just HTML, CSS, and vanilla JavaScript, with [Supabase](https://supabase.com) (loaded from a CDN, no server code to run) providing email/password accounts and cross-device progress sync.

## Features

- **Accounts synced by email** — sign up / log in / forgot-password / splash screen, backed by Supabase Auth. Your plan, notes, quiz history, and TCF scores are tied to your account and follow you to any device you log into.
- **90-day calendar tracker** with a daily task checklist (immersion, vocab, grammar, listening, reading, speaking, writing, exam-block, error log), phase progression (Build the Basics → B2 Acceleration → C1 Push → Exam War Mode), streak tracking, and overall progress. Missed/partial/completed days get an emoji badge on the calendar.
- **Full FR/EN interface toggle** — every piece of static UI text and generated day-by-day content (grammar topics, vocab themes, speaking prompts) is localized, not machine-translated.
- **Flashcards & quizzes ("Test")** — 19 themed decks (~130 cards) with a 3D flip animation, pronunciation guides, English sentence translations, shuffle, sound effects, and an auto-generated multiple-choice quiz (bidirectional FR↔EN) with confetti on a good score and a saved history of every attempt (see the Results tab).
- **Voice reading** — 🔊 buttons on flashcards and quiz questions (and quiz answers, when tapped) use the browser's built-in Web Speech API to read the French or English text aloud, preferring a feminine voice for whichever language is being spoken when one is installed.
- **TCF Canada grading calculator** — enter a raw score for each of the four TCF competencies and get its CEFR level, NCLC/CLB level, and points, graded independently per skill (never averaged), plus an overall result showing the lowest/highest NCLC level reached and whether NCLC 7/8/9/10 was achieved in *all four* skills — with NCLC 9 (the key immigration threshold) called out specifically.
- **Light/dark theme aware**, responsive down to phone width, bottom tab navigation (Plan / Test / Results / TCF / Notebook).

## Files

```
index.html            page shell — loads styles.css, the Supabase SDK, supabase-config.js, and app.js
styles.css             all styling (design tokens, layout, components)
app.js                  all app logic — content data, auth, state, rendering, event handling
supabase-config.js       your Supabase project's URL + public anon key (see setup below)
supabase-schema.sql      SQL to run once in Supabase to create the per-user data table
```

`index.html` is a standard HTML5 document (doctype, `<head>` with charset/viewport meta, `<body>`). It started life as a body fragment for Claude Artifact hosting, which supplies that wrapper automatically — the standalone version below adds it explicitly so the page has a real `<meta name="viewport">` tag, which mobile browsers require to render the responsive layout at the correct scale instead of zooming out to a desktop-width view.

## Setting up accounts (Supabase)

Accounts and cross-device sync need a free [Supabase](https://supabase.com) project — a few minutes, no credit card:

1. Go to [supabase.com](https://supabase.com) → **Start your project** → sign in (GitHub or email) → **New project**. Pick any name/region and a database password (you won't need the password day-to-day).
2. Once the project finishes provisioning, open **SQL Editor** (left sidebar) → **New query**, paste in the contents of [supabase-schema.sql](supabase-schema.sql), and click **Run**. This creates the `plans` table that stores each user's progress, locked down so users can only ever read/write their own row.
3. Open **Project Settings → API**. Copy the **Project URL** and the **anon / public** key (not the `service_role` key — that one must never go in client-side code).
4. Paste those two values into [supabase-config.js](supabase-config.js), replacing the `YOUR-PROJECT-REF` and `YOUR-ANON-PUBLIC-KEY` placeholders.
5. (Optional but recommended) In **Authentication → URL Configuration**, set the **Site URL** to wherever you deploy the app (e.g. your Vercel URL) so password-reset emails link back to the right place.

That's it — no server to deploy. The signup/login/forgot-password screens and per-user data sync all work against that Supabase project directly from the browser. By default Supabase requires email confirmation on signup (a "check your email" screen handles that); you can turn confirmation off in **Authentication → Providers → Email** if you'd rather sign in immediately after signing up.

## Running locally

No install step needed. Complete the Supabase setup above first, then from this folder run any static file server, for example:

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

Progress (checked-off tasks, notes, quiz history, TCF scores) is saved to your Supabase project a moment after each change, keyed to your account, and reloaded automatically whenever you log in — on this device or any other. If `supabase-config.js` still has its placeholder values, the app shows a "missing configuration" screen instead of the login form, since there's nowhere to store accounts yet.

## License

Add a license of your choice (e.g. MIT) if you plan to make this repository public.
