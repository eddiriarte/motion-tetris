import '../darstellung/tetris.scss';

let welt =  null;

let breite = 0;

let hoehe = 0;

/**
 * 1. Erstelle ein leeres Array
 * 2. Erstelle zwei ineinander verschachtelte for-Schleifen
 * 3. Füge den Wert "0" für jede Zelle.
 */
const weltErzeugen = () => {
    // Liste wird zurükgesetzt
    welt = [];
    
    // Deine Schleifen kommen hier:
    
};


/**
 * Weg 1:
 * 1. Erstelle zwei ineinander verschachtelte for-Schleifen
 * 3. Füge Zellen aus `welt` zum `weltContainer` hinzu, vergiss nicht das `br` Element nach jede Zeile.
 * 
 * Weg 2:
 * 1. Iteriere direct auf `welt`, dabei könnten die Array-Funktionen `forEach`, `map` u/o `reduce` hilfreich sein.
 */
const weltAusmalen = () => {
    const weltContainer = document.getElementById('welt');
    // Container wird zurükgesetzt
    weltContainer.innerHTML = '';
    
    // Deine Schleifen kommen hier:
}


/**
 * =================================================================
 * IHR BRAUCH EUCH NICHT UM DIESEN TEIL ZU KÜMMERN IM MOMENT!
 * =================================================================
 */

const darstellungGenerieren = () => {
    hoehe = document.getElementsByName('hoehe').item(0).value;
    breite = document.getElementsByName('breite').item(0).value;
    
    weltErzeugen();
    weltAusmalen();

    document.getElementById('roh-daten').innerHTML = '<pre><code>' + JSON.stringify(welt, null, 4) + '</code></pre>';
};

Object.assign(window, { darstellungGenerieren });

