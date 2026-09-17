# README_DEPLOY — nuovo sito pubblico Hearth

## COS'È

Il nuovo sito pubblico Hearth: sei pagine editoriali (brand, territori, creator, attività, Hearth Pass, sito per le attività). Questo pacchetto contiene il sito già pronto da pubblicare, i sorgenti, le configurazioni server e la checklist di rilascio.

Nessun deploy è stato eseguito. Nessun commit, nessun push.

## DOMINIO

`https://hearth.travel`

Tutti i canonical, l'Open Graph e la sitemap sono già scritti su questo dominio.

## STACK

Nessun framework, nessun bundler, nessuna dipendenza npm: **sito statico multipagina**.

Ogni pagina è un documento HTML che carica tre cose:

| File | Ruolo |
|---|---|
| `support.js` | runtime di rendering (~1 file, nessuna dipendenza esterna) |
| `_ds/hearth-design-system-…/` | Design System Hearth: token CSS, `styles.css`, `_ds_bundle.js` (componenti), font |
| `assets/` | fotografie, video, wordmark, simbolo Vesta, mappa SVG |

`image-slot.js` è un web component usato per gli slot immagine da riempire (pagina Creator).

Non serve Node in produzione. Non c'è build step: **quello che è in `production/` è il sito**.

## BUILD

Nessun comando. Il pacchetto è già l'output.

Se in futuro si modificano i sorgenti in `source/`, la procedura è: copiare il `.dc.html` modificato nella posizione corrispondente in `production/` (vedi tabella ROUTING) e riscrivere i riferimenti relativi in assoluti — `_ds/…` → `/_ds/…`, `assets/…` → `/assets/…`, `./support.js` → `/support.js` — oltre ai link interni (`Hearth Pass.dc.html` → `/pass` e così via). È l'unica differenza tra `source/` e `production/`.

## OUTPUT DA PUBBLICARE

```
HEARTH_DEPLOY_PACKAGE/production/
```

Questa cartella va pubblicata **come document root del dominio**. Tutti i percorsi interni sono root-absolute (`/assets/…`, `/_ds/…`, `/support.js`): il sito non funziona se servito da una sottocartella.

Struttura:

```
production/
├── index.html                      → /
├── territori/index.html            → /territori
├── creator/index.html              → /creator
├── attivita/index.html             → /attivita
├── attivita/sito/index.html        → /attivita/sito
├── attivita/sito/DemoRequest.dc.html   (form, caricato dalla pagina)
├── pass/index.html                 → /pass
├── pass/HearthPassCard.dc.html         (oggetto Hearth Pass, caricato dalla pagina)
├── 404.html
├── robots.txt
├── sitemap.xml
├── support.js
├── image-slot.js
├── _ds/hearth-design-system-…/     token, CSS, bundle componenti, font
└── assets/                         photos/, video/, SVG di brand
```

I due `.dc.html` dentro `pass/` e `attivita/sito/` **non sono pagine**: sono frammenti che la pagina carica via fetch. Devono restare accanto al rispettivo `index.html` e non vanno indicizzati (non sono in sitemap; se vuoi puoi escluderli via header `X-Robots-Tag`).

## ROUTING

| URL | File servito |
|---|---|
| `/` | `index.html` |
| `/territori` | `territori/index.html` |
| `/creator` | `creator/index.html` |
| `/attivita` | `attivita/index.html` |
| `/attivita/sito` | `attivita/sito/index.html` |
| `/pass` | `pass/index.html` |
| qualsiasi altro | `404.html` |

Sono file reali su disco: **l'accesso diretto e il refresh funzionano senza rewrite applicativi**. Serve solo che il server risolva la directory sull'`index.html` (comportamento standard di Netlify, Vercel, Cloudflare Pages, Apache con `DirectoryIndex`, nginx con `index`). Le configurazioni pronte sono in `config/`.

Scegli una convenzione sullo slash finale e mantienila (i config forniti servono `/territori` senza slash e reindirizzano la forma con slash, oppure viceversa a seconda della piattaforma) — non è critico per il rendering, solo per i duplicati SEO.

## REDIRECT

Da impostare come **301 permanenti**:

| Da | A |
|---|---|
| `/website-business` (e sottopercorsi) | `/attivita/sito` |
| `/hearth-pass` (e sottopercorsi) | `/pass` |

Pronti in:

- `config/_redirects` — Netlify / Cloudflare Pages
- `config/vercel.json` — Vercel
- `config/.htaccess` — Apache (include anche cache header e `ErrorDocument`)
- `config/nginx.conf` — estratto di server block nginx

Non sono state aggiunte altre route legacy: se ne esistono altre online oggi, segnalale e le mappiamo prima del rilascio.

## CONFIGURAZIONE — URL DA INSERIRE PRIMA DEL LIVE

Tutti gli URL di conversione sono centralizzati in testa allo `<script data-dc-script>` di ciascuna pagina, nella costante `ROUTES` (più tre costanti dedicate nella pagina Creator e due nel form demo). Si modificano con una ricerca e sostituzione sul valore attuale.

| Nome | Valore attuale | Dove viene usato | Stato | Valore da inserire |
|---|---|---|---|---|
| `eventTool` | `https://eventi.hearth.app/crea` | CTA «Configura gratis il tuo evento» — `/`, `/territori`, `/creator` | **PLACEHOLDER** | URL reale del tool Eventi |
| `register` | `https://attivita.hearth.app/registrazione` | CTA «Registra la tua attività» — `/attivita`, navbar | **PLACEHOLDER** | URL registrazione Hearth Business |
| `production` | `https://attivita.hearth.app/produzione` | CTA «Richiedi foto e video» — `/attivita`, `/pass`, `/attivita/sito` | **PLACEHOLDER** | URL flusso produzione foto/video |
| `services` | `https://attivita.hearth.app/servizi` | definito ma non più linkato in pagina | inutilizzato | può restare o essere rimosso |
| `buy` | `https://hearth.app/pass` | CTA «Ottieni Hearth Pass» e i tre tagli — `/pass` | **PLACEHOLDER** | URL acquisto Pass (accetta `?pass=3day\|10day\|annuale`) |
| `join` | `https://attivita.hearth.app/pass` | CTA «Partecipa a Hearth Pass» — `/pass`, `/attivita` | **PLACEHOLDER** | URL adesione Pass per le attività |
| `apply` | `https://creator.hearth.app/candidatura` | fallback candidatura Creator | **PLACEHOLDER** | URL candidatura (oggi la CTA apre il modal app) |
| `missions` | `https://creator.hearth.app/missioni` | link «Scopri le Missioni» — `/creator` | **PLACEHOLDER** | URL Missioni |
| `APP_STORE_URL` | `https://apps.apple.com/app/hearth-creator/PLACEHOLDER` | modal «Diventa Creator» — `/creator` | **PLACEHOLDER** | URL App Store reale |
| `GOOGLE_PLAY_URL` | `https://play.google.com/store/apps/details?id=PLACEHOLDER` | modal «Diventa Creator» — `/creator` | **PLACEHOLDER** | URL Google Play reale |
| `CREATOR_DEEP_LINK` | `https://creator.hearth.app/apri` | link «Apri l'app» nel modal — `/creator` | **PLACEHOLDER** | universal / deep link app |
| `points` | `/creator/punti-hearth` | pagina regolamento Punti Hearth | **PAGINA MANCANTE** (link non cliccabile) | creare la pagina, poi riattivare il link |
| `rules` | `/pass/regole` | regolamento Hearth Pass | **PAGINA MANCANTE** (link non cliccabile) | creare la pagina, poi riattivare il link |
| `CHECKOUT_URL` | `null` | pagamento €20 della demo sito | **DA COLLEGARE** | URL checkout €20 |
| `CONTACT_ENDPOINT` | `null` | salvataggio richiesta demo | **DA COLLEGARE** | endpoint POST JSON |
| demo Dama Point | `https://damapointbenevento.vercel.app` | esempio in `/attivita/sito` | **OK** — dichiarata «Concept demo» in pagina | eventuale URL definitivo |
| WhatsApp | `+39 379 28 444 77` | form demo + contatti | OK | — |
| Email | `info@hearth.email` | form demo, footer `/attivita/sito` | OK | — |
| `https://hearth.app` | — | voce di navigazione «Esplora», CTA viaggiatore | OK | — |

Anche con i placeholder al loro posto il sito è navigabile: i link portano su domini Hearth non ancora attivi, non su errori del sito.

## FORM

**Form richiesta demo (`/attivita/sito`)** — `attivita/sito/DemoRequest.dc.html`.

Stato: **NON operativo lato server.** Non esiste backend.

Comportamento attuale, volutamente onesto: alla conferma il form **non dichiara mai di aver salvato la richiesta**. Compone il riepilogo dei dati inseriti e lo consegna manualmente via WhatsApp (`393792844477`) o email (`info@hearth.email`), che restano l'unico canale reale.

Per renderlo operativo servono due costanti in testa a quel file:

- `CONTACT_ENDPOINT` — endpoint che accetta `POST` JSON con i campi del form (il codice di invio è già scritto e attivo appena la costante non è `null`; l'errore di rete non blocca la consegna manuale).
- `CHECKOUT_URL` — pagamento dei €20 della demo, se si vuole incassare online invece che concordare il pagamento nel contatto.

Nessun altro form nel sito.

## SEO

| Route | title | description | canonical | robots | og:type/locale/site_name | og:title/description | og:image | twitter:card |
|---|---|---|---|---|---|---|---|---|
| `/` | ok | ok | `https://hearth.travel/` | index,follow | ok | ok | `/assets/photos/paese-dal-mare.jpg` | summary_large_image |
| `/territori` | ok | ok | `https://hearth.travel/territori` | index,follow | ok | ok | `/assets/photos/banco-mercato.jpg` | summary_large_image |
| `/creator` | ok | ok | `https://hearth.travel/creator` | index,follow | ok | ok | `/assets/photos/pescatore-reti.jpg` | summary_large_image |
| `/attivita` | ok | ok | `https://hearth.travel/attivita` | index,follow | ok | ok | `/assets/photos/oste-bancone.jpg` | summary_large_image |
| `/pass` | ok | ok | `https://hearth.travel/pass` | index,follow | ok | ok | `/assets/photos/chef-cucina.jpg` | summary_large_image |
| `/attivita/sito` | ok | ok | `https://hearth.travel/attivita/sito` | index,follow | ok | ok | `/assets/photos/fornaia-pane.jpg` | summary_large_image |
| `404.html` | ok | — | — | **noindex** | — | — | — | — |

Tutti gli `og:image` sono URL assoluti su `https://hearth.travel/assets/photos/…` e i file esistono nel pacchetto. Sono fotografie 4:5 o 3:2 del reportage Hearth, non immagini OG composte: se serve un'immagine social dedicata (1200×630 con wordmark) va prodotta a parte.

`sitemap.xml` contiene solo le sei route pubbliche. `robots.txt` consente tutto e dichiara la sitemap. Favicon: `/assets/hearth-symbol-notext.svg` (SVG), apple-touch-icon `/assets/hearth-symbol.svg`. Non esiste un `.ico` di fallback per browser molto vecchi.

## DEPLOY

In sintesi, quello che deve fare chi pubblica:

1. caricare il contenuto di `production/` come document root di `hearth.travel` (upload, rsync, o repo statico collegato alla piattaforma);
2. applicare la configurazione della propria piattaforma da `config/`;
3. verificare HTTPS e la risoluzione directory → `index.html`;
4. impostare i due redirect 301;
5. sostituire gli URL di conversione quando disponibili (tabella sopra);
6. passare `RELEASE_CHECKLIST.md`.

Tipi MIME da verificare se il server è configurato a mano: `.otf` (`font/otf`), `.ttf` (`font/ttf`), `.mp4` (`video/mp4`), `.svg` (`image/svg+xml`). Font e video non caricati sono il sintomo tipico di un MIME sbagliato.

## NOTE DI PERFORMANCE

Nessuna ottimizzazione aggressiva è stata applicata per non alterare il rendering approvato. Stato reale:

- Le fotografie sono i file originali, non ci sono varianti responsive né WebP/AVIF. Sono l'asset più pesante del sito.
- I due video (`chi-vive-un-luogo.mp4` in homepage, `territori-hero.mp4` in `/territori`) sono muti, in loop, `playsinline`, con poster estratto dal primo frame; vengono caricati via fetch dopo il rendering, quindi non bloccano la prima schermata.
- **`territori-hero.mp4` pesa 19,3 MB**: è da solo circa tre quarti del peso del sito (pacchetto totale ~26 MB, di cui 3,6 MB di fotografie e 0,3 MB di font). Il file è quello fornito e non è stato ricompresso. Una ricompressione (H.264 ~2–4 Mbps, o una variante WebM) lo ridurrebbe di un ordine di grandezza a parità di resa a schermo: consigliata prima del lancio se la connessione mobile è una priorità, altrimenti subito dopo. Il poster copre comunque l'attesa.
- CSS e JS non sono minificati: sono i file del Design System, serviti così come sono.
- Consigliati lato server, senza toccare i file: gzip/brotli su HTML/CSS/JS e cache lunga sugli asset immutabili (già inclusa in `.htaccess` e `nginx.conf`).
- Eventuale conversione delle fotografie in WebP e aggiunta di `loading="lazy"` sulle immagini sotto la piega sono migliorie post-lancio: richiedono una verifica visiva perché toccano il rendering.

## PROBLEMI NOTI, NON CORRETTI IN QUESTA CONSEGNA

1. `/creator/punti-hearth` e `/pass/regole` non esistono: i contenuti che spiegano Punti Hearth, Creator Pool e regole Pass restano in pagina, ma il link al regolamento è disattivato. Da creare prima di comunicare pubblicamente il modello economico.
2. Gli URL di conversione sono placeholder su domini Hearth non ancora attivi (tabella sopra).
3. Il form demo non ha backend: consegna manuale via WhatsApp/email.
4. Lo screenshot dell'app nel modal Creator è uno slot vuoto; i badge App Store e Google Play sono segnaposto tipografici, da sostituire con l'artwork ufficiale.
5. Alcuni crediti fotografici e gli enti dei territori reali sono indicati come «da confermare» dove il dato reale non è stato fornito.
6. I KPI del Patrimonio Italiano Invisibile™ sono stati rimossi dalla homepage in attesa di dati verificabili.
