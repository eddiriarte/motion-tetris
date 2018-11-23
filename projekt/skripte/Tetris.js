import * as Bausteine from './Figuren';
import Tetromino from './Tetromino';
import {
    weltErzeugen, 
    weltContainerInitialisieren,
    weltRasterAktualisieren,
    tetroAufWeltAblegen,
    tetroVorschauContainerInitialisieren,
    tetroVorschauAktualisieren
} from './Welt';
import {
    gestenHandlerSetzen
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
        this.gestartet = true;
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
        this.zeitSchleife = setTimeout(this.spielZeitSchleife.bind(this), 800);
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
        console.log('tetroNachUntenBewegen')
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

        this.welt = tetroAufWeltAblegen(this.welt, this.tetro);
        this.gefuellteZeilenLoeschen();
        
        this.aktualisieren();

        this.tetro = this.naechstesTetro;
        this.naechstesTetro = zufaelligenBaustein();
    }

    // Gefüllte Zeilen löschen
    gefuellteZeilenLoeschen() {
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

    /**
     * @TODO Vervöllständige diese Funktion.
     */
    gestenEventsBehandeln(geste) {
        console.log(geste.direction);

        // hier kommt dein code 
        // Himweis: schau dir die methode `tastenEventsBehandeln` an

        this.aktualisieren();
    }
}

export default Tetris;
