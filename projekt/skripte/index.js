import '../darstellung/tetris.scss';

import * as Bausteine from './Figuren';
import Tetromino from './Tetromino';
import {
    weltErzeugen, 
    weltContainerInitialisieren,
    weltRasterAktualisieren
} from './Welt';

const breite = 9;

const hoehe = 15;

let welt =  null;

let tetro = null;

const tastenEventsBehandeln = (event) => {
    switch (event.keyCode) {
        case 37:
            tetroNachLinksBewegen();
            break;
        case 39:
            tetroNachRechtsBewegen();
            break;
        case 40:
            tetroNachUntenSchieben();
            break;
        default:
            console.log(event.keyCode);
    }    

    // ------
    darstellungAktualisieren();
};

const tetroNachLinksBewegen = () => {
    if (tetro.kannNachLinks(welt)) {
        tetro.nachLinks();
    }
};

const tetroNachRechtsBewegen = () => {
    if (tetro.kannNachRechts(welt)) {
        tetro.nachRechts();
    }
};

const tetroNachUntenSchieben = () => {
    if (tetro.kannNachUnten(welt)) {
        tetro.nachUnten();
    }
};

document.addEventListener('keyup', tastenEventsBehandeln);

// Hier kommt dein Code:
//    - alle 800 ms soll der Baustein nach unten geschoben werden (`setTimeout`, `setInterval`)
//    - wenn die Position des Tetrominos größer ist als die Höhe des 
//      Spielfelds, dann soll ein neuer Tetromino angezeigt werden


//----



/**
 * =================================================================
 * IM MOMENT BRAUCH IHR EUCH NICHT UM DIESEN TEIL ZU KÜMMERN!
 * =================================================================
 */


// Generiert ein zufälligen Tetromino-Objekt 
const naechstesBaustein = () => {
    const steine = Object.keys(Bausteine);
    const zufaelligenStein = steine[Math.floor(Math.random() * steine.length)];
    const tetromino = Bausteine[zufaelligenStein];
    
    tetro = new Tetromino(1 - tetromino.length, 3, tetromino);
};

const positionZeigen = () => {
    document.querySelector('#tetro-zeile span').innerText = tetro.zeile;
    document.querySelector('#tetro-spalte span').innerText = tetro.spalte;
}

const darstellungAktualisieren = () => {
    weltRasterAktualisieren(welt, tetro);
    positionZeigen();
}

const starten = () => {
    welt = weltErzeugen(hoehe, breite);
    weltContainerInitialisieren(welt);
    naechstesBaustein();
    darstellungAktualisieren();
}

starten();

