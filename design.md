# Design system: MZAINULABDIN.xyz

Last updated: 2026-10-06
Read `prd.md` first. When you change anything in this file, add an entry to `CHANGELOG.md`.

---

## 1. Direction

iOS-style liquid glass, used with restraint. Everything is quiet and readable. The one memorable element is the floating glass navbar, which blurs the content as it scrolls underneath. Content itself sits on plain surfaces.

Principles:
1. Readability first. Generous space, one font, clear hierarchy.
2. Glass is for controls (navbar, menu sheet, toggle, secondary button). Content never sits in glass.
3. One accent color. No gradients anywhere.
4. Left-aligned layout throughout, including the hero.
5. Motion is minimal and always has a reason.

## 2. Color tokens

Define as CSS variables on `:root` (light) and `:root[data-theme="dark"]`. The values below are the starting point. Check every text and background pair for at least 4.5:1 contrast and adjust the value if it fails, then log the change.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F2F2F7` | `#000000` |
| `--surface` | `#FFFFFF` | `#1C1C1E` |
| `--text` | `#1C1C1E` | `#F2F2F7` |
| `--text-muted` | `#636366` | `#98989F` |
| `--border` | `rgba(60,60,67,0.18)` | `rgba(255,255,255,0.12)` |
| `--accent` | `#0066D6` | `#0A84FF` |
| `--lamp-on` | `#FFC933` | `#FFC933` |

Accent is used for links, focus rings and nothing else. Do not use it as a fill color.

Glass tokens:

| Token | Light | Dark |
|---|---|---|
| `--glass-bg` | `rgba(255,255,255,0.62)` | `rgba(255,255,255,0.08)` |
| `--glass-border` | `rgba(255,255,255,0.80)` | `rgba(255,255,255,0.16)` |
| `--glass-highlight` | `rgba(255,255,255,0.90)` | `rgba(255,255,255,0.28)` |
| `--glass-shadow` | `0 8px 32px rgba(0,0,0,0.10)` | `0 8px 32px rgba(0,0,0,0.50)` |

Also set `color-scheme: light` and `color-scheme: dark` per theme, and update `<meta name="theme-color">` when the theme changes.

## 3. Liquid glass spec

Use this for every glass element. Do not vary the recipe.

```css
.glass {
  background: var(--glass-bg);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--glass-border);
  box-shadow:
    inset 0 1px 0 var(--glass-highlight),
    var(--glass-shadow);
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass { background: var(--surface); }
}
@media (prefers-reduced-transparency: reduce) {
  .glass { background: var(--surface); backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-contrast: more) {
  .glass { border-color: var(--text-muted); }
}
```

Glass is allowed only on:
- the navbar pill
- the mobile menu sheet
- the theme toggle
- the secondary button

Do not add SVG refraction filters or animated highlights. They cost performance and are not needed.

## 4. Typography

Font: Manrope, self-hosted. Weights used: 400, 500, 600, 700. Nothing else is loaded. Fallback stack: `system-ui, -apple-system, "Segoe UI", sans-serif`.

| Role | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Display (home name) | `clamp(40px, 7vw, 72px)` | 700 | 1.05 | -0.03em |
| H2 (section titles) | `clamp(28px, 4vw, 40px)` | 700 | 1.15 | -0.02em |
| H3 (project titles) | 22px | 600 | 1.3 | -0.01em |
| Body | 17px | 400 | 1.65 | 0 |
| Small (tags, meta) | 14px | 500 | 1.4 | 0 |

Rules:
- Body text lines stay under 65 characters (`max-width: 65ch`).
- Sentence case everywhere.
- No ALL CAPS labels.
- No small label above a heading.
- Do not color or italicize a single word in a headline.
- No monospace font. Small text uses Manrope.

## 5. Spacing, radius, shadow

- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Section vertical padding: `clamp(72px, 10vw, 128px)`
- Container: max width 1080px, side padding 24px (16px under 640px)
- Text column: max width 680px
- Radius, three values only: `999px` for glass controls and buttons, `20px` for screenshots, `12px` for tags
- Shadow: only on glass elements (token above). No shadows on content.

## 6. Layout

Home:

```
[ floating glass navbar: Home Work About Skills Experience Contact ]  (separate theme toggle)

Open to internships, freelance and remote work
Muhammad
Zain Ul Abdin
AI-driven full-stack developer
I build web apps and AI tools with Next.js, React and FastAPI. I also run MZ Nexora, a small digital agency.
Faisalabad, Pakistan   Founder at MZ Nexora
[ Contact me ]  [ Download CV, when `public/cv.pdf` exists ]
Find me online   GitHub   LinkedIn   Email
                                      [owner photo]
                      [pull-cord lamp at top-right of photo]
```

Featured project row (desktop, 12-column grid, screenshot 7 columns, text 5 columns):

```
+------------------------------+   Project title
|                              |   Two or three lines of description.
|         screenshot           |   [React] [FastAPI] [RAG]
|                              |   Open live site   View on GitHub
+------------------------------+
```

- Rows are full width and separated by space, not by cards or boxes.
- Screenshot sits left on every row. Do not alternate sides.
- Under 1024px, the row stacks: screenshot first, then text.
- "Other projects" is a plain list: name, one line, links. No cards.

Experience: a simple vertical timeline with year or month range, title, place.

## 7. Components

Navbar
- Pill, centered, `position: fixed`, 16px from the top, max width 760px, height 56px, class `glass`.
- Desktop: a standalone 48px glass MZ monogram links home at the left of the centered pill. The pill contains Home, Work, About, Skills, Experience and Contact links, each with a small inline SVG icon and visible text. The theme toggle is a separate glass circle at the right.
- Active section link is a filled pill using `--text` with `--bg` text; inactive links use `--text-muted`.
- Under 640px: the MZ monogram, menu-button pill and theme toggle remain separate and fit in one row. The menu opens a glass sheet with the icon-and-label links stacked.
- The Home heading is the full name split into two lines: "Muhammad" then "Zain Ul Abdin". Keep both lines in Manrope; use weight 600 for the first and 700 for the second.

Theme toggle
- 40x40 circle, class `glass`, inline SVG sun and moon, `aria-label="Switch theme"`, `aria-pressed` reflects dark mode.

Buttons (minimum height 44px, horizontal padding 20px, radius 999px, weight 600)
- Primary: inverted neutral. Fill `--text`, label `--bg`. Used for "View my work" and the email button.
- Secondary: class `glass`, label `--text`. Used for "Contact me" and other secondary actions.
- No accent fill, no gradient, no arrow glyphs in labels.

Contact form
- Keep the form plain and unframed. Fields: Name, Email or phone number, and Details. Submitting opens a prefilled `mailto:` message; do not add a backend or external form service.
- Include the email and WhatsApp contact links alongside LinkedIn and GitHub in the contact area and footer.

Links
- Color `--accent`, underlined, underline offset 3px. On hover, thicker underline. Same on focus.

Tags
- 14px, weight 500, 1px `--border`, no fill, radius 12px, padding 4px 10px.

Focus
- 2px solid `--accent`, 2px offset, on every interactive element.

Screenshots
- Plain image with 1px `--border` and radius 20px. No fake browser frame, no device mockup.

Icons
- Small inline SVG icons use one consistent stroke style, are `aria-hidden="true"`, and sit beside a visible text label. They are allowed in the navbar, hero meta row, hero buttons and social row. The theme toggle and menu button may remain icon-only controls with accessible names.

Pull-cord lamp
- A small, user-activated lamp hangs from the top-right of the portrait frame; if the portrait is missing, it hangs from the top-right of the hero container. Its wrapper is not clipped by the portrait.
- Use inline SVG only: a 1.5px `--text-muted` cord with a small pull bead, a `--text` dome shade about 44px wide with a narrow rim, a visible socket and a pear-shaped bulb. Total hanging height is about 120px or less. ON fills the bulb with `--lamp-on`; OFF leaves it outlined in `--text-muted`.
- It is a real button with `role="switch"`, accessible name "Light", `aria-checked` true in the light theme, a 44px-or-larger hit area and the standard visible focus ring. Its z-index is above the portrait and below the navbar.
- Pulling switches the theme immediately. The cord stretches about 10px over 120ms, then swings 8deg, -6deg, 3deg, -1deg and 0deg over about 900ms around the top of the cord. Use transforms only, remove the animation state on `animationend`, and restart it on another pull during a swing.
- Call `navigator.vibrate(12)` only when supported on touch devices, and never when reduced motion is requested. With `prefers-reduced-motion: reduce`, switch instantly without stretching or swinging.
- Lamp state is styled from `data-theme` in CSS before paint and stays synchronized with the navbar toggle through the shared theme function. No glow or gradient. The bulb is the only element allowed the second color `--lamp-on`.

## 8. Do not use

- Gradients of any kind (backgrounds, text, borders, buttons)
- Glow, neon, blurred color blobs, grain overlays, animated backgrounds
- Glass on cards, content blocks or section backgrounds
- Grids of identical rounded cards with the same shadow
- ALL CAPS labels, eyebrow text above headings, numbered markers (01, 02, 03)
- Middle-dot meta strings ("A · B · C"), arrow glyphs on links, spaced em dashes in labels
- Skill bars, percentages, stat counters
- Emojis
- macOS window chrome, dock, traffic-light buttons
- Decorative elements, except for the status-pill availability badge specified below and the pull-cord lamp specified in section 7. The lamp moves only after user input; it never moves automatically.
- Typing effects, including animated role text or a blinking cursor.

The availability badge is a status pill, not an eyebrow label: use a 1px border, no fill and 14px text. It is allowed above the heading.

## 9. Motion

The owner wants simple scroll effects. Keep to exactly this:

- Smooth scroll: `html { scroll-behavior: smooth; scroll-padding-top: 96px; }`
- One reveal: content blocks fade from opacity 0 to 1 and move up from 12px to 0 over 500ms with `ease-out`. It runs once per element, via `IntersectionObserver`. Apply it only to project rows, About text and the Experience timeline. Nothing else moves on scroll.
- Hover and focus: color or opacity change over 150ms. No lifting, scaling or shadows on hover.
- Theme switch: `background-color`, `color` and `border-color` transition over 200ms. Disabled on first load.
- No parallax, cursor effects, marquee, typing effect, or auto-playing anything.
- With `prefers-reduced-motion: reduce`, turn off the reveal and smooth scroll.
- Exception: the pull-cord lamp may stretch and swing only after the user activates it, as specified in section 7. Reduced motion disables both movements.

## 10. Responsive

- Breakpoints: 640px and 1024px. Smallest supported width is 360px.
- Test at 360, 768, 1024 and 1440.
- No horizontal scroll at any width.
- Navbar and menu sheet respect `env(safe-area-inset-top)` on phones.

## 11. Implementation notes

- Theme: `<html data-theme>`, inline script in `<head>` reads `localStorage.theme`, falls back to `prefers-color-scheme`, sets the attribute before paint.
- Fonts: preload the main Manrope file, use `font-display: swap`.
- Keep CSS in tokens and a small number of component classes. Avoid selectors that fight each other (for example a generic `.section` rule and an element rule setting the same padding).
