# Hearth — Design System 2026

Hearth is a Società Benefit and cultural digital platform that discovers, documents and enhances Italy's **Patrimonio Italiano Invisibile™** — people, workshops, traditions, places, landscapes, products, stories and events that traditional guides leave out. It runs public editorial experiences (hearth.travel, territories, guides, people, stories), a Creator App, a DMS for Comuni and backoffice tools, and produces art-directed posters and printed Editions.

Positioning: **a contemporary cultural institution born digital** — an independent publisher + an Italian photo archive + a contemporary guide + an extremely well-made digital product. Not an agency, OTA, travel magazine, SaaS startup, municipal site or generic tourism app.

## Sources
- 7 screenshots of recent Art Director work (in `uploads/`): Sagra del Tartufo poster + flag, "hearth 2020" Riomaggiore cover, DMS photo-upload step, "Luoghi inseriti" dashboard, two new-landing sections, typographic manifesto.
- Logos: `uploads/hearth-logo.svg` (wordmark), `Hearth_Logo_Final_2-04.svg` (circular symbol with text ring), `Hearth_Logo_Final_2-07 no testo.svg` (symbol without text). Cleaned copies in `assets/`.
- Fonts: Albra Light (otf), Albra Light Italic (ttf), Avenir Roman (ttf), Avenir Heavy (ttf). Copied to `assets/fonts/`. No Figma or codebase was provided; components are authored from the brief and references.

---

## PHASE 1 — AUDIT OF THE REFERENCES

### Existing visual codes (proprietary already)
1. **Albra Light at monumental scale** on a warm white canvas ("C'è un'Italia che non esiste sulle guide." fills 60% of the viewport). Nothing else in Italian travel looks like this.
2. **Extreme scale contrast**: a 400px wordmark next to 9px metadata ("Sagra delle Porchette, Affori 2020"). Monument + footnote.
3. **Albra Italic inside Albra Roman** to mark people, gestures, objects, flavours (*fettuccine*, *flower shop*, *Avellino*). Already used in the dashboard greeting and manifesto — a signature in the making.
4. **The circular symbol used as a stamp**, placed off-grid in a corner of a poster or flag, not as a compact logo.
5. **Photography as a placed object**: images sit inside white margins with a visible edge (poster, cover, landing), rarely bleeding to the edge; the frame is part of the composition.
6. **Vertical rule + split layout** on the landing: a single 1px line dividing text from image is doing the work a card would normally do.
7. **Warm paper white (#FAF8F3-ish) with near-black ink**, no colour except the photograph and one edition colour (the coral flag).
8. **The circular symbol on the poster** with a **year in rotated type** ("2020") as a vertical hairline text.

### Strengths
- Restraint: very few elements per composition; whitespace is deliberate.
- The Editions work (poster/flag) already reads as a graphic object, not an ad.
- The DMS screen proves the language can survive a workflow: white, big image, one serif line.

### Inconsistencies and weaknesses
- **Radii are all over the place**: pill buttons (DMS), 12px images, 24px cover image, 8px cards, hairline-outlined cards with 12px radius (dashboard). No rule.
- **Two different button languages**: pill outlined + pill filled in the DMS vs. filled black pill in the landing nav; text-links with no affordance in the header.
- **Albra used at small sizes in UI** ("Sei partito dal suggerimento", "Comune di Bacoli, NA" on the photo) — readability and role drift.
- **Cardification in the dashboard**: three unrelated things (a congratulation message, a place, an "add" action) are equal-sized outlined cards. Emoji in product copy (🎉).
- **Landing hero = generic full-bleed landscape + centered white serif headline** — this is the one composition that could belong to any premium travel site. The stat row beneath it (icons + numbers) is a SaaS/tourism trope.
- **Avenir used at Light/Regular weights for headlines** ("Hai altre foto da aggiungere?") competes with Albra for the display role.
- Menu items are plain text with no active state; breadcrumb-like tabs ("Luoghi culturali / Eventi") are underdefined.
- Photo in the dashboard place card has the title drawn over the image with no scrim system.
- Mobile behaviour is unaddressed everywhere.

### Elements to drop
- Emoji in UI copy; stat-with-icon rows; all-caps-free pill everything; the "Menu (in arrivo)" placeholder pattern; Avenir Light as display; centered headline over a landscape as default hero; equal-sized card grids for mixed content; small Albra (<22px).

### Missing
- A geometry rule (radius per role), a border/rule vocabulary, a caption system, a grid, a spacing scale that goes very large, a component library with states, motion rules, density modes, accessibility rules, a photography guideline, mobile compositions, a Territory Accent system, and the Core/Stories/Editions split.

---

## PHASE 2 — CREATIVE DIRECTION: "THE ARCHIVE THAT BREATHES"

**Central idea.** Hearth is a living archive. Every surface is a **sheet of paper with ink on it and one photograph placed carefully**. The system is built from four materials only: paper, ink, photograph, line. Everything else (accent colour, blur, shadow) is a rare event.

**Proprietary elements (the "Hearth without the logo" set)**
1. **Monument & Footnote** — compositions pair one monumental element (headline, image, number) with small, precise metadata. Strong scale contrast is a *default*, not a required ratio.
2. **The Italic Mark** — Albra Italic inside Roman for the concrete: names, gestures, objects, flavours. Never for emphasis of abstractions.
3. **The Rule** — 1px ink lines (horizontal, vertical, crop marks) replace cards, shadows and background changes. A page is divided, not boxed.
4. **The Placed Photograph** — images are objects on paper: 2–4px radius in editorial, visible margins, captions set as a *scheda d'archivio* (archive record): NAME · place · coordinates · date · author.
5. **The Stamp** — the circular symbol appears as a seal/stamp/marker, off-grid and small. In navigation the wordmark is the default; the symbol *may* stand in for it only where width forbids the wordmark (mobile top bar ≤390px, favicon, avatar) and always links home.
6. **The Year Rule** — rotated vertical metadata (year, coordinates, edition) along an edge.
7. **Paper + Ink** — `#FAF8F3` / `#151412`. White (`#FFFFFF`) is the Core work surface (*default*) and an *expressive option* in Stories/Editions for isolated objects (Object Study, product cut-outs). Territory Accent: ≤10% of a Stories surface (*default*); full field permitted in Editions.

**Three modes, one grammar**
- **Core** (Creator App, DMS, backoffice): Avenir dominant; Albra only in page titles, empty states, onboarding and one greeting. **Core mode** (`data-mode="core"` on the root): pure White `#FFFFFF` canvas and surface, neutral non-beige greys for hover `#F2F2F1`, selection `#EBEBEA`, subtle surface `#F4F4F3`, borders `#DADAD8` / control `#7C7B79` (4.5:1), secondary text `#5A5957` (7.14:1). Paper appears inside Core only as the preview of Stories/Editions content. Compact density, 8px controls, rules over cards, no accent in chrome. *Mandatory*.
- **Stories** (hearth.travel): Albra carries display, headings, quotes, short introductions; Avenir carries body, metadata, UI. Paper canvas, comfortable density, 9 compositional archetypes, captions everywhere, accent allowed on covers and map details.
- **Editions** (posters, campaigns): free composition under invariants (typographic identity, mark integrity, legibility, hierarchy, colour coherence). Stamp, year rule, wordmark position, single image and off-grid alignment are *optional and combinable*, including type-only compositions. See `guidelines/editions.html`.

No fixed serif/sans percentages: the split follows the task (reading vs operating), not a quota.

**Six principles** (formalised in `guidelines/principles.html`): Content before chrome · Space is content · Editorial, not decorative · Document, don't advertise · Contrast creates rhythm · Utility should feel quiet.

**Tension.** Order vs humanity is built in: rigid 12-column grid + hand-set italic marks; archival captions + imperfect photographs; monospaced-feeling tabular metadata + a 152px serif.

---

## CONTENT FUNDAMENTALS
- **Language**: Italian first, English second. Names, places, years, gestures. "We are the tavern where Antonia has been preparing *fettuccine* since 1962."
- **Voice**: documentary, first-person plural for Hearth ("Siamo…"), second-person singular for the reader/creator ("Hai altre foto da aggiungere?"). Never "Scopri esperienze autentiche", never "emozioni indimenticabili".
- **Casing**: sentence case everywhere, including buttons ("Salva ed esci", "Carica"). Eyebrows and archive captions in tracked uppercase (FONTANA DI BELLEROFONTE).
- **Punctuation**: full stops at the end of headlines ("…sulle guide."). Middle dots (·) separate metadata items. No exclamation marks in product; no emoji anywhere.
- **Numbers**: lining, tabular in metadata; coordinates in decimal degrees "40.9141° N · 14.7890° E".
- **Italic rule**: mark the concrete and human (people, gestures, objects, flavours, traditions, place names in narrative), one or two per sentence, never abstract nouns, never in UI.
- **Microcopy**: short verbs. "Carica", "Indietro", "Avanti", "Salva ed esci". Errors say what happened and what to do next, in one sentence.

## VISUAL FOUNDATIONS
- **Colour**: Paper `#FAF8F3` canvas for Stories/Editions; White `#FFFFFF` canvas + surface in Core mode (see modes above; Object Study option elsewhere), Mist `#F1EEE8` secondary surface, Ink `#151412` text/actions, 6-step warm grey. Contrast (computed, see `guidelines/contrast-matrix.md`): Ink on Paper 17.35:1, Grey-500 on Paper 6.36:1 (secondary AND tertiary text, metadata, captions), Grey-400 on Paper 3.46:1 (large text ≥24px or UI boundaries only — never small text, not even metadata), Grey-300 decorative only. Control borders use Grey-400 (`--color-border-control`, 3.46:1) — hairline/Grey-200 borders are decorative division, not control identification. Territory Accents: Terra `#B5533A`, Rosso `#E9573F`, Blu `#2F4F7A`, Giallo `#E2B73A`, Verde `#4F6B4A`. On-accent is per accent (`--on-accent-*`): Ink on Rosso/Giallo, Paper on Terra/Blu/Verde. As text on Paper: Terra/Blu/Verde pass AA, Rosso large-only, Giallo never. Rule status — *mandatory*: contrast pairs; *default*: accent ≤10% of a Stories surface, absent from Core chrome; *expressive option*: full accent field in Editions.
- **Type**: Albra Light/Italic for display, editorial headings, quotes and short introductions; approved minimum 22px for those roles (*mandatory* — smaller Albra is not an approved role). Editorial body is a distinct role: Albra 18–21px only for short introductions (≤3 paragraphs); continuous reading, UI, forms, tables and metadata are Avenir. Font files provided are Avenir Roman (400) and Avenir Heavy (800), not Avenir Next — declared as family "Avenir Next" for token stability; see Typography note. Heavy is used only for labels, eyebrows and UI titles — never for headlines. Fluid sizes via clamp (see `tokens/typography.css`). Reading measure 58–64ch. No universal line-count maximum: headlines wrap as the language requires; the composition adapts, the text is never truncated.
- **Spacing**: 4px base, tokens to 256px plus fluid `--space-section` (64–160) and `--space-silence` (96–256). Silence is a token.
- **Grid**: 12 columns, max 1440 (1680 wide), margins 20–64px, gutters 16–32px. Named compositions: 1/2, 1/3+2/3, 4/12+8/12, 5/12+7/12, full bleed, narrow (560), reading (680), workspace (1280). Tablet 8 cols, mobile 4.
- **Geometry**: editorial surfaces 0–4px, photography 12px (20px hero), UI containers 12px, controls 8px (*Core rule*: buttons, inputs, chips, segmented — stable, never pill). Chips are controls → 8px. Primary CTA in Stories/Editions *may* be pill (one per view). Rule: *one* radius family per screen region.
- **Borders**: hairline `rgba(ink,.12)` for internal division (decorative), `grey-400` (`--color-border-control`) where a border *identifies* a control (inputs, checkboxes, outlined buttons), `grey-200` for non-interactive containers, ink 1px for rules and emphasis. Borders replace cards, shadows and background changes.
- **Shadows**: none on content. `--shadow-float` on dropdown/popover/toolbar, `--shadow-dialog` on dialogs. Never on cards.
- **Backgrounds**: flat paper. No gradients except the photo scrim (`--color-overlay-scrim`, ink 0→55%). No textures, no patterns.
- **Imagery**: documentary, warm-neutral, slightly desaturated, visible grain OK. People, hands, workshops, inhabited places. Placed with visible margins in editorial; edge-to-edge only in Image Monument and Core media managers.
- **Animation**: calm/physical/precise. Micro 160–220ms `ease-standard`; page 400ms `ease-out`; editorial 600ms `ease-editorial` — fade, 8–16px translate, clip reveal, 1–2% image scale, line draw. No bounce, parallax, spring.
- **Hover**: text links gain ink underline; buttons darken to `--ink-soft` (primary) or fill `--mist` (secondary); images scale 1.02 over 600ms. **Press**: no shrink; background steps one grey darker. **Focus**: 2px paper gap + 2px ink ring.
- **Transparency/blur**: `--color-material-glass` + 12px blur only for map controls, image viewer chrome, floating toolbars.
- **Cards**: exist only as functional components (place/person/event in lists); hairline border, 12px radius, no shadow, image on top with 12px radius inside. Default answer to "should this be a card?" is no — use a rule.
- **Fixed elements**: top bar 64px on paper with hairline bottom rule; Core sidebar 240px with hairline right rule; floating toolbars glass.

## ICONOGRAPHY
- No icon set was provided. **Substitution: Lucide (CDN), stroke 1.5px, 20px in UI, 16px in metadata**, flagged for replacement. Icons are monochrome ink, never coloured, never filled.
- Icons appear only where they replace a word (close, search, upload, menu, chevrons) or in icon-only buttons with tooltips. Never decorative rows of icon + stat.
- Unicode used as typographic marks: `·` separator, `→` in text links, `°` `′` in coordinates, `—` in captions. No emoji.
- **Symbol** (`assets/hearth-symbol.svg`, `-notext.svg`): stamp, seal, map marker, favicon, avatar fallback, watermark, loader (slow 12s rotation). Wordmark (`assets/hearth-wordmark.svg`) for headers, covers and poster foot. Rule: wordmark is the navigation default; the symbol replaces it only where width forbids it (≤390px top bar) and links home; wordmark never used as a stamp. Below 24px the symbol's inner text is illegible — use `hearth-symbol-notext.svg` (circle + mark), never a plain dot.

## INDEX
- `styles.css` → `tokens/{fonts,colors,typography,spacing,geometry}.css`
- `assets/` logos, fonts
- `guidelines/` foundation cards: principles, colours, type scale, italic mark, spacing, grid, geometry, borders, shadows, motion, captions, photography, symbol usage, editions guardrails, accessibility, density, responsive
- `components/actions` Button, IconButton, Link, Icon · `components/forms` Input, Textarea, Select, Search, Checkbox, Radio, Toggle · `components/display` Chip, Badge, Status, Tooltip, Skeleton, Spinner, Progress · `components/navigation` Tabs, Segmented, Breadcrumb, Pagination, Dropdown, TopNav, Sidebar · `components/feedback` Toast, Alert, EmptyState, Dialog, Drawer · `components/data` Table, DataRow, FilterBar, Timeline, Uploader · `components/cards` PlaceCard, PersonCard, EventCard, MapItem, MapMarker · `components/editorial` Hero, Caption, PullQuote, Facts, Coordinates, Contributor, LocalTip, Rhythm, StorySequence, TerritoryIndex, TerritoryCover, Gallery
- `ui_kits/stories/` index.html + Homepage.jsx, Territory.jsx, Person.jsx (Example 01–03) · `ui_kits/core/` index.html + CreatorApp.jsx, DMS.jsx (Example 04–05) · `ui_kits/editions/` index.html poster (Example 06)

## Components (full list)
Actions: Button, IconButton, Link, Icon · Forms: Input, Textarea, Select, Search, Checkbox, Radio, Toggle · Display: Chip, Badge, Status, Tooltip, Skeleton, Spinner, Progress · Navigation: Tabs, Segmented, Breadcrumb, Pagination, Dropdown (also context menu), TopNav, Sidebar · Feedback: Toast, Alert, EmptyState, Dialog, Drawer · Data: Table, DataRow, FilterBar, Timeline (also version history / approval flow), Uploader (media manager) · Cards: PlaceCard, PersonCard, EventCard, MapItem, MapMarker · Editorial: Hero (image / text / split / portrait), TerritoryCover (also Event Cover), Caption, Coordinates, PullQuote, Facts, Contributor, LocalTip, Rhythm (Seasonality), Gallery (Photo Essay / Archive), StorySequence, TerritoryIndex.
Not built as separate components (compose instead): Editor (Textarea + Uploader + Drawer), Comments/Review/Notification (Timeline + DataRow + Toast), Command palette (Search + Dropdown items).

## Editorial composition archetypes
Image Monument (Hero image) · Text Monument (Hero text; homepage) · Split Story (Hero split, 7/5 with rule) · Archive (Gallery archive / PlaceCard grid) · Portrait Story (Hero portrait + PullQuote) · Object Study (white sheet + isolated image + caption; Person page) · Field Notes (EventCard / Caption + Coordinates) · Sequence (StorySequence, Gallery sequence) · Editorial Index (TerritoryIndex).

## PHASE 7 — Design Director review
Still generic: the Core table + sidebar could be any well-made admin tool; what makes it Hearth is only the Albra question column and the rule-based layout — keep both, or it dissolves. Placeholder photography (picsum) weakens every screen; the system depends on documentary images.
Could age badly: the 12px glass pill markers; clamp-driven 152px display type on ultrawide screens (cap at 160). Pill + rectangle button mix needs discipline — one primary pill per view.
Not Hearth enough yet: motion is specified but barely present; the mobile compositions exist as rules, not screens; iconography is Lucide, a substitute.
Truly distinctive: Monument & Footnote scale, the Italic Mark, the archive Caption, the Stamp + Year Rule, rules instead of cards, the Rhythm chart, the typographic Territory Index, the Object Study on a white sheet.
Simplify: Badge tones (keep neutral + inverse), Hero variants could drop "text" in favour of composed sections.
Make more radical: push Display XL to 180px on covers; allow the year rule to run the full page height; set Editions titles to collide with the photograph.
- `SKILL.md`, `thumbnail.html`

## Figma structure (recommended)
00 Foundations · 01 Brand · 02 Typography · 03 Colors · 04 Grid & Layout · 05 Icons · 06 Primitives · 07 Components · 08 Product Patterns · 09 Editorial Patterns · 10 Photography · 11 Motion · 12 Editions · 13 Accessibility · 14 Examples · 15 Deprecated. Token names in `tokens/*.css` map 1:1 to Figma Variables (`color/background/canvas`, `space/8`, `radius/control`, `motion/editorial`).

## Intentional additions
- Lucide icons (no set supplied). Status, EmptyState, Caption, Coordinates are named in the brief and built as components.


## CONSOLIDATION 2026-09-09 — corrections and deliberate exceptions
Initial state preserved in `_backup/2026-09-09/`. Not published.

**Corrected**
- Contrast recomputed from tokens (`guidelines/contrast-matrix.md`, 41 pairs). Grey-400 demoted to large text / control borders; `--color-text-tertiary` → Grey-500; per-accent `--on-accent-*`; `--color-border-control` (Grey-400) separated from decorative hairlines.
- Documentation contradictions resolved with rule status (mandatory / default / expressive option): Albra ≥22px in approved roles; White as Object Study option; accent ≤10% default in Stories, full field in Editions; chips = controls (8px), pill opt-in for Stories/Editions CTA only, never Core; symbol may replace wordmark in ≤767px top bar and links home; no serif/sans quotas, no 10:1 ratio, no 3-line cap.
- Fonts declared honestly: family "Avenir" (Roman 400, Heavy 700) from the supplied `avenir-roman.ttf` / `Avenir_Heavy.ttf`. The brief names Avenir Next; the files are Avenir. `--font-ui` falls back to "Avenir Next" then Helvetica. Medium/Demi and true italics not provided — UI uses 400/700 only.
- Density wired: `--control-height` / `--row-height` consumed by Button, Input, Select, Search, Sidebar, Segmented, Table, DataRow; compact keeps 44px targets on coarse pointers.
- Accessibility: Dialog/Drawer focus trap, Escape, focus return, unmount when closed; Tabs + TabPanel with roving focus and aria-controls; Dropdown menu keyboard; Chip remove as a separate button; Checkbox real indeterminate + visible focus; Field required/aria-describedby; Table row checkbox names, caption, indeterminate header; MapMarker as button; Tooltip aria-describedby + Escape; Spinner/Skeleton honour reduced motion; Segmented as radiogroup.
- Responsive: TopNav mobile menu (symbol home link), Sidebar rail <1024, Hero/TerritoryCover/Gallery/StorySequence/Rhythm stack below 768 (text → image → caption, no sticky, Rhythm as month ranges), `focal` prop for crops, ink field when no image.
- Demo navigation: hash router with back/forward and unknown-hash fallback; toasts state what requires a backend; Creator App shows normal/loading/error/empty.
- Creator App narrative column 5/12 → 4/12, header strip below 1024.
- Photography: 10 Hearth photographs in `assets/photos/` (chef in kitchen, baker with bread, field/mountain/sea, fisherman on nets, winemaker in cellar, village from the sea, tower and scrub, historical re-enactment, host at the counter, market stall). Files arrived without credits, so **no author, place or date is shown**; captions describe only what is visible. Demo copy (Antonia, Gennaro, Bacoli…) is illustrative and was aligned to the subjects (Antonia is a baker). Slots without a matching photograph (bread-making hands, truffle, map) keep the explicit "FOTO DA INSERIRE · subject" placeholder from `ui_kits/placeholder.js`. Focal points via `focal` on Hero/TerritoryCover.
- Editions: three distinct posters (typographic, object study on White, photographic on Rosso), caption/foot collision fixed, preview vs print requirements stated, symbol-notext below 24px.
- Templates: `templates/stories`, `templates/core`, `templates/editions` consume the shared bundle via `ds-base.js`; `@startingPoint` tags removed.

**Deliberate exceptions**
- Warning `#A8742C` stays at 3.81:1: used only with icon + Ink label, never as sole text.
- Grey-300 remains for disabled and decorative rules only.
- Editions posters use fixed 500×700 px sheets: that is the medium, not a responsive surface.

**Verification**
- Done (browser, `guidelines/responsive-check.html` — open it and run `runCheck()` in the console): five digital screens (Homepage, Territorio, Persona, Creator App, DMS) rendered in iframes at 320/360/390/768/1024/1440 and measured. Result before fixes: horizontal overflow on Homepage ≤390 (TerritoryIndex meta `nowrap`) and Creator App ≤390 (TopNav action slot); 0 broken images; focus ring present as `:focus-visible` box-shadow in `tokens/geometry.css`. - Fixes applied: meta wraps, TopNav moves its action slot into the mobile menu, Stories TopNav switches to symbol + menu below 1024px (wordmark and links collided at ~924px) and the desktop grid uses `minmax(0,1fr)` columns with a 28px gap, Link min-height 24px. Contrast recomputed for Core-mode neutrals. Compiler clean.
- Pending (need a fresh bundle or a human): re-run of the same measurement after this turn's bundle recompiles (component fixes ship on the next compile); 200% zoom — type is px-based, so browser zoom equals the 720px-wide layout, which was measured, but OS text-only scaling was not; keyboard walkthrough of Dialog/Drawer/Tabs/Dropdown by a person (the automated probe only counted focusables and confirmed the ring rule); screen-reader run; print output; Editions posters (fixed 500×700, not responsive by design).

## INDEX — templates
Layer order: Foundations (`tokens/`) → Components (`components/`) → Patterns (`guidelines/`, `readme.md`) → Templates (`templates/`) → Product. A template composes; it never redefines.
- `templates/stories/` — `Stories.dc.html` base · `StoriesTerritory.dc.html` demo (Territory page, Bacoli) · README
- `templates/core/` — `Core.dc.html` base (DMS list) · `CoreCreator.dc.html` demo (Creator content workspace) · README
- `templates/editions/` — `Editions.dc.html` poster base with tweaks · `EditionsEvent.dc.html` demo (local event page) · README
- `guidelines/contrast-matrix.md` — computed contrast pairs

## TEMPLATE AUDIT (after the three demos) — resolved
Promoted (each with `.d.ts`, prompt and card), scoped by layer:
- **Shared layout primitive** `components/layout/` — `PageGrid` (canonical max-width, margins, gutters, 12 columns, `spaceTop` rhythm).
- **Shared typography primitive** `components/typography/` — `EditorialBody` (Albra reading paragraph, italic signature).
- **Shared patterns** `components/patterns/` — `SectionHead` (eyebrow + Albra title + optional action; `rule=false` for stacked column heads), `MapSurface` (map geometry: photo radius, subtle ground, glass controls, markers as children).
- **Core-scoped** `components/core/` — `Stepper` (guided-flow header).
- **Stories-scoped** `components/stories/` — `SiteFooter` (public footer; Core/Editions do not depend on it).
- **Editions-scoped** `components/editions/` — `PosterPreview` (5:7 miniature on paper / giallo / rosso).

Not promoted (deliberate): `--type-display-xxl` — Editions cover scale stays a local, motivated exception; an accent "field" concept stays inside Editions (`EditionsEvent` `field` tweak: paper / giallo / rosso via `--accent-*` tokens, on-accent Ink for all three).

Remaining local overrides after refactor:
- Editions demo: cover typography above the display scale (`clamp(64px,12vw,200px)`); cover section and its footer composed inline (Editions must not depend on Stories `SiteFooter`; the footer is wrapped in `PageGrid`).
- Stories demo: TopNav in flow on an Ink strip above TerritoryCover (a `TopNav overlay` prop would remove the wrapper).
- Core demo: orientation column layout inline (4/12 + 8/12, sticky) with no collapse below 1024px — candidate `GuidedLayout` if a second guided flow appears.
- Wrapper `<div style="grid-column:…">` around `x-import`s: the DC runtime cannot place a mounted component on a grid line directly.

Architecture now: Foundations (`tokens/`) → shared primitives (`components/layout`, `components/typography`, `components/actions`, `components/forms`, `components/display`) → shared patterns (`components/patterns`, `components/editorial`, `components/cards`, `components/data`, `components/feedback`, `components/navigation`) → mode-specific (`components/core`, `components/stories`, `components/editions`) → Templates (`templates/`) → Products.

Scoping doubts to flag: `components/editorial/*` (Hero, TerritoryCover, Gallery, Rhythm, Caption…) is in practice Stories-scoped but lives in the shared layer because Editions and Core previews reuse Caption/Hero; `components/cards/*` likewise. `MapSurface` is shared but its only consumer today is Stories. `Uploader`/`Table`/`Sidebar` are Core in practice and could move under `components/core/` when the layer is formalised.

Components (index): Button, IconButton, Link, Icon, Input, Textarea, Select, Search, Checkbox, Radio, Toggle, Chip, Badge, Status, Progress, Spinner, Skeleton, Tooltip, Toast, Alert, EmptyState, Dialog, Drawer, TopNav, Sidebar, Tabs, TabPanel, Segmented, Breadcrumb, Pagination, Dropdown, Table, DataRow, FilterBar, Uploader, Timeline, PlaceCard, PersonCard, EventCard, MapItem, MapMarker, Hero, TerritoryCover, Caption, PullQuote, Facts, Rhythm, LocalTip, TerritoryIndex, Gallery, StorySequence, Contributor, PageGrid, EditorialBody, SectionHead, MapSurface, Stepper, SiteFooter, PosterPreview.
Previous audit (candidates, missing components/tokens, overrides, duplications) resolved above; `ui_kits/*` remain as visual reference and thumbnails until templates are validated in a consuming project.
