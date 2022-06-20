window.onload = function() {
    let ilgioIvedimoLaukelis = document.getElementById("ilgis");
    console.log(ilgioIvedimoLaukelis);

    let plocioIvedimoLaukelis = document.getElementById("plotis");

    let mygtukas = document.getElementById("skaiciavimoMygtukas");
    console.log(mygtukas);

    let pastraipa = document.getElementById("rezultatoPastraipa");

    mygtukas.onclick = function() {
        let ilgis = ilgioIvedimoLaukelis.valueAsNumber;
        console.log(ilgis);

        let plotis = plocioIvedimoLaukelis.valueAsNumber;
        console.log(plotis);

        console.log(staciakampioPlotas(ilgis, plotis));

        pastraipa.innerHTML = "Stačiakampio plotas yra: " + staciakampioPlotas(ilgis, plotis);
    }
}



function staciakampioPlotas(a, b) {
    return a * b;
}