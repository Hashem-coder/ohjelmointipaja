// Tehtävä 1
function tulostaParilliset() {
    let parillinen = parseInt(document.getElementById("parillinen").value);
    let a = " ";
    for (let i = 2; i <= parillinen; i = i + 2) {
        a += i + " ";
    }
    document.getElementById('result1').innerHTML = a;
}

//Tehtävä 2
function muunnaSana() {
    let sana = document.getElementById("sana").value;
    for (let i = 0; i < sana.length; i++) {
        document.getElementById("result2").innerHTML += sana[i] + "ö";
    }
}

//Tehtävä 3
function onkoKirjaian() {
    let etsittava = document.getElementById("etsittava").value;
    for (let i = 0; i <= etsittava.length; i++) {
        if (etsittava[i] == "ö") {
            document.getElementById("result3").innerHTML = "Sanassa on Ö kirjain";
            i = etsittava.length;
        }
        else if (etsittava[i] == "Ö") {
            document.getElementById("result3").innerHTML = "Sanassa on Ö kirjain";
            i = etsittava.length;
        }
        else {
            document.getElementById("result3").innerHTML = "Sanassa ei ole Ö kirjainta";
        }
    }
}

//Tehtävä 4
function teeKertoma() {
    var kertoma = parseInt(document.getElementById("kertoma").value);
    var summa = 1;
    for (var i = 1; i <= kertoma; i++) {
        summa = summa * i;

    }
    document.getElementById("result4").innerHTML = "luvun " + kertoma + " kertoma on " + summa;

}

//Tehtävä 5
function hipHeijaa() {
    for (var i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            document.getElementById("result5").innerHTML += "   hipHeijaa  _ ";
        }
        else if (i % 5 == 0) {
            document.getElementById("result5").innerHTML += "   Heijaa  _ ";
        }
        else if (i % 3 == 0) {
            document.getElementById("result5").innerHTML += "  hip  _ ";
        }
        else {
            document.getElementById("result5").innerHTML += i + " ";
        }
    }
}


//Tehtävä 6
function kymmenen() {
    for (var i = 1; i <= 10; i++) {
        document.getElementById("result6").innerHTML += i + " , ";
    }
}


//Tehtävä 7
function laskeYhteen() {
    var summa = 0;
    for (var i = 1; i <= 10; i++) {
        summa += i;
    }
    document.getElementById("result7").innerHTML = "kymmenen ensimmäistä numeroa yhteensä on " + summa;
}

//Tehtävä 8
function laskePotenssi() {
    let perusluku = parseInt(document.getElementById("perusluku").value);
    let potenssi = parseInt(document.getElementById("potenssi").value);
    summa = perusluku
    for (let i = 1; i < potenssi; i++) {
        summa *= perusluku;
    }
    document.getElementById("result8").innerHTML = perusluku + " potenssiin " + potenssi + " on " + summa;

}

//Tehtävä 9
function etsiSuurinPienin() {
    let luku = [], temp;
    for (let i = 1; i <= 5; i++) {
        temp = parseInt(document.getElementById("luku[" + i + "]").value);
        temp = parseInt(temp);
        luku.push(temp)
    }
    luku = luku.sort((a, b) => a - b);
    document.getElementById('result9').innerHTML = 'Pienin luku: ' + luku[0] + ' ja suurin luku: ' + luku[luku.length - 1];
}

// Tehtävä 10
function Salasanaksi() {
    let salasana = document.getElementById("salasana").value;
    let taulukko = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'Ä', 'Ö', 'Å', 'W']
    let uusiSana = "";
    let temp;
    for (let i = 0; i < salasana.length; i++) {
        temp = Math.floor(Math.random() * taulukko.length);
        uusiSana += salasana[i] + taulukko[temp];
    }
    document.getElementById("result10").innerHTML = uusiSana;
}

//Tehtävä 11
function tulostaSummat() {
    let palku, alku1, psumma = 0, summa1 = 0, luvut1 = '', luvut2 = '';
    let ykkos = parseInt(document.getElementById('ykkos').value);
    let kakkos = document.getElementById('kakkos').value;
    if (ykkos % 2 == 0) {
        palku = ykkos;
    }
    else {
        palku = ykkos + 1;
    }
    for (var b = palku; b <= kakkos; b += 2) {
        luvut1 += b + ' ';
        psumma += b;
    }
    if (ykkos % 2 == 0) {
        alku1 = ykkos + 1;
    }
    else {
        alku1 = ykkos;
    }
    for (var r = alku1; r <= kakkos; r += 2) {
        luvut2 += r + ' ';
        summa1 += r;
    }
    document.getElementById("result11").innerHTML = ' Parilliset numerot: ' + luvut1 + ' ja niiden summa: ' + psumma + '<br/> Parittomat luvut: ' + luvut2 + ' ja niiden summa: ' + summa1 + ' ';
}