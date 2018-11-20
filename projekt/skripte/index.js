import '../darstellung/tetris.scss';

import * as Bausteine from './Figuren';
import Tetromino from './Tetromino';

const breite = 9;

const hoehe = 15;

let welt =  null;

let tetro = null;

/**
 * @TODO Finde die geeigneten `keyCodes`, um die position des Tetrominos zu aktualisieren. 
 * 
 * Hinweise: 
 *    - https://keycode.info/
 */
document.addEventListener('keyup', (event) => {
    // hier kommt dein Code:
    

    // ------
    rasterAktualisieren();
    positionZeigen();
});



/**
 * =================================================================
 * IM MOMENT BRAUCH IHR EUCH NICHT UM DIESEN TEIL ZU KÜMMERN!
 * =================================================================
 */

 // Erzeugt die `welt` Matrix
const weltErzeugen = () => {
    welt = (new Array(hoehe)).fill((new Array(breite)).fill(0));
};

// Generiert ein zufälligen Tetromino-Objekt 
const naechstesBaustein = () => {
    const steine = Object.keys(Bausteine);
    const zufaelligenStein = steine[Math.floor(Math.random() * steine.length)];
    
    tetro = new Tetromino(3, 3, Bausteine[zufaelligenStein]);
};

// aktualisiert die Darstellung auf dem Browser
const rasterAktualisieren = () => {
    const weltContainer = document.getElementById('welt');

    for (let zeile = 0; zeile < hoehe; zeile++) {
        for (let spalte = 0; spalte < breite; spalte++) {
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

// initialisiert den Weltraster
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

const positionZeigen = () => {
    document.querySelector('#tetro-zeile span').innerText = tetro.zeile;
    document.querySelector('#tetro-spalte span').innerText = tetro.spalte;
}

const reset = () => {
    naechstesBaustein();
    rasterAktualisieren();
    positionZeigen();
}

const starten = () => {
    tetro = null;
    weltErzeugen();
    weltContainerInitialisieren();
    reset();
}

starten();

Object.assign(window, {
    reset
})
