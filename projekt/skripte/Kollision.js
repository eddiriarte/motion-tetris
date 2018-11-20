const kollidiertNachLinks = (welt, stein) => {
    return !stein.muster.every((spaltenListe, zeile) => spaltenListe.every(
        (tetroZelle, spalte) => {
            // ist leer und kann nicht kollidieren.
            if (tetroZelle === 0) {
                return true;
            }

            const y = stein.zeile + zeile;

            // ist noch nicht auf der Welt und kann nicht kollidieren
            if (y < 0) {
                return true;
            }

            const x = stein.spalte + spalte;

            // ist am linken Rand und kann nicht weiter nach Links
            if (x <= 0) {
                return false;
            }

            // andere Fällen werden noch nicht geprüft
            return true;
        }
    ));
};

const kollidiertNachRechts = (welt, stein) => {
    return !stein.muster.every((spaltenListe, zeile) => spaltenListe.every(
        (tetroZelle, spalte) => {
            // ist leer und kann nicht kollidieren.
            if (tetroZelle === 0) {
                return true;
            }

            const y = stein.zeile + zeile;

            // ist noch nicht auf der Welt und kann nicht kollidieren
            if (y < 0) {
                return true;
            }

            const x = stein.spalte + spalte;

            // ist am rechten Rand und kann nicht weiter nach Rechts
            if (x >= welt[0].length - 1) {
                return false;
            }

            // andere Fällen werden noch nicht geprüft
            return true;
        }
    ));
};

const kollidiertNachUnten = (welt, stein) => {
    return !stein.muster.every((spaltenListe, zeile) => {

        const naechsteWeltZeile = (stein.zeile + zeile + 1);

        // Zeile ist nicht auf der Welt und Stein liegt zu weit oben.
        if (naechsteWeltZeile < 0) {
            return true;
        }

        // Tetro zeile ist leer und kann nicht kollidieren
        if (spaltenListe.every((zelle) => zelle === 0)) {
            return true;
        }

        // Tetro ist am unteren Rand und kann nicht weiter nach Unten.
        if (naechsteWeltZeile >= welt.length) {
            return false;
        }

        return spaltenListe.every((tetroZelle, spalte) => {
            const weltSpalte = stein.spalte + spalte;

            // Spalte ist Links oder Rechts vom Rand und kann nicht kollidieren. 
            if (weltSpalte < 0 || weltSpalte >= welt[0].length) {
                return true;
            }

            const weltZelle = welt[naechsteWeltZeile][weltSpalte];

            // Tetrozelle oder Weltzelle muss 0 sein! 
            return (weltZelle * tetroZelle) === 0;
        });

    });
}

export {
    kollidiertNachUnten,
    kollidiertNachRechts,
    kollidiertNachLinks
};