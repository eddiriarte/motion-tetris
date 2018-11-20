
const weltContainer = document.getElementById('welt');

// Erzeugt die `welt` Matrix
const weltErzeugen = (hoehe, breite) => {
    return (new Array(hoehe)).fill((new Array(breite)).fill(0));
};

// initialisiert den Weltraster
const weltContainerInitialisieren = (welt, prefix) => {
    weltContainer.innerHTML = welt
        .map(
            (zellen, y) => zellen.reduce(
                (spalten, _, x) => `${spalten}<div id="${prefix}_${y}-${x}" class="tetro"></div>`, ''
            )
        )
        .join('<br>');
}

const tetroStyleNamen = {
    1: 'O',
    2: 'I',
    3: 'L',
    4: 'J',
    5: 'S',
    6: 'Z',
    7: 'T'
};

// aktualisiert die Darstellung auf dem Browser
const weltRasterAktualisieren = (welt, tetro, prefix) => {
    for (let zeile = 0; zeile < welt.length; zeile++) {
        for (let spalte = 0; spalte < welt[0].length; spalte++) {
            const zelle = document.getElementById(`${prefix}_${zeile}-${spalte}`);
            zelle.classList.remove('gefuellt');
            
            if (tetro.istAufZelle(zeile, spalte)) {
                const tetroZelle = tetro.zelle(zeile, spalte);
                if (tetroZelle > 0)
                    zelle.classList.add('gefuellt');
            }

            const weltZelle = welt[zeile][spalte];
            if (weltZelle > 0)
                zelle.classList.add('gefuellt');
        }
    }
};

export {
    weltContainer,
    weltErzeugen,
    weltContainerInitialisieren,
    weltRasterAktualisieren,
}
