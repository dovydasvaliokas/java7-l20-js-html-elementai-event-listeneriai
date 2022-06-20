window.onload = function() {
    let pliusoMygtukas = document.getElementById("pliusoMygtukas");
    let skaiciavimoMygtukas = document.getElementById("skaiciavimoMygtukas");

    pliusoMygtukas.onclick = function() {
        idetiIvedimoLaukeli(pliusoMygtukas);
    }

    skaiciavimoMygtukas.onclick = function() {
        const langeliai = document.getElementsByClassName("masyvas");
        const skaiciai = nuskaitytiSkaicius(langeliai);

        console.log(skaiciai);
    }
    

}

/**
 * Funkcija įdeda skaitinį įvedimo laukelį (input:number) su klase "masyvas" prieš paduotą elementą.
 * @param {*} elementasPriesKuriIdeti - Elementas prieš kurį norima įdėti įvedimo laukelį (pvz. prieš pliuso mygtuką)
 */
function idetiIvedimoLaukeli(elementasPriesKuriIdeti) {
    let ivedimoLaukelis = document.createElement("input");
    ivedimoLaukelis.setAttribute("type", "number");
    ivedimoLaukelis.classList.add("masyvas");
    elementasPriesKuriIdeti.before(ivedimoLaukelis);
}


/**
 * Nuskaito skaičius iš įvedimo langelių ir juos įdeda į skaičių masyvą.
 * @param {*} langeliai - įvedimo langelių (input) masyvas
 * @returns skaičių masyvą, kurį nuskaitė iš langelių
 */
function nuskaitytiSkaicius(langeliai) {
    const skaiciai = [];
    for (let i = 0; i < langeliai.length; i++) {
        skaiciai.push(langeliai[i].valueAsNumber);
        
    }
    return skaiciai;
}