// Tehtävä 1
function Tarkista() {
    let luku
    luku = parseInt(document.getElementById("luku").value);
    if (luku >= 0)
        document.getElementById("result1").innerHTML = "luku on positiivinen";
    else {
        document.getElementById("result1").innerHTML = "luku on negatiivinen";
    }
}

// Tehtävä 2
function muutaSanaksi() {
    let viikonpaiva = parseInt(document.getElementById("viikonpaiva").value);
    switch (viikonpaiva) {
        case 1:
            document.getElementById("result2").innerHTML = "maanantai"
            break;
        case 2:
            document.getElementById("result2").innerHTML = "tiistai"
            break;
        case 3:
            document.getElementById("result2").innerHTML = "keskiviikko"
            break;
        case 4:
            document.getElementById("result2").innerHTML = "torsati"
            break;
        case 5:
            document.getElementById("result2").innerHTML = "perjantai"
            break;
        case 6:
            document.getElementById("result2").innerHTML = "lauantai"
            break;
        case 7:
            document.getElementById("result2").innerHTML = "sunnuntai"
            break;
        default:
            document.getElementById("result2").innerHTML = "Annapa oikea luku (1-7)";
    }

}

// Tehtävä 3
function tarkistaKarkaus() {
    let vuosi = parseInt(document.getElementById("vuosi").value);
    if (vuosi % 4 == 0 && vuosi % 100 != 0) {
        document.getElementById("result3").innerHTML = "vuosi on karkausvuosi";
    }
    else if (vuosi % 400 === 0) {
        document.getElementById("result3").innerHTML = "vuosi on karkausvuosi";

    }
    else {
        document.getElementById("result3").innerHTML = "vuosi ei ole karkausvuosi";
    }

}

// Tehtävä 4
function laskeKeskiarvo() {
    var luku1 = parseInt(document.getElementById("luku01").value);
    var luku2 = parseInt(document.getElementById("luku02").value);
    var luku3 = parseInt(document.getElementById("luku03").value);
    var luku4 = parseInt(document.getElementById("luku04").value);
    var luku5 = parseInt(document.getElementById("luku05").value);
    var summa, keskiarvo;
    summa = luku1 + luku2 + luku3 + luku4 + luku5;
    keskiarvo = summa / 5;
    document.getElementById("result4").innerHTML = "lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}

// Tehtävä 5
function tee() {
    let kerrottava = parseInt(document.getElementById("kerrottava").value);
    let tuloste = ""
    for (let i = 1; i < 11; i++) {
        tuloste += kerrottava + " * " + i + " = " + kerrottava * i + "<br/>";
    }

    document.getElementById("result5").innerHTML = tuloste;
}

