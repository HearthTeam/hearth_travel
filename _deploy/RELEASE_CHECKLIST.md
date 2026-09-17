# RELEASE CHECKLIST — hearth.travel

Da passare dopo la pubblicazione di `production/` come document root.

## Infrastruttura

- [ ] dominio `hearth.travel` configurato e propagato
- [ ] HTTPS attivo, certificato valido
- [ ] redirect `www` → dominio canonico (o viceversa), una sola forma
- [ ] risoluzione directory → `index.html` attiva
- [ ] configurazione della piattaforma applicata da `config/`
- [ ] MIME corretti per `.otf`, `.ttf`, `.mp4`, `.svg`
- [ ] gzip/brotli attivi su HTML, CSS, JS

## Route raggiungibili

- [ ] `/` — homepage
- [ ] `/territori`
- [ ] `/creator`
- [ ] `/attivita`
- [ ] `/attivita/sito`
- [ ] `/pass`
- [ ] refresh diretto (F5) su ognuna delle cinque route interne
- [ ] URL inesistente → `404.html` con status HTTP 404

## Redirect

- [ ] `/website-business` → `/attivita/sito` (301)
- [ ] `/website-business/qualcosa` → `/attivita/sito` (301)
- [ ] `/hearth-pass` → `/pass` (301)
- [ ] `/hearth-pass/qualcosa` → `/pass` (301)

## Asset

- [ ] font Albra e Avenir caricati (i titoli non ricadono su Georgia/Helvetica)
- [ ] fotografie visibili su tutte le pagine
- [ ] wordmark e simbolo Vesta visibili
- [ ] mappa SVG visibile in homepage e `/territori`
- [ ] video homepage «Chi vive un luogo lo racconta» parte in loop, muto
- [ ] video hero `/territori` parte in loop, muto, senza stacco dal poster
- [ ] `/pass` mostra l'oggetto Hearth Pass (3 Day / 10 Day / Annuale)
- [ ] `/attivita/sito` mostra l'esempio Dama Point
- [ ] favicon visibile nella tab

## Navigazione

- [ ] navbar: Esplora · Per i territori · Attività · Creator · Hearth Pass
- [ ] «Esplora» → `https://hearth.app`
- [ ] voce attiva corretta su ogni pagina (su `/attivita/sito` resta attiva «Attività»)
- [ ] simbolo Vesta cliccabile → `/`, con micro-interazione al passaggio del mouse
- [ ] wordmark cliccabile → `/`
- [ ] menu mobile: apre, elenca le cinque voci, chiude
- [ ] footer: nessun link morto

## CTA contestuali

- [ ] `/` → «Configura gratis il tuo evento»
- [ ] `/territori` → «Configura gratis il tuo evento»
- [ ] `/creator` → «Diventa Creator» (apre il modal app: store, QR, deep link)
- [ ] `/attivita` → «Registra la tua attività»
- [ ] `/pass` → «Ottieni Hearth Pass»
- [ ] `/attivita/sito` → «Richiedi la demo · €20» (apre il pannello del form)
- [ ] modal Creator: chiusura con X, con clic sullo sfondo e con ESC
- [ ] form demo: la conferma non dichiara un salvataggio, offre WhatsApp ed email

## Contenuti commerciali

- [ ] Hearth Pass: €9,90 · 3 Day · 2 persone
- [ ] Hearth Pass: €15,90 · 10 Day · 2 persone
- [ ] Hearth Pass: €29,90 · Annuale · 1 persona
- [ ] referral QR: «fino al 50%, al netto delle commissioni previste»
- [ ] Creator Pool: 10% dei ricavi idonei
- [ ] produzione foto + video: €200, dichiarata separata
- [ ] sito web: €300, demo iniziale €20, residuo €280
- [ ] indipendenza editoriale presente su `/attivita` e `/pass`

## SEO

- [ ] `https://hearth.travel/sitemap.xml` raggiungibile
- [ ] `https://hearth.travel/robots.txt` raggiungibile e non blocca il sito
- [ ] canonical corretto su ognuna delle sei pagine
- [ ] Open Graph verificato con un debugger social (immagine, titolo, descrizione)
- [ ] `404.html` risponde `noindex`
- [ ] sitemap inviata a Google Search Console

## Responsive e qualità

- [ ] verificato a 1440px
- [ ] verificato a 1280px e 1024px (navbar senza sovrapposizioni)
- [ ] verificato a 390px (nessun overflow orizzontale)
- [ ] console del browser senza errori bloccanti su tutte e sei le pagine
- [ ] nessun 404 di rete nel pannello Network

## Da chiudere prima di spingere traffico

- [ ] URL tool Eventi inserito
- [ ] URL registrazione attività inserito
- [ ] URL produzione foto/video inserito
- [ ] URL acquisto Hearth Pass inserito
- [ ] URL adesione Pass per le attività inserito
- [ ] URL App Store e Google Play inseriti
- [ ] deep link app Creator inserito
- [ ] pagina `/creator/punti-hearth` creata e link riattivato
- [ ] pagina `/pass/regole` creata e link riattivato
- [ ] `CONTACT_ENDPOINT` del form demo collegato
- [ ] `CHECKOUT_URL` dei €20 collegato, se previsto
- [ ] screenshot app Creator e badge store ufficiali inseriti
- [ ] crediti fotografici ed enti dei territori confermati
- [ ] valutata la ricompressione di `territori-hero.mp4` (19,3 MB)
