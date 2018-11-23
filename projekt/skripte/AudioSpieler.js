
const musikSchalter = document.getElementById('musik-schalter');

const songPlayer = document.getElementById('tetris-song');

let musikAn = false;

const audioSchalterGedruckt = () => {
    if (!musikAn) {
        musikAn = true;
        songPlayer.play();
        musikSchalter.classList.add('aktiv');
    } else {
        musikAn = false;
        songPlayer.pause();
        musikSchalter.classList.remove('aktiv');
    }
};

Object.assign(window, { audioSchalterGedruckt })