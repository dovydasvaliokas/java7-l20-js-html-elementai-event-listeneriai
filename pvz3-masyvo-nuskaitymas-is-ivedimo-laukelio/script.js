window.onload = function() {
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function() {
        let eilute = nuskaitoTekstiniIvedimoLaukeli("masyvas");
        console.log(eilute);

        const skaiciai = splittintiSkaicius(eilute);

        
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