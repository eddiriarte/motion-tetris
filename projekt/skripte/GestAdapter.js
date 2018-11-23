require('gest');

const gest = window.gest;

let lauscher = null;

const gestenLauschStarten = (haendler) => {
    lauscher = haendler;
    document.addEventListener('gest', lauscher);
    gest.start();
    gest.options.debug(true);
};

const gestenLauschBeenden = () => {
    console.log('gestenLauschBeenden', lauscher)
    lauscher = document.removeEventListener('gest', lauscher);
    gest.stop();
};

export {
    gest,
    gestenLauschStarten,
    gestenLauschBeenden
};
