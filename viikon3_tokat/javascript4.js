//Tehtävä 1
function laskePisteet() {
    let pisteet = 0;
    let annettuSana = document.getElementById("sana").value;
    for (let i = 0; i <= annettuSana.length; i++) {
        switch (annettuSana[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "n":
            case "N":
            case "s":
            case "S":
            case "t":
            case "T":
                pisteet++;
                break;
            case "o":
            case "O":
            case "ä":
            case "Ä":
            case "k":
            case "K":
            case "l":
            case "L":
                pisteet += 2;
                break;
            case "u":
            case "U":
            case "m":
            case "M":
                pisteet += 3;
                break;
            case "y":
            case "Y":
            case "h":
            case "H":
            case "j":
            case "J":
            case "p":
            case "P":
            case "r":
            case "R":
            case "v":
            case "V":
                pisteet += 4;
                break;
            case "ö":
            case "Ö":
            case "d":
            case "D":
                pisteet += 7;
                break;
            case "b":
            case "B":
            case "f":
            case "F":
            case "g":
            case "G":
                pisteet += 8;
                break;
            case "c":
            case "C":
                pisteet += 10;
                break;
            default:
            // pisteet += 12;

        }
        // alert(pisteet);
    } document.getElementById("result1").innerHTML = pisteet;
}

// Tehtävä 2
function arvoNumerot() {
    let temp;
    for (let i = 1; i <= 7; i++) {
        temp = Math.floor(Math.random() * 47) + 1;
        document.getElementById("result2").innerHTML += temp + " ";
    }
}

//Tehtävä 3
function muunnataulukko() {
    let jono = [];
    jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    let taulu = "<table border = '1'";

    for (let i = 0; i < jono.length; i++) {
        taulu += "<tr>;"

        for (let j = 0; j < jono[i].length; j++) {
            taulu += "<td>" + jono[i][j] + "</td>";
        }
        taulu += "</tr>";
    }

    taulu += "</table>";
    document.getElementById("result3").innerHTML = taulu;
}

//Tehtävä 4
function arvoKortti() {
    let paka = [''];
    let temp;
    let maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
    let numerot = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    laskuri = 0;
    for (let i = 0; i < maat.length; i++) {
        for (j = 0; j < numerot.length; j++) {
           paka[laskuri] = maat[i] + numerot[j] + " ";
           laskuri++;

        }
    }
    for(let k = 0; k < 5; k++){
    temp = paka[Math.floor(Math.random()*paka.length)+1];
    document.getElementById("result4").innerHTML += temp + " ";
}
}

//Kiiiiiiiiiiiiitos sinulle Jyri :)