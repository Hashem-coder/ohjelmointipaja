// Tehtävä 1
function jarjesta() {
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  document.getElementById("t1").innerHTML = ("Annoit luvut: " + luku1 + '  ' + luku2 +  '  ' + luku3 + "<br>");
  if (luku1 < luku2 && luku1 < luku3) {
    if (luku2 < luku3) {
      document.getElementById("t1").innerHTML = "Lukujen järjestys on: " + luku1 +  '  ' + luku2 + '  ' + luku3;
    }
    else {
      document.getElementById("t1").innerHTML = "Lukujen järjestys on: " + luku1 +  '  ' + luku3 + '  ' + luku2;
    }
  }
  else if (luku2 < luku1 && luku2 < luku3) {
    if (luku1 < luku3) {
      document.getElementById("t1").innerHTML = "Lukujen järjestys on: " + luku2 +  '  ' + luku1 + '  ' + luku3;
    }
    else {
      document.getElementById("t1").innerHTML = "Lukujen järjestys on: " + luku2 +  '  ' + luku3 + '  ' + luku1;

    }
  }
  else if (luku3 < luku1 && luku3 < luku2)

    if (luku1 < luku2) {
      document.getElementById("t1").innerHTML = "Lukujen järjestys on: " + luku3 +  ' ' + luku1 + ' ' + luku2;
    }
    else {
      document.getElementById("t1").innerHTML = "Lukujen järjestys on: " + luku3 +  ' ' + luku2 + ' ' + luku1;

    }

}


// Tehtävä 2
function etsiSuurin() {
  let luku01, luku02, luku03, luku04, luku05, suurin;
  luku01 = parseInt(document.getElementById("luku01").value);
  luku02 = parseInt(document.getElementById("luku02").value);
  luku03 = parseInt(document.getElementById("luku03").value);
  luku04 = parseInt(document.getElementById("luku04").value);
  luku05 = parseInt(document.getElementById("luku05").value);
  if (luku01 < luku02 && luku03 < luku02 && luku04 < luku02 && luku05 < luku02) {
    suurin = luku02;
  }
  else if (luku01 < luku03 && luku04 < luku03 && luku05 < luku03) {
    suurin = luku03;
  }
  else if (luku01 < luku04 && luku05 < luku04) {
    suurin = luku04;
  }
  else if (luku01 < luku05) {
    suurin = luku05;
  }
  else {
    suurin = luku01;
  }
  document.getElementById("t2").innerHTML = "Annoit luvut: " + luku01 + ' ' + luku02 + ' ' + luku03 + ' ' + luku04 + ' ' + luku05;
  document.getElementById("t2").innerHTML = "<br>Suurin niistä on: " + suurin;

}

// Tehtävä 3
function Tarkasta() {
  let luku7
  luku7 = parseInt(document.getElementById("luku7").value);
  if (luku7 % 2 == 0)
    document.getElementById("t3").innerHTML = "luku on parillinen"
  else {
    document.getElementById("t3").innerHTML = "luku on pariton";
  }
}

// Tehtävä 4
function naytaAjoneuvo() {
  let ika = parseInt(document.getElementById("ika").value)
  if (ika < 16) {
    document.getElementById("t4").innerHTML = "saat ajaa polkupyörää";
  }
  else if (ika < 18) {
    document.getElementById("t4").innerHTML = "saat ajaa mopoa";
  }
  else {
    document.getElementById("t4").innerHTML = "saat ajaa auto";
  }
}

// Tehtävä 5
function kaanna() {
  let kielet = document.getElementById("kielet").value;
  if (kielet == "english") {
    document.getElementById("t5").innerHTML = "Hello world!";
  }
  else if (kielet == "sweden") {
    document.getElementById("t5").innerHTML = "Hej världen!";
  }
  else {
    document.getElementById("t5").innerHTML = "Hola Mundo!";
  }
}
