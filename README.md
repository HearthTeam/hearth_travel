# Hearth per il tuo territorio

Landing page statica pronta per GitHub Pages.

La pagina funziona sia tramite GitHub Pages/HTTP sia aprendo direttamente
`index.html` con un doppio clic. In modalità `file://` vengono caricati i font
offline, evitando richieste bloccate dal browser.

## Pubblicazione

1. Eseguire il push sul branch `main`.
2. In **Settings → Pages**, selezionare **Deploy from a branch**.
3. Scegliere il branch `main` e la cartella `/ (root)`.

Il file `.nojekyll` evita elaborazioni indesiderate da parte di Jekyll. Tutti i
percorsi sono relativi, quindi il sito funziona correttamente anche sotto il
percorso di progetto `/hearth_travel/`.

## Struttura

- `index.html`: shell HTML valida, metadati SEO e bootstrap.
- `css/styles.css`: stile responsive.
- `assets/brand`: marchio e logotipo.
- `assets/fonts`: font locali.
- `assets/imagery`: fotografie ottimizzate in WebP.
- `assets/js/home.template.js`: template della landing.
- `assets/js/home.logic.data.js`: logica interattiva della landing.
- `assets/js/app.js`: caricamento e gestione del template.
- `assets/js/vendor`: runtime e librerie locali.
- `css/fonts.css`: font per HTTP e GitHub Pages.
- `css/fonts-offline.css`: font incorporati per l’apertura tramite `file://`.
