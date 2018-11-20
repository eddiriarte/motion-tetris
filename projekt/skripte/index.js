import '../darstellung/tetris.scss';

import * as Bausteine from './Figuren';


const breite = 9;

const hoehe = 15;

let welt =  null;

let tetro = [];

// Die Koordinaten/Position des Bausteins auf der Weltmatrix.
const position = {
    zeile: 3,
    spalte: 3
};

// Erzeugt die `welt` Matrix
const weltErzeugen = () => {
    welt = (new Array(hoehe)).fill((new Array(breite)).fill(0));
};

/**
 * @TODO Vervöllständige diese Funktion
 */
const naechstesBaustein = () => {
    const steine = Object.keys(Bausteine);
    
    // tetro = /* ...? */
    
    rasterAktualisieren();
};

/**
 * @TODO Finde den Fehler und behebe es
 */
const rasterAktualisieren = () => {
    const weltContainer = document.getElementById('welt');

    for (let zeile = 0; zeile < hoehe; zeile++) {
        for (let spalte = 0; spalte < breite; spalte++) {
            const zelle = document.getElementById(`welt_${zeile}-${spalte}`);
            zelle.classList.remove('gefuellt');

            const y = zeile - position.zeile;
            const x = spalte - position.spalte;
            if (x < 0 || x >= tetro.length || y < 0 || y >= tetro.length) {
                continue;
            }

            const tetroZelle = tetro[y][x];
            if (tetroZelle < 1) {
                zelle.classList.add('gefuellt');
            }

        }
    }
};

/**
 * =================================================================
 * IM MOMENT BRAUCH IHR EUCH NICHT UM DIESEN TEIL ZU KÜMMERN!
 * =================================================================
 */

const weltContainerInitialisieren = () => {
    const weltContainer = document.getElementById('welt');
    weltContainer.innerHTML = welt
        .map(
            (zellen, y) => zellen.reduce(
                (spalten, _, x) => `${spalten}<div id="welt_${y}-${x}" class="tetro"></div>`, ''
            )
        )
        .join('<br>');
}

const zeileSetzen = (zeile) => {
    position.zeile = zeile;
    rasterAktualisieren();
}

const spalteSetzen = (spalte) => {
    position.spalte = spalte;
    rasterAktualisieren();
}

const starten = () => {
    tetro = null;
    weltErzeugen();
    weltContainerInitialisieren();
}

starten();

Object.assign(window, {
    rasterAktualisieren,
    naechstesBaustein,
    zeileSetzen,
    spalteSetzen,
    position
})
