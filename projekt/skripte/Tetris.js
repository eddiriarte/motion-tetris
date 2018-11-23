import * as Bausteine from './Figuren';
import Tetromino from './Tetromino';
import {
    weltErzeugen, 
    weltContainerInitialisieren,
    weltRasterAktualisieren,
    tetroAufWeltAblegen,
    tetroVorschauContainerInitialisieren,
    tetroVorschauAktualisieren,
    findeVolleZeilen,
    loescheWeltZeile,
    spielAnzeigenAktualisieren
} from './Welt';
import {
    gestenHandlerSetzen,
    gestenHandlerLoeschen
} from './GestenAdapter';

// Standartwerte, können später überschrieben werden.
const defaultOptions = {
    hoehe: 16,
    breite: 10,
    weltZellenPrefix: 'welt_',
    vorschauZellenPrefix: 'vorschau_',
    containerId: 'tetris',
    naechsteTetroId: 'vorschau',
    punkteId: 'punkte',
    zeilenTotalId: 'zeilen-total'
};

// Generiert ein zufälligen Tetromino-Objekt 
const zufaelligenBaustein = () => {
    const steine = Object.keys(Bausteine);
    const zufaelligenStein = steine[Math.floor(Math.random() * steine.length)];
    const tetromino = Bausteine[zufaelligenStein];
    
    return new Tetromino(1 - tetromino.length, 3, tetromino);
};

class Tetris {

    // Initialisierung
    constructor(options = {}) {
        Object.assign(this, defaultOptions, options);

        this.welt = weltErzeugen(this.hoehe, this.breite);
        weltContainerInitialisieren(this.welt, this.weltZellenPrefix);
        tetroVorschauContainerInitialisieren(this.vorschauZellenPrefix);
    }

    // Spiel starten
    starten() {
        if (this.gestartet) {
            return;
        }

        this.gestartet = true;

        this.punkte = 0;
        this.zeilenAnzahl = 0;
        this.level = 1;
        this.tetro = zufaelligenBaustein();
        this.naechstesTetro = zufaelligenBaustein();

        this.spielZeitSchleife();
        this.aktualisieren();

        this.tastenLauscher = this.tastenEventsBehandeln.bind(this);
        document.addEventListener('keyup', this.tastenLauscher);
        gestenHandlerSetzen(this.gestenEventsBehandeln.bind(this));
    }

    // Darstellungskomponente aktualisieren
    aktualisieren() {
        weltRasterAktualisieren(this.welt, this.tetro, this.weltZellenPrefix);
        tetroVorschauAktualisieren(this.naechstesTetro, this.vorschauZellenPrefix);
        spielAnzeigenAktualisieren(this.punkte, this.zeilenAnzahl, this.level);
    }

    gameOver() {
        if (!this.gestartet) {
            return;
        }

        this.gestartet = false;
        
        this.stopZeitSchleife();
        document.removeEventListener('keyup', this.tastenLauscher);
        gestenHandlerLoeschen();
    }

    // Loop ausführen
    spielZeitSchleife() {
        if (!this.gestartet) { return; }

        if (this.tetro.kannNachUnten(this.welt)) {
            this.tetro.nachUnten();
        } else {
            this.tetroAblegen();
        }
        
        this.aktualisieren();
        this.zeitSchleife = setTimeout(
            this.spielZeitSchleife.bind(this),
            this.levelGeschwindigkeit()
        );
    }

    // f(x) = 1300 / ( x * 0.95 ) + 70 , wobei 'x' das aktuelle level ist.
    levelGeschwindigkeit() {
        return Math.floor(1300 / ( this.level * 0.95 ) + 70);
    }

    // Loop stoppen
    stopZeitSchleife() {
        if (this.zeitSchleife) {
            this.zeitSchleife = clearTimeout(this.zeitSchleife);
        }
    }

    tetroNachLinksBewegen () {
        if (this.tetro.kannNachLinks(this.welt)) {
            this.tetro.nachLinks();
        }
    }
    
    tetroNachRechtsBewegen() {
        if (this.tetro.kannNachRechts(this.welt)) {
            this.tetro.nachRechts();
        }
    }

    tetroNachUntenBewegen() {
        console.log('tetroNachUntenBewegen');
    }

    // Tetromino solange nach unten verschieben bis es kollidiert.
    tetroNachUntenSchieben() {
        this.stopZeitSchleife();
        if (!this.tetro.kannNachUnten(this.welt)) {
            this.tetroAblegen();
            this.spielZeitSchleife();
            return;
        }

        this.tetro.nachUnten();
        this.aktualisieren();
        setTimeout(this.tetroNachUntenSchieben.bind(this), 40);
    }

    // Tetromino auf `welt` ablegen
    tetroAblegen() {
        if (this.tetro.zeile <= 0 && this.tetro.muster[0].some((spalte) => spalte !== 0)) {
            this.gameOver();
            return;
        }

        this.punkte += 10;

        // f(x) = 1 + (x / 2000) , wobei 'x' den aktuellen Highscore ist.
        this.level = Math.floor(1 + ( this.punkte / 2000));

        this.welt = tetroAufWeltAblegen(this.welt, this.tetro);
        this.gefuellteZeilenLoeschen();
        
        this.aktualisieren();

        this.tetro = this.naechstesTetro;
        this.naechstesTetro = zufaelligenBaustein();
    }

    // Gefüllte Zeilen löschen
    gefuellteZeilenLoeschen() {
        const tetris = this;
        const volleZeilen = findeVolleZeilen(this.welt);

        volleZeilen.forEach((index, counter) => {
            tetris.welt.splice(index, 1, (new Array(tetris.breite)).fill(10));
            
            this.punkte += (this.breite * 20);
            this.zeilenAnzahl++;

            tetris.aktualisieren();
            setTimeout(() => { loescheWeltZeile(index, this); }, 70 + (70 * counter));
        });
    }

    // Behandlung der Tastatur-Events
    tastenEventsBehandeln() {
        switch (event.keyCode) {
            case 37:
                this.tetroNachLinksBewegen();
                break;
            case 39:
                this.tetroNachRechtsBewegen();
                break;
            case 38:
                this.tetro.drehen(this.welt);
                break;
            case 40:
                this.tetroNachUntenSchieben();
                break;
            default:
                console.log(event.keyCode);
        }
        
        this.aktualisieren();
    }

    gestenEventsBehandeln(geste) {
        console.log(geste.direction);

        switch(geste.direction) {
            case 'Long up':
            case 'Up':
                this.tetro.drehen(this.welt);
                break;
            case 'Long left':
            case 'Left':
                this.tetroNachLinksBewegen();
                break;
            case 'Long right':
            case 'Right':
                this.tetroNachRechtsBewegen();
                break;
            case 'Long down':
            case 'Down':
                this.tetroNachUntenSchieben();
                break;
            default:
                console.log(geste.direction);
        }

        this.aktualisieren();
    }
}

export default Tetris;
