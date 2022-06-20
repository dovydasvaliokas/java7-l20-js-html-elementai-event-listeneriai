window.onload = function() {
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        let eilute = nuskaitoTekstiniIvedimoLaukeli("masyvas");

        const skaiciai = splittintiSkaicius(eilute);

        let pastraipa = document.getElementById("rezultatas");
        pastraipa.innerHTML = masyvoSuma(skaiciai);
    }
}

/**
 * Nuskaito skaičių iš number įvedimo laukelio. (input:number)
 * @param {*} id - Įvedimo laukelio, iš kurio nuskaito skaičių, id.
 * @returns skaičių, kurį nuskaitė
 */
function nuskaitoTekstiniIvedimoLaukeli(id) {
    let ivedimoLaukelis = document.getElementById(id);
    return ivedimoLaukelis.value;
}

/**
 * Funkcija konvertuoja tekstinę eilutę (atskirtą kableliu ir tarpu) į skaičių masyvą
 * @param {*} eilute - tekstinė eilutė, kurioje yra surašyti skaičiai atskirti kableliu ir tarpu
 * @returns skaičių masyvą
 */
function splittintiSkaicius(eilute) {
    const skaiciai = eilute.split(", ");
    for (let i = 0; i < skaiciai.length; i++) {
        skaiciai[i] = Number.parseInt(skaiciai[i]);
        
    }
    return skaiciai;
}

/**
 * Apskaičiuoja masyvo sumą
 * @param {*} masyvas - skaičių masyvas, kurio sumos ieškom
 * @returns masyvo sumą
 */
function masyvoSuma(masyvas) {
    let suma = 0;
    for (const elementas of masyvas) {
        console.log(elementas);
        suma += elementas;
    }
    return suma;
}