require('gest');

const gest = window.gest;

const kameraSchalter = document.getElementById('kamera-schalter');

let kameraAn = false;

let gestenHaendler = null;

const gestenHandlerSetzen = (haendler) => {
    gestenHaendler = haendler;
};

const gestenHandlerLoeschen = () => {
    gestenLauschBeenden();
    gestenHaendler = null;
}

const kameraSchalterGedruckt = () => {
    if (!kameraAn) {
        gestenLauschStarten();
        kameraSchalter.classList.add('aktiv');
    } else {
        gestenLauschBeenden();
        kameraSchalter.classList.remove('aktiv');
    }
};

const gestenLauschStarten = () => {
    if (!gestenHaendler) {
        console.warn('Kamera einschalten oder Gesten-Händler definieren!');
        return;
    }
    
    document.addEventListener('gest', gestenHaendler);
    gest.start();
    gest.options.debug(true);
    kameraAn = true;
};

const gestenLauschBeenden = () => {
    if (!gestenHaendler) {
        console.warn('Kamera einschalten oder Gesten-Händler definieren!');
        return;
    }

    document.removeEventListener('gest', gestenHaendler);
    gest.stop();
    kameraAn = false;
};

Object.assign(window, { kameraSchalterGedruckt });

export {
    gest,
    gestenLauschStarten,
    gestenLauschBeenden,
    gestenHandlerSetzen,
    gestenHandlerLoeschen,
    kameraSchalterGedruckt,
};
