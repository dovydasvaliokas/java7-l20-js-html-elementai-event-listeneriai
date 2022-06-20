window.onload = function() {

    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        let a = nuskaitoIvedimoLaukeli("a");
        let b = nuskaitoIvedimoLaukeli("b");
        let c = nuskaitoIvedimoLaukeli("c");
        let d = nuskaitoIvedimoLaukeli("d");

        let pastraipa = document.getElementById("rezultatas");
        pastraipa.innerHTML = "Keturkampio perimetras yra: " + keturkampioPerimetras(a, b, c, d);
    }
    
}

/**
 * Nuskaito skaičių iš number įvedimo laukelio. (input:number)
 * @param {*} id - Įvedimo laukelio, iš kurio nuskaito skaičių, id.
 * @returns skaičių, kurį nuskaitė
 */
function nuskaitoIvedimoLaukeli(id) {
    let ivedimoLaukelis = document.getElementById(id);
    return ivedimoLaukelis.valueAsNumber;
}

/**
 * Apskaičiuoja keturkampio perimetrą.
 * @param {*} a - pirma kraštinė
 * @param {*} b - antra kraštinė
 * @param {*} c trečia kraštinė
 * @param {*} d - ketvirta kraštinė
 * @returns perimetrą
 */
function keturkampioPerimetras(a, b, c, d) {
    return a + b + c + d;
}