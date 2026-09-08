# Hearth — Design System

> Hearth is a **territorial storytelling platform** and *Società Benefit* that helps
> municipalities, territories and local communities **map, organize, review and publish**
> high-quality cultural content about their people, places, activities, products,
> traditions and events.

Hearth is **not** a generic tourism or communication app. It is an editorial, cultural and
product-driven platform with a clear chain of custody for content: explorers collect it,
the editorial team validates it, municipalities organize and reuse it, and travelers
discover it through public guides.

---

## The four product areas

| # | Surface | Who uses it | Job |
|---|---------|-------------|-----|
| 1 | **Creator App** | Local photographers / explorers | Complete *missions*, capture photos, write/dictate structured stories, submit content. Mobile-first, calm, guided, human. |
| 2 | **Editorial Backoffice** | Hearth's internal editorial team | Review, correct, request changes, approve and publish content. Dense but legible desktop tool. |
| 3 | **Municipality Dashboard** | Municipalities & partners | View, organize, filter and reuse approved territorial content. Library + collections. |
| 4 | **Public Digital Guides** | Travelers | Discover people, places, products and events through editorial, image-first web pages. |

A single piece of content flows **Creator → Editorial → Municipality → Public**, changing
state along the way (`draft → in review → correction requested → approved → published`).

---

## Sources provided (store for reference — reader may not have access)

- **Logos (SVG):** `Hearth_Logo_Final_2-02.svg` (wordmark), `…2-04.svg` & `…2-07 no testo.svg`
  (the organic icon mark). Copied to `assets/logos/`.
- **Fonts:** `Albra Light.otf`, `Albra-Light-Italic.ttf`. Copied to `assets/fonts/`.
- **Brand editorial posters:** `01_brand_editorial_poster_wooden_sculptures.png`,
  `02_brand_editorial_typography_territori.jpg` → `assets/imagery/`.
- **Product screenshots (Creator App):** `04_product_content_status_detail.jpg`,
  `05_creator_app_story_input_step.jpg`, `06_creator_app_knowledge_choice_step.jpg`
  → `assets/imagery/ref-*.jpg`.
- One referenced file, `03_public_landing_heritage_hero.png`, was **not present** in the
  upload — the public-web direction was synthesized from the editorial + product references.

No formal design system or codebase was provided; this system **extracts a coherent
language from the references** and defines reusable rules.

---

## Reference hierarchy (how the inputs were weighted)

1. **Product UI → the Creator App screenshots** are the primary source for functional
   components: forms, cards, buttons, chips, status badges, content states, step flows,
   radio cards, expandable detail rows, progress, bottom CTAs.
2. **Brand / editorial → the posters** define mood, typographic rhythm, use of Albra,
   the warm cream background, the pill/outline motif, and high-impact storytelling moments.
3. **Web / public → synthesized** public layouts: large photography, editorial type,
   black rounded CTAs, image-first sections.

---

## CONTENT FUNDAMENTALS — how Hearth writes

The product references are in **Italian** (the live market). The voice is **warm, calm,
plain-spoken and reassuring** — it guides a non-expert contributor without pressure.

**Voice & person**
- Speaks to the user as **"tu"** (informal *you*), like a knowledgeable local friend, not an
  institution. E.g. *"Scrivi quello che sai davvero. Hearth ti aiuterà a darle forma."*
  ("Write what you really know. Hearth will help you shape it.")
- Hearth refers to itself by name as a helper, not "we/the system": *"Hearth ti aiuterà…"*,
  *"In revisione Hearth"*.
- **Lowers the stakes** constantly: *"Non serve essere perfetto"* ("It doesn't need to be
  perfect"), *"Scrivi o detta quello che sai"* ("Write or dictate what you know").

**Tone of interface copy**
- **Short, kind, declarative.** Sentences are brief and often broken across two lines for
  rhythm. Helper text explains *why* a field matters, not just what to type:
  *"Completa tutte le info: sono ciò che rende davvero utile la scheda."*
- **Status is explained like a person would.** *"Stiamo controllando contenuti, foto e testi.
  Se serve qualcosa, ti scriviamo qui."* — present tense, first person plural for the team,
  no jargon, no error codes.
- **Encouraging, never gamified-childish.** Progress is framed as completeness
  (*"0/3 completati"*, *"0 / 240 caratteri consigliati"* — note **"consigliati"/recommended**,
  not "required").

**Casing & mechanics**
- Sentence case everywhere in product UI. Titles use **Avenir Heavy**, sentence case
  (*"Raccontalo a modo tuo"*, *"Quanto conosci questo posto?"*).
- **Overlines/labels are UPPERCASE** with wide tracking (*"RACCONTO PRINCIPALE"*,
  *"DETTAGLI UTILI"*).
- Editorial / brand claims use **Albra**, sentence or title case, with the *italic* reserved
  for one emphasized word (*"…la loro **autenticità**."*, *"The art of **Wooden Sculptures**"*).

**Emoji**
- **Avoid in product UI.** The brand posters use the occasional emoji inside a pill as a
  playful editorial flourish (🏔️ *Territori*) — that is a **brand-channel** device only, never
  inside operational screens. Default: no emoji.

**Do**
- Reassure, explain the reason, keep it human and specific to place names.
- Use real toponyms and contributor names (*"Raccontato da Marta, di Capraia (Italia)"*).

**Don't**
- No corporate/SaaS voice ("Leverage", "Sync your data"), no exclamation spam, no fake
  urgency, no tourist clichés ("Discover hidden gems!"), no childish gamification.

---

## VISUAL FOUNDATIONS

**Overall personality.** Premium, calm, editorial, contemporary, trustworthy. *Minimal but
not cold; elegant but not luxury-fashion; institutional enough for municipalities, modern
enough for creators.* Lots of air, clear hierarchy, large visual areas, restrained CTAs.

**Two worlds, one system.**
- **Brand & public** live on **warm cream** (`--cream-100` #FAF6EA) with **warm brown ink**
  (`--ink-800` #3A2E1E) and **Albra** at large sizes.
- **Product UI** lives on **cool, very light neutral** (`--neutral-50` #F7F7F5) with **white
  cards** and **Avenir**. Headings approach near-black.

**Color vibe.** Soft, earthy, low-saturation. The single brand accent is a muted **forest
green** (`--green-500` #2F8B5C) used for active/success/progress — *functional, not
decorative*. Status hues are warm and restrained (slate for in-review, amber for
corrections, terracotta-red for errors). **No blues, no purple gradients.** Imagery is
**warm, natural, golden-hour** — real landscapes, heritage, people; never cold or heavily
filtered.

**Backgrounds.** Flat color fields, never gradients. Brand surfaces = cream; product = light
neutral; immersive headers = full-bleed photography with a soft bottom protection gradient
(`rgba(0,0,0,.0)→.45`) so white overlay text and status pills stay legible. No textures,
no noise, no patterns.

**Typography rhythm.** Albra is *quiet and huge* — generous leading collapses at display
sizes (`--lh-display` 1.02), slight negative tracking. The italic is an accent, never a
paragraph. Avenir carries everything functional: Heavy (800) for titles/buttons/card
titles, Roman (400) for body/captions/metadata. Uppercase overlines with `0.12em` tracking
separate sections.

**Corner radii.** Soft and consistent. Inputs & chips `--radius-md` 14px; cards `--radius-lg`
20px; large cards & sheets `--radius-xl` 28px; bottom sheets `--radius-2xl` 36px (top corners
only); badges/pills/CTAs fully rounded `--radius-pill`. Icon-button hit areas are circular.

**Cards.** White fill, **large radius (20px)**, a **subtle 1px warm border** (`--border-soft`),
and a **very soft shadow** (`--shadow-sm`) — often *border only, no shadow* on the calmest
screens. Never heavy elevation. Radio/selection cards add a green ring + green dot when
selected. Generous internal padding (20–24px).

**Borders.** 1px, warm light gray (`--border-soft` #E2E1DD). Outlined **pills** (1px stroke,
no fill) are a signature brand motif from the posters — used for tags, years, section labels.

**Shadows.** A short, soft, warm-tinted ramp (`rgba(36,30,18,…)` at 4–10% alpha). Bottom
sheets cast an upward shadow. Avoid dark or large-blur drop shadows.

**Buttons & CTAs.** Primary public CTA = **solid near-black pill** (`--cta-fill` #161512) with
cream text. Product primary can be dark or green; **disabled = flat gray** (`--neutral-400`)
with white text and a helper line beneath (as in the app's "Continua" disabled state).
Secondary = white pill with border; ghost = text + green. Always show **disabled / active /
completed** states distinctly.

**Status.** Always a pill or inline chip with a **dot or small icon + label**, tinted
background + readable foreground from the status token pairs. Functional, never decorative,
never color-only (icon/label carry meaning for accessibility).

**Motion.** Subtle and quick. Fades and gentle slides (`--ease-out`, 140–360ms). Bottom
sheets slide up; selections cross-fade their ring. **No bounce, no infinite loops, no
parallax.** Respect `prefers-reduced-motion`.

**Hover / press.**
- Hover: slight fill darken (neutral fills → `--neutral-150`), or 92% opacity on photos /
  dark CTAs. Cards lift with `--shadow-md` on web.
- Press: brief scale to `0.98` + the darker token (e.g. `--green-600`, `--cta-fill-hover`).

**Transparency & blur.** Used sparingly — frosted top bars over photography
(`backdrop-filter: blur` + translucent surface) and the protection gradient on hero images.
Not used decoratively elsewhere.

**Layout.** Mobile-first (412px design width, 20px gutters). 8pt spacing system, generous
vertical rhythm. Desktop adapts to a 12-column grid (24px gap, 1200px max), keeping the same
calm density. Fixed elements: app top bar (dark, over media) and a bottom CTA bar on flows.

---

## ICONOGRAPHY

The references use **simple, line-based icons with a soft, rounded terminal** — a 1.6–2px
stroke, generous corner rounding, no fills inside small UI (compass, home, clock, lightbulb,
location pin, share, arrow-back, chevron). They sit inside **rounded-square neutral chips**
(`--surface-sunken`, `--radius-md`) in list rows, or bare on top bars.

- **Icon set:** No proprietary icon font was provided. Hearth standardizes on
  **[Lucide](https://lucide.dev)** — its rounded, even-stroke geometry matches the
  references closely. Loaded from CDN in cards & kits
  (`https://unpkg.com/lucide@latest`). **This is a documented substitution** — swap for a
  bespoke set in production if desired.
- **Stroke & size:** 1.75px stroke; 20px in dense UI, 24px standard, 28–32px in feature rows.
  Use `--neutral-500/600` for resting, `--neutral-900` or `--green-600` for active.
- **Logo mark:** The organic Hearth mark (`assets/logos/hearth-mark.svg`) is a brand glyph —
  use it as app icon / avatar / loading mark, **not** as a UI icon.
- **Emoji:** brand channel only (see Content Fundamentals). Never as functional iconography.
- **No** cartoonish, multi-color, or filled-novelty icons. Keep it quiet and consistent.

---

## INDEX — what's in this folder

**Foundations**
- `styles.css` — entry point (imports only). Link this.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css`
- `guidelines/*.card.html` — 9 foundation specimen cards (Brand, Type, Colors, Spacing).

**Assets** — `assets/logos/`, `assets/fonts/`, `assets/imagery/`.

**Components** (17, `components/<group>/`) — namespace `window.HearthDesignSystem_7ae78b`.
Each has a sibling `.d.ts` (props), `.prompt.md` (usage) and one `@dsCard` showcase per group:
- `forms/` — Button, IconButton, Input, Textarea, SelectCard (radio card), Chip
- `data-display/` — Card, ContentCard, Badge, ProgressBar, Avatar, DetailRow
- `feedback/` — EmptyState, Toast, BottomSheet
- `navigation/` — Tabs, TopBar

**Starting points** — ContentCard, Button, SelectCard (tagged via their `.d.ts`).

**UI Kits** (`ui_kits/<product>/`)
- `creator-app/` — mission flow, story input, content status (mobile)
- `editorial-backoffice/` — review queue + content review (desktop)
- `municipality-dashboard/` — content library (desktop)
- `public-guides/` — public guide page (web)

**Skill**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## Typography quick rules

| Use | Family / weight | Token |
|-----|-----------------|-------|
| Hero claim, brand story | Albra Light | `--font-display`, `--display-2xl/xl` |
| Editorial emphasis (1 word) | Albra Light *Italic* | `font-style: italic` |
| Product page title | Avenir Heavy | `--text-3xl/2xl` |
| Card title, button, label | Avenir Heavy | `--text-lg/md` |
| Body, form text, description | Avenir Roman | `--text-md/sm` |
| Caption, metadata | Avenir Roman | `--text-xs` |
| Overline / section label | Avenir Heavy, UPPERCASE, `--ls-eyebrow` | `--text-2xs` |

> ✅ **Fonts bundled:** Albra Light/Italic + Avenir Heavy/Roman all ship as real webfonts
> (`assets/fonts/`). Avenir has only Roman & Heavy weights available here, so `--font-sans`
> renders Roman for 400–600 and Heavy for 700–900 (no intermediate Medium/Book face).
