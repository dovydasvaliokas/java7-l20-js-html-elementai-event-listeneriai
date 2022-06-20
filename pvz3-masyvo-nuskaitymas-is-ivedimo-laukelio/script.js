window.onload = function() {
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        let eilute = nuskaitoTekstiniIvedimoLaukeli("masyvas");

        const skaiciai = splittintiSkaicius(eilute);

        let pastraipa = document.getElementById("rezultatas");
        pastraipa.innerHTML = masyvoSuma(skaiciai);
    }
}


function nuskaitoTekstiniIvedimoLaukeli(id) {
    let ivedimoLaukelis = document.getElementById(id);
    return ivedimoLaukelis.value;
}


function splittintiSkaicius(eilute) {
    const skaiciai = eilute.split(", ");
    for (let i = 0; i < skaiciai.length; i++) {
        skaiciai[i] = Number.parseInt(skaiciai[i]);
        
    }
    return skaiciai;
}


function masyvoSuma(masyvas) {
    let suma = 0;
    for (const elementas of masyvas) {
        console.log(elementas);
        suma += elementas;
    }
    return suma;
}