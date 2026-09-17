# source/

I sorgenti delle sei pagine, più i due frammenti (`HearthPassCard.dc.html`, `DemoRequest.dc.html`) e il runtime.

Differenza rispetto a `production/`: qui i riferimenti sono **relativi** (`_ds/…`, `assets/…`, `./support.js`) e i link interni puntano ai nomi dei file (`Hearth Pass.dc.html`). Servono per aprire una pagina in locale con `_ds/` e `assets/` come cartelle sorelle, o per continuare il lavoro di design.

Per aprire una pagina in locale: copiare in questa cartella `_ds/` e `assets/` da `../production/` e aprire il file `.dc.html` nel browser (o servire la cartella con un server statico qualsiasi).

Per rigenerare `production/` da questi file, vedi la sezione BUILD di `../README_DEPLOY.md`.
