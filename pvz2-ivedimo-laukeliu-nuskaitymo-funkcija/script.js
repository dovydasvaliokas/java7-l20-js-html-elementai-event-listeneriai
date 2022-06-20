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


function nuskaitoIvedimoLaukeli(id) {
    let ivedimoLaukelis = document.getElementById(id);
    return ivedimoLaukelis.valueAsNumber;
}

function keturkampioPerimetras(a, b, c, d) {
    return a + b + c + d;
}