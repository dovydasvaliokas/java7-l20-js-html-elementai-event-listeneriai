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


function idetiIvedimoLaukeli(elementasPriesKuriIdeti) {
    let ivedimoLaukelis = document.createElement("input");
    ivedimoLaukelis.setAttribute("type", "number");
    ivedimoLaukelis.classList.add("masyvas");
    elementasPriesKuriIdeti.before(ivedimoLaukelis);
}



function nuskaitytiSkaicius(langeliai) {
    const skaiciai = [];
    for (let i = 0; i < langeliai.length; i++) {
        skaiciai.push(langeliai[i].valueAsNumber);
        
    }
    return skaiciai;
}