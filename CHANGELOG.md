# Changelog: MZAINULABDIN.xyz

Newest entry at the top. The coding agent adds an entry here after every change, in the same step as the change.

## 2026-10-10, prepare Vercel deployment handoff
- What changed: Added the owner steps for pushing this portfolio to a new GitHub repository, connecting it to Vercel, assigning `mzainulabdin.xyz`, and redirecting the old Vercel URL.
- Files: `CHANGELOG.md`
- Why: The owner wants this portfolio to replace the site currently deployed on Vercel.
- Docs updated: none needed
- Needs owner:
	1. Create an empty GitHub repository. Review the current changes, then commit and push this project to that repository. For example: `git remote add new-origin <new-repository-url>` and `git push -u new-origin main` (after committing).
	2. In Vercel, open the existing portfolio project and go to **Settings > Git**. Disconnect its old repository and connect the new repository. This keeps the existing project and its domain assignment. If you instead create a new Vercel project, deploy it first, then add `mzainulabdin.xyz` under **Settings > Domains**; if Vercel says the domain is assigned to the old project, remove it there only after confirming the new deployment is ready.
	3. Use the project root as the root directory. Vercel should detect Astro; the build command is `npm run build` and the output directory is `dist`. No environment variables are defined by this project.
	4. In **Settings > Domains**, confirm `mzainulabdin.xyz` is assigned to the production project and verified. At the domain registrar, use the DNS records Vercel shows for the domain; avoid deleting unrelated DNS records.
	5. Configure `mzainulabdin.vercel.app` to redirect permanently to `https://mzainulabdin.xyz` in Vercel's domain settings, then test both URLs. Keep the old project/deployment until the new production site and redirect are confirmed.
	6. Run `npm ci` and `npm run build` locally before pushing. Local installation here is blocked because this `/media` mount rejects npm's `.bin` symlinks (`EPERM`), so verify the production build in Vercel or from a native Linux filesystem before treating deployment as complete.

## How to write an entry

```
## YYYY-MM-DD, short title
- What changed: one or two plain sentences
- Files: list of files touched (code and md files)
- Why: the reason, in one sentence
- Docs updated: which of prd.md / design.md / data.md were updated, or "none needed"
- Needs owner: anything the owner must decide or supply, or "nothing"
```

Rules:
- One entry per change or small group of related changes. Do not batch a whole session into one entry.
- Plain English. The owner reads this to follow progress.
- If you change a decision, also add a line to the "Decision log" in `prd.md`.
- If something was skipped or left as `TODO`, say so under "Needs owner".


---

## 2026-10-06, contact links and email form implemented
## 2026-10-06, simplify WhatsApp button label
- What changed: Removed the phone number from the visible WhatsApp button label while keeping it in the WhatsApp link.
- Files: `src/components/ContactSection.astro`, `CHANGELOG.md`
- Why: The owner asked for a simpler button label.
- Docs updated: none needed
- Needs owner: nothing.
- What changed: Updated active email links to zzawar521@gmail.com, added WhatsApp contact links with the supplied number, and added a labeled Name, Email or phone number, and Details form that opens a prefilled email draft.
- Files: `src/components/Hero.astro`, `src/components/ContactSection.astro`, `src/components/Footer.astro`, `CHANGELOG.md`
- Why: Implemented the owner's updated contact details and requested simple form without adding a backend.
- Docs updated: none needed
- Needs owner: nothing.

## 2026-10-06, updated contact details and form requirements
- What changed: Replaced the contact email, added the owner's WhatsApp number, and updated the contact form scope to use a prefilled email draft without a backend.
- Files: `data.md`, `design.md`, `prd.md`, `PROMPTS.md`, `CHANGELOG.md`
- Why: The owner supplied a new email address and WhatsApp number and requested a simple contact form.
- Docs updated: `data.md`, `design.md`, `prd.md`
- Needs owner: nothing.

## 2026-10-06, standalone MZ navbar mark
- What changed: Moved MZ out of the navigation pill into a separate home link on its left, balanced by the existing theme control on the right. Adjusted tablet spacing and kept the mobile menu in its own pill.
- Files: `src/components/Navbar.astro`, `design.md`, `prd.md`, `CHANGELOG.md`
- Why: The owner asked for MZ to have its own icon outside the navbar, like the theme control.
- Docs updated: `design.md`, `prd.md`
- Needs owner: nothing.

## 2026-10-06, two-line name and lamp orientation
- What changed: Set the hero name on two lines, restored MZ at the desktop navbar's left edge, and turned the bulb so its socket faces the shade. The portrait frame has its own rounded border without clipping the lamp.
- Files: `src/components/Hero.astro`, `src/components/Navbar.astro`, `src/components/PullCordLamp.astro`, `data.md`, `design.md`, `prd.md`, `CHANGELOG.md`
- Why: The owner requested a more readable name treatment, visible desktop branding and a correctly oriented lamp.
- Docs updated: `data.md`, `design.md`, `prd.md`
- Needs owner: Supply `public/images/zain.jpg` and `public/cv.pdf` to show the portrait and working download button.

## 2026-10-06, responsive hero verification
- What changed: Checked the hero and navbar at 360, 768, 1024 and 1440 px in light and dark themes. Confirmed no horizontal overflow, matching lamp states, and six icon-labeled links in the mobile sheet; marked the responsive phase complete.
- Files: `prd.md`, `CHANGELOG.md`
- Why: Recorded the requested responsive verification after the hero and navigation changes.
- Docs updated: `prd.md` (phase 7 marked complete)
- Needs owner: Supply `public/images/zain.jpg` and `public/cv.pdf`.

## 2026-10-06, hero and lamp refinement
- What changed: Restored the full-name hero heading and refined the lamp with a shade rim, socket and pear-shaped bulb. Fixed its CSS on/off state in both themes and kept theme updates in the shared module.
- Files: `src/components/Hero.astro`, `src/components/PullCordLamp.astro`, `src/layouts/BaseLayout.astro`, `src/scripts/theme.ts`, `data.md`, `design.md`, `prd.md`, `CHANGELOG.md`
- Why: The owner preferred the full name over a greeting and asked for a more professional-looking lamp.
- Docs updated: `data.md`, `design.md`, `prd.md`
- Needs owner: Supply `public/images/zain.jpg` and `public/cv.pdf`.

## 2026-10-06, hero navbar and pull-cord lamp implemented
- What changed: Rebuilt the hero around the greeting, role, location, contact action and social links; added the icon-led responsive navbar and a pull-cord theme switch synchronized with the separate theme toggle. Fixed narrow-screen project-row overflow and reduced-motion lamp state. The portrait and CV actions appear when their files are supplied.
- Files: `src/components/Hero.astro`, `src/components/Navbar.astro`, `src/components/ThemeToggle.astro`, `src/components/PullCordLamp.astro`, `src/components/WorkSection.astro`, `src/scripts/theme.ts`, `src/layouts/BaseLayout.astro`, `src/styles/global.css`, `CHANGELOG.md`
- Why: Implemented the approved hero and navbar update with an accessible user-triggered theme control.
- Docs updated: none needed
- Needs owner: Supply `public/images/zain.jpg` and `public/cv.pdf`.

## 2026-10-06, hero and lamp requirements documented
- What changed: Updated the design, content and product documents for the greeting-led hero, icon-and-label navbar, optional portrait and CV, and user-activated pull-cord theme lamp. Added the corresponding decision log entry.
- Files: `design.md`, `data.md`, `prd.md`, `CHANGELOG.md`
- Why: The owner requested a new hero and navbar layout plus a lamp control that switches the site theme.
- Docs updated: `prd.md`, `design.md`, `data.md`
- Needs owner: Supply `public/images/zain.jpg` and `public/cv.pdf`.

## 2026-10-05, hero section visual polish and typography refinement
- What changed: Upgraded the Hero section with a balanced two-line name hierarchy (`Muhammad` on line 1 in subtle tone, `Zainulabdin.` on line 2 in bold with accent period), an "Available for work" live status indicator pill, and core technology stack tags (`Next.js`, `React`, `FastAPI`, `Python`, `AI & LLMs`).
- Files: [Hero.astro](file:///mnt/sdb1/portfolio/src/components/Hero.astro), [CHANGELOG.md](file:///mnt/sdb1/portfolio/CHANGELOG.md)
- Why: User requested an attractive yet clean hero presentation with "Muhammad" and "Zainulabdin" on separate lines.
- Docs updated: none needed
- Needs owner: nothing

## 2026-10-05, SEO and performance pass (phase 8)

**Lighthouse mobile scores (localhost preview, simulated throttling): Performance 100, Accessibility 100, Best Practices 100, SEO 100.**
LCP 1.4 s, CLS 0.001, TBT 0 ms, total page weight 71 KiB. Client JavaScript: 0 KB shipped as separate files (all logic is inlined into the HTML by Astro). CSS: ~6.3 KB gzipped.

Changes made:
- **OG image**: Generated a 1200×630 plain-background (no gradient) card showing name and role line. Saved as `public/og.jpg`. Updated all OG/Twitter image tags to use it, added `og:image:width` and `og:image:height` meta.
- **robots.txt**: Created `public/robots.txt` (allow all, sitemap pointer). Sitemap already generated by `@astrojs/sitemap` as `sitemap-index.xml`.
- **JSON-LD Person schema**: Added to `index.astro` and wired through a new `jsonLd` prop in `BaseLayout.astro`. Fields match data.md section 8 exactly (name, jobTitle, url, address, sameAs).
- **Font preload**: Added `<link rel="preload">` for `manrope-latin-400-normal.woff2` in `<head>`. This is the first font the browser needs for body text.
- **Self-hosted fonts, no render-blocking imports**: Replaced the four `@import "@fontsource/manrope/…"` lines in `global.css` with `@font-face` rules pointing to `public/fonts/*.woff2`. The woff2 files (latin subset, weights 400/500/600/700) were copied from `node_modules/@fontsource/manrope/files/` to `public/fonts/`. All four faces use `font-display: swap`.
- **SEO audit — all 5 pages pass**: One `h1`, ordered headings, semantic landmarks (`header`, `nav`, `main`, `footer`), unique `title` and `description`, canonical URL, `lang="en"`, OG tags, Twitter card, and font preload confirmed in every built HTML file. JSON-LD is present on the home page only (correct).
- **prd.md**: Ticked phase 8.

- Files: `src/layouts/BaseLayout.astro`, `src/pages/index.astro`, `src/styles/global.css`, `public/robots.txt`, `public/og.jpg`, `public/fonts/manrope-latin-{400,500,600,700}-normal.woff2`, `prd.md`, `CHANGELOG.md`
- Why: Phase 8 SEO and performance pass per prd.md.
- Docs updated: `prd.md` (ticked phase 8)
- Needs owner: nothing



## 2026-10-05, scroll reveal and motion polish (phase 6)
- What changed: Implemented exact motion specifications from design.md section 9: smooth scroll with scroll-padding-top 96px, 150ms color and opacity transitions on links and buttons, 200ms theme-switch transition (disabled on first load), and one scroll reveal (opacity 0 to 1, move up 12px to 0, 500ms ease-out, once via IntersectionObserver) applied strictly to project rows, About text, and the Experience timeline. The hidden state is applied solely via JavaScript to ensure full content visibility if JavaScript fails or is disabled. Full prefers-reduced-motion support turns off smooth scroll and reveals. No parallax, cursor effects, typing effects, or marquee.
- Files: `src/styles/global.css`, `src/layouts/BaseLayout.astro`, `prd.md`, `CHANGELOG.md`
- Why: Implemented Phase 6 scroll reveal and motion polish per design.md section 9.
- Docs updated: prd.md (ticked phase 6)
- Needs owner: nothing

## 2026-10-05, experience corrections and new Study journey section
- What changed: Rewrote the Experience section with four correct entries (newest first): MZ Nexora (founder, Aug 2026 – present), SDI Welfare (digital marketing intern, Aug–Oct 2026, with a note about the course), Alliance Public School (Arabic teacher, ~1 year, now visible), SMIT (AI and Data Science, intern and studying, Nov 2025 – Nov 2026). ICS was removed from Experience and moved to a new "Study journey" section. The Study journey section has two groups — Formal education (ICS) and Courses and certificates (SMIT, SDI Welfare digital marketing). A new Education link was added to the navbar. data.md and prd.md were updated to match.
- Files: `src/components/ExperienceSection.astro`, `src/components/EducationSection.astro` (new), `src/components/Navbar.astro`, `src/pages/index.astro`, `data.md`, `prd.md`, `CHANGELOG.md`
- Why: Owner corrected all experience entries, added SDI Welfare, confirmed SMIT dates, showed the Arabic teacher role, and asked for a separate education section.
- Docs updated: data.md (section 7 and open items), prd.md (decision log and open items)
- Needs owner: Exact start/end dates for the Arabic teaching role at Alliance Public School

## 2026-10-05, About, Skills, Experience, Contact (phase 5)
- What changed: Built four new sections. About: three paragraphs from data.md in a max-680px column. Skills: grouped tags (Frontend, Backend, Database and vector, AI, Automation, Tools, AI tools) with no bars, percentages or icons. Experience: vertical timeline, newest first — MZ Nexora, SMIT (no dates per open item), ICS — Arabic teacher entry omitted by default per prd.md section 13. Contact: primary email button (mailto:), LinkedIn and GitHub links, no phone and no contact form.
- Files: `src/components/AboutSection.astro`, `src/components/SkillsSection.astro`, `src/components/ExperienceSection.astro`, `src/components/ContactSection.astro`, `src/pages/index.astro`, `prd.md`, `CHANGELOG.md`
- Why: Phase 5 of the build plan.
- Docs updated: prd.md (ticked phase 5)
- Needs owner: SMIT dates (to be added once confirmed), Arabic teacher entry (confirm show/hide)

## 2026-10-05, home section (phase 3)
- What changed: Built the left-aligned #home hero section using the exact identity text, role line, descriptive sentence, and two action buttons: primary inverted neutral "View my work" linking to #work and secondary glass "Contact me" linking to #contact.
- Files: `src/components/Hero.astro`, `src/pages/index.astro`, `src/styles/global.css`, `prd.md`, `CHANGELOG.md`
- Why: Implemented Phase 3 home section following design.md section 6 and data.md section 3 specifications.
- Docs updated: prd.md (ticked phase 3)
- Needs owner: nothing

## 2026-10-05, layout shell, navbar, and footer (phase 2)
- What changed: Created BaseLayout with complete SEO/Open Graph/Twitter meta tags, skip-to-content link, and zero-flash theme script. Built the floating glass Navbar with active section tracking, theme toggle with smooth transitions, responsive mobile glass sheet menu, and the clean Footer.
- Files: `src/layouts/BaseLayout.astro`, `src/components/Navbar.astro`, `src/components/ThemeToggle.astro`, `src/components/Footer.astro`, `src/pages/index.astro`, `prd.md`, `CHANGELOG.md`
- Why: Implemented Phase 2 layout shell and core navigation following design.md specifications.
- Docs updated: prd.md (ticked phase 2)
- Needs owner: nothing

## 2026-10-05, project setup, design tokens, and theme (phase 1)
- What changed: Initialized the Astro project in strict TypeScript mode with Tailwind CSS v4 and @astrojs/sitemap. Self-hosted Manrope font weights 400, 500, 600, 700 with font-display swap, and added all color, glass, typography, spacing, and radius tokens to global.css with the exact liquid glass recipe.
- Files: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css`, `prd.md`, `CHANGELOG.md`
- Why: Set up the foundational design system and build pipeline for the portfolio rebuild.
- Docs updated: prd.md (ticked phase 1)
- Needs owner: nothing

## 2026-10-04, prompt pack added
- What changed: Added `PROMPTS.md` with a kickoff prompt, one prompt per build phase (1 to 10), and review, fix, update and add-project prompts.
- Files: `PROMPTS.md`, `CHANGELOG.md`
- Why: So the owner can build the site phase by phase with the coding agent.
- Docs updated: none needed
- Needs owner: nothing

## 2026-10-04, planning documents created
- What changed: Created `prd.md`, `design.md`, `data.md` and this changelog. They set the scope, design system and all content for the rebuild of the portfolio.
- Files: `prd.md`, `design.md`, `data.md`, `CHANGELOG.md`
- Why: So the coding agent has one source of truth and logs every change.
- Docs updated: all created
- Needs owner: the items listed under "Open items" in `data.md` (screenshots, HBS modules, stack for Spice Garden and MZ Nexora, SMIT dates, Arabic teaching job, intro animation, review of the About draft)
