
const weltContainer = document.getElementById('welt');

// Erzeugt die `welt` Matrix
const weltErzeugen = (hoehe, breite) => {
    return (new Array(hoehe)).fill((new Array(breite)).fill(0));
};

// initialisiert den Weltraster
const weltContainerInitialisieren = (welt) => {
    weltContainer.innerHTML = welt
        .map(
            (zellen, y) => zellen.reduce(
                (spalten, _, x) => `${spalten}<div id="welt_${y}-${x}" class="tetro"></div>`, ''
            )
        )
        .join('<br>');
}

// aktualisiert die Darstellung auf dem Browser
const weltRasterAktualisieren = (welt, tetro) => {
    for (let zeile = 0; zeile < welt.length; zeile++) {
        for (let spalte = 0; spalte < welt[0].length; spalte++) {
            const zelle = document.getElementById(`welt_${zeile}-${spalte}`);
            zelle.classList.remove('gefuellt');
            
            if (tetro.istNichtAufZelle(zeile, spalte)) {
                continue;
            }

            const tetroZelle = tetro.zelle(zeile, spalte);
            if (tetroZelle > 0) {
                zelle.classList.add('gefuellt');
            }

        }
    }
};

export {
    weltContainer,
    weltErzeugen,
    weltContainerInitialisieren,
    weltRasterAktualisieren,
}
