# Prompts: MZAINULABDIN.xyz portfolio build

How to use:
1. Put `prd.md`, `design.md`, `data.md`, `CHANGELOG.md` and this file in the project root folder.
2. Paste **one prompt at a time** into your coding agent (Antigravity, Claude Code, etc.).
3. After each prompt, open the site, check it in both themes and on a phone-sized window, then move to the next prompt.
4. If the result is wrong, use a prompt from section C instead of rewriting everything.

Do not skip Prompt 0. It makes the agent read the rules before it writes any code.

---

## A. Kickoff

### Prompt 0: read and confirm (no code)

```
I am rebuilding my developer portfolio from scratch. The old site is discarded and none of its code or design is reused.

Read these files in the project root, in this order: prd.md, design.md, data.md, CHANGELOG.md.

Do not write any code yet. Reply with:
1. A summary of the project in 5 lines.
2. The stack and the 10 phases as you understand them.
3. The rules from section 0 of prd.md in your own words.
4. Anything in the files that is unclear or contradicts itself.

Important: these md files are the source of truth. After every change you make, add an entry at the top of CHANGELOG.md in the format given there. Never invent content. If something is missing from data.md, leave a visible TODO.
```

---

## B. Build prompts (phases 1 to 10)

### Prompt 1: setup, tokens, theme

```
Do phase 1 of prd.md only. Do not start phase 2.

- Create the Astro project in this folder with TypeScript in strict mode.
- Add Tailwind CSS using the official Astro integration for the installed Astro version.
- Add @astrojs/sitemap.
- Self-host Manrope (for example with Fontsource), weights 400, 500, 600 and 700 only, font-display swap.
- Put all color, glass, type, spacing and radius tokens from design.md into src/styles/global.css as CSS variables for light and for [data-theme="dark"]. Add the .glass class exactly as written in design.md section 3.
- Add the inline script in <head> that sets data-theme before first paint from localStorage, falling back to prefers-color-scheme, so there is no flash.
- Add base typography styles from design.md section 4.

Do not add any UI framework or extra dependency. Make sure `npm run build` passes.
When done: tick phase 1 in prd.md, add an entry to CHANGELOG.md, and give me a 5-line summary.
```

### Prompt 2: layout shell, navbar, footer

```
Do phase 2 of prd.md only.

- Create src/layouts/BaseLayout.astro with props for title, description, canonical URL and OG image. Include lang="en", viewport, canonical, Open Graph and Twitter tags, and a skip-to-content link.
- Build the Navbar exactly as described in design.md section 7: floating glass pill, name on the left, section links in the middle, theme toggle on the right. Active link follows the section in view. Under 640px it collapses to a menu button that opens a glass sheet.
- Build the theme toggle (40x40 glass circle, inline SVG sun and moon, aria-label, aria-pressed). It saves the choice to localStorage and updates the theme-color meta tag.
- Build the Footer.
- Use a placeholder main content area for now.

Follow design.md section 8 (do not use list). Keep client JavaScript small and vanilla.
When done: tick phase 2, update CHANGELOG.md, give me a short summary.
```

### Prompt 3: home section

```
Do phase 3 of prd.md only.

Build the #home section using the exact text in data.md section 3 and the layout in design.md section 6. Left-aligned. The h1 is the full name. Two buttons: primary (inverted neutral) "View my work" linking to #work, and secondary (glass) "Contact me" linking to #contact. Use the type scale from design.md.

Do not add images, gradients, badges, stats, or decorative elements. Keep it quiet.
When done: tick phase 3, update CHANGELOG.md, short summary.
```

### Prompt 4: work section and project pages

```
Do phase 4 of prd.md only.

- Put the project data from data.md section 5 into a typed file at src/data/projects.ts. Use only what is written in data.md. Where data.md says TODO, keep it as a TODO value and show a visible placeholder in the UI. Never invent stack tags, features, numbers or screenshots.
- Build the #work section: the 4 featured projects as full-width rows (screenshot on the left, text on the right, stacked under 1024px), then the "Other projects" plain list. No cards, no boxes, no hover lift. Follow design.md sections 6 and 7.
- Missing screenshot: a plain bordered placeholder box with the project name. No generated mockups.
- HBS Admin Portal shows the label "Private repository" instead of a GitHub link. ZAPR shows "Coming soon" instead of a live link.
- Build the detail pages at /projects/[slug] using getStaticPaths for the 4 featured projects, with the layout from prd.md section 5.
- Each page gets its own title and description from data.md section 8.

When done: tick phase 4, update CHANGELOG.md, list every TODO that is still visible on the site.
```

### Prompt 5: about, skills, experience, contact

```
Do phase 5 of prd.md only.

Build #about, #skills, #experience and #contact using the text in data.md sections 2, 4, 6 and 7.

- About: the three paragraphs as written, in a text column of max 680px.
- Skills: grouped tags as in design.md section 7. No bars, no percentages, no icons.
- Experience: a simple vertical timeline, newest first. Do NOT show the Arabic teacher entry (it is hidden by default, see prd.md section 13). Show SMIT without dates until the owner confirms them.
- Contact: the email as a primary button using mailto:, plus LinkedIn and GitHub links. Do not show a phone number. No contact form.

When done: tick phase 5, update CHANGELOG.md, short summary.
```

### Prompt 6: scroll reveal and motion

```
Do phase 6 of prd.md only.

Implement exactly the motion in design.md section 9 and nothing more:
- smooth scroll with scroll-padding-top 96px
- one reveal (opacity 0 to 1, move up 12px to 0, 500ms ease-out, once) with IntersectionObserver, applied only to project rows, About text and the Experience timeline
- 150ms color or opacity transitions on links and buttons
- 200ms theme-switch transition, disabled on the first load

Respect prefers-reduced-motion: turn off the reveal and smooth scroll. Make sure content is visible if JavaScript fails (the hidden state must only be applied by JavaScript).
No parallax, cursor effects, typing effects or marquee.
When done: tick phase 6, update CHANGELOG.md, short summary.
```

### Prompt 7: responsive pass

```
Do phase 7 of prd.md only.

Check and fix the whole site at 360, 768, 1024 and 1440 px, in both themes. Requirements from design.md section 10:
- no horizontal scroll at any width
- navbar and menu sheet work on phones and respect env(safe-area-inset-top)
- touch targets at least 44x44 px
- project rows stack correctly under 1024px
- text lines stay under about 65 characters

Open the site in a browser tool if you have one and look at it. If you cannot, say so and review the CSS instead. List every issue you found and fixed.
When done: tick phase 7, update CHANGELOG.md.
```

### Prompt 8: SEO and performance

```
Do phase 8 of prd.md only.

- Verify every page has one h1, ordered headings, landmarks, unique title and description (values in data.md section 8), canonical and Open Graph tags.
- Add robots.txt and confirm sitemap.xml is generated.
- Add the JSON-LD Person schema on the home page using data.md section 8.
- Add an OG image at 1200x630 with the name and role line on a plain background (no gradient).
- Make sure all images use astro:assets with width and height, lazy loading below the fold, and descriptive alt text.
- Preload the main Manrope file. Remove anything render-blocking.
- Build for production and report the total client JavaScript size. Run Lighthouse if you can, and report the mobile scores. Fix anything below the targets in prd.md section 7.

When done: tick phase 8, update CHANGELOG.md with the scores.
```

### Prompt 9: accessibility and both-theme test

```
Do phase 9 of prd.md only.

- Check text contrast for every text and background pair in both themes against 4.5:1. If a token fails, adjust it in design.md and in the CSS, and log the change.
- Make sure every interactive element has a visible focus ring (design.md section 7) and can be used with the keyboard only, including the mobile menu and theme toggle.
- Confirm the skip link works, the theme toggle has an accessible name and state, and every image has alt text.
- Confirm the glass fallbacks for prefers-reduced-transparency, prefers-contrast and missing backdrop-filter support.

Report every issue and fix.
When done: tick phase 9, update CHANGELOG.md.
```

### Prompt 10: deployment

```
Do phase 10 of prd.md only.

- Make sure `npm run build` passes with no warnings I should care about.
- Set the site URL in the Astro config to https://mzainulabdin.xyz.
- Prepare what is needed for Vercel (config only if it is actually required).
- Write the deploy steps for me in plain English in CHANGELOG.md under "Needs owner": pushing to GitHub, importing the repo in Vercel, adding the domain mzainulabdin.xyz, and redirecting the old mzainulabdin.vercel.app to the new domain.
- Do a last check against the "Definition of done" in prd.md section 14 and list anything that is not met.

When done: tick phase 10 and update CHANGELOG.md.
```

---

## C. Review and fix prompts (use any time)

### Review: does it look AI-made?

```
Review the whole site against design.md section 8 (do not use list) and prd.md section 10 (copy rules).

List every violation you find with the file and line. Look especially for: gradients, glow, glass on content, identical card grids, ALL CAPS labels, eyebrow text above headings, numbered markers, arrow glyphs on links, emojis, banned words, invented numbers, and any text that is not in data.md.
Then fix them. Do not change anything that is not a violation. Log each fix in CHANGELOG.md.
```

### Review: docs match the code

```
Compare the code with prd.md, design.md and data.md. List every place where they disagree (a token value, a text, a link, a route, a phase status). For each one, tell me which side is right, fix the wrong side, and log it in CHANGELOG.md. Do not change the design or content while doing this.
```

### Fix a specific problem

```
Problem: [describe what looks or works wrong, and on which page, theme and screen width].
Expected: [what it should look like or do].

Fix only this. Do not refactor or restyle anything else. If the fix needs a change to a decision in the md files, tell me before you do it. Log the change in CHANGELOG.md.
```

### Update content

```
Update the content in data.md first, then update the site to match.

Change: [what to change, for example "add the HBS Admin Portal screenshot at public/images/hbs.png" or "show the Arabic teacher entry in Experience"].

Do not touch anything else. Log it in CHANGELOG.md.
```

### Add a new project

```
Add a new project. First add it to data.md section 5 in the same format as the others, then add it to src/data/projects.ts and the site.

Name: [name]
What it does: [2 to 3 plain sentences]
Stack: [tags]
Live link: [url or none]
GitHub: [url or "private"]
Featured with a detail page, or only in "Other projects": [choose one]

Do not invent anything I did not write above. Mark missing items as TODO. Log it in CHANGELOG.md.
```
