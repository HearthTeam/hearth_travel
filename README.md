# hearth.travel

Sito pubblico Hearth: sito statico multipagina, pubblicato con GitHub Pages
dalla root del branch `main`.

Nessun framework, nessun bundler, nessuna dipendenza npm, nessun build step:
**quello che è nel repo è il sito**.

## Struttura

| URL | File |
|---|---|
| `/` | `index.html` |
| `/territori` | `territori/index.html` |
| `/creator` | `creator/index.html` |
| `/attivita` | `attivita/index.html` |
| `/attivita/sito` | `attivita/sito/index.html` |
| `/pass` | `pass/index.html` |
| `/website-business/` | `website-business/index.html` |
| qualsiasi altro | `404.html` |

Supporto:

- `support.js` — runtime di rendering, nessuna dipendenza esterna.
- `_ds/hearth-design-system-…/` — Design System Hearth: token CSS, `styles.css`,
  `_ds_bundle.js`, font.
- `assets/` — fotografie, video, wordmark, simbolo Vesta, mappa SVG.
- `image-slot.js` — web component per gli slot immagine (pagina Creator).
- `attivita/sito/DemoRequest.dc.html` e `pass/HearthPassCard.dc.html` non sono
  pagine: sono frammenti caricati dalla pagina accanto a cui stanno. Non vanno
  spostati e non sono in sitemap.

Tutti i percorsi interni sono **root-absolute** (`/assets/…`, `/_ds/…`,
`/support.js`): il sito funziona solo servito come document root del dominio,
non da una sottocartella. Il file `.nojekyll` è necessario, altrimenti Jekyll
ignorerebbe la cartella `_ds/`.

## `/website-business/`

La landing «Siti web per piccole attività a 299 €» resta pubblicata dov'era e
non è stata toccata dalla migrazione. È autonoma: usa percorsi **relativi** e ha
un proprio `_ds/` (`hearth-design-system-7ae78b54…`) e una propria `assets/`,
quindi non condivide nulla con il resto del sito e non va spostata sotto un
percorso diverso.

Convive con `/attivita/sito`, che è la pagina «sito per le attività» del nuovo
pacchetto (demo a 20 €): sono due proposte commerciali distinte. I link interni
del nuovo sito (navbar, CTA in `/attivita` e `/pass`) puntano a
`/attivita/sito`.

Nota: le configurazioni in `_deploy/config/` prevedono un 301 da
`/website-business` a `/attivita/sito`. **Non è più valido** — vanno corrette
prima di usarle su un'altra piattaforma.

## Modifiche ai contenuti

I sorgenti `.dc.html` sono in `_deploy/source/`. La procedura è: modificare il
sorgente, copiarlo nella posizione corrispondente in root e riscrivere i
riferimenti relativi in assoluti (`_ds/…` → `/_ds/…`, `assets/…` →
`/assets/…`, `./support.js` → `/support.js`), oltre ai link interni
(`Hearth Pass.dc.html` → `/pass` e così via). È l'unica differenza tra sorgente
e pagina pubblicata.

`_deploy/` non è parte del sito: è escluso da `robots.txt` e non è in sitemap.

## Da completare prima del lancio

Vedi `_deploy/README_DEPLOY.md` (URL di conversione ancora placeholder, form
demo senza backend, pagine `/creator/punti-hearth` e `/pass/regole` mancanti,
`assets/video/territori-hero.mp4` da ricomprimere: 19,3 MB) e
`_deploy/RELEASE_CHECKLIST.md`.

## Pubblicazione

1. Push sul branch `main`.
2. **Settings → Pages**: *Deploy from a branch*, branch `main`, cartella `/ (root)`.
3. Dominio custom `hearth.travel` — definito in `CNAME`.
