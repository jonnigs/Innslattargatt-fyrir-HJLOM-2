var kennitala = document.getElementsByClassName("kennitala").item(0);
var validKennitala = false;
var bil = false;
var birthDate = new Date(2020, 0, 1, 0, 0, 0, 0);
var kennitoluDiv = document.getElementsByClassName("kennitoluDiv").item(0);
var profdagur = document.getElementsByClassName("profdagur").item(0);
var aldursDiv = document.getElementsByClassName("aldursDiv").item(0);

var rim = document.getElementsByClassName("rim").item(0);
var samstoflur = document.getElementsByClassName("samstoflur").item(0);
var samsett = document.getElementsByClassName("samsett").item(0);
var hljodgreining = document.getElementsByClassName("hljodgreining").item(0);
var margraed = document.getElementsByClassName("margraed").item(0);
var ordhlutaeyding = document.getElementsByClassName("ordhlutaeyding").item(0);
var hljodtenging = document.getElementsByClassName("hljodtenging").item(0);

var submit = document.getElementsByClassName("button").item(0);
var nidurstoduDiv = document.getElementsByClassName("nidurstoduDiv").item(0);

document;
kennitala.addEventListener("input", (e) => {
  var validKennitala = checkKennitala(kennitala.value);

  empty(kennitoluDiv);
  var kennitoluTexti = document.createElement("p");

  if (validKennitala) {
    kennitoluTexti.textContent = "Gild kennitala";
    kennitoluTexti.className = "kennitoluTexti correct";
  } else {
    kennitoluTexti.textContent = "Ógild kennitala";
    kennitoluTexti.className = "kennitoluTexti error";
  }

  kennitoluDiv.appendChild(kennitoluTexti);
});

document;
profdagur.addEventListener("input", (e) => {
  var aldurDagar = setAldurDagar();
  bil = setAldursbil(aldurDagar);

  empty(aldursDiv);
  var dagaGamall = document.createElement("p");

  if (bil == "ungur") {
    dagaGamall.textContent = "Nemandi er of ungur fyrir HLJÓM-2";
    dagaGamall.className = "dagaGamall error";
  } else if (bil == "gamall") {
    dagaGamall.textContent = "Nemandi er of gamall fyrir HLJÓM-2";
    dagaGamall.className = "dagaGamall error";
  } else {
    dagaGamall.textContent =
      "Nemandinn er " + aldurDagar + " daga gamall og fellur undir " + bil;
    dagaGamall.className = "dagaGamall correct";
  }

  aldursDiv.appendChild(dagaGamall);
});

document;
rim.addEventListener("input", (e) => {
  var rimFaerni = rimTafla(bil, rim.value);

  if (rimFaerni == "Mjög slök færni") {
    rim.className = "rim msf";
  } else if (rimFaerni == "Slök færni") {
    rim.className = "rim sf";
  } else if (rimFaerni == "Meðalfærni") {
    rim.className = "rim mf";
  } else if (rimFaerni == "Góð færni") {
    rim.className = "rim gf";
  } else {
    rim.className = "rim neutral";
  }
});

document;
samstoflur.addEventListener("input", (e) => {
  var samstofluFaerni = samstofluTafla(bil, samstoflur.value);
  if (samstofluFaerni == "Mjög slök færni") {
    samstoflur.className = "samstoflur msf";
  } else if (samstofluFaerni == "Slök færni") {
    samstoflur.className = "samstoflur sf";
  } else if (samstofluFaerni == "Meðalfærni") {
    samstoflur.className = "samstoflur mf";
  } else if (samstofluFaerni == "Góð færni") {
    samstoflur.className = "samstoflur gf";
  } else {
    samstoflur.className = "samstoflur neutral";
  }
});

document;
samsett.addEventListener("input", (e) => {
  var samsettFaerni = samsettTafla(bil, samsett.value);
  if (samsettFaerni == "Mjög slök færni") {
    samsett.className = "samsett msf";
  } else if (samsettFaerni == "Slök færni") {
    samsett.className = "samsett sf";
  } else if (samsettFaerni == "Meðalfærni") {
    samsett.className = "samsett mf";
  } else if (samsettFaerni == "Góð færni") {
    samsett.className = "samsett gf";
  } else {
    samsett.className = "samsett neutral";
  }
});

document;
hljodgreining.addEventListener("input", (e) => {
  var hljodgreiningarFaerni = hljodgreiningarTafla(bil, hljodgreining.value);
  if (hljodgreiningarFaerni == "Mjög slök færni") {
    hljodgreining.className = "hljodgreining msf";
  } else if (hljodgreiningarFaerni == "Slök færni") {
    hljodgreining.className = "hljodgreining sf";
  } else if (hljodgreiningarFaerni == "Meðalfærni") {
    hljodgreining.className = "hljodgreining mf";
  } else if (hljodgreiningarFaerni == "Góð færni") {
    hljodgreining.className = "hljodgreining gf";
  } else {
    hljodgreining.className = "hljodgreining neutral";
  }
});

document;
margraed.addEventListener("input", (e) => {
  var margraedFaerni = margraedTafla(bil, margraed.value);
  if (margraedFaerni == "Mjög slök færni") {
    margraed.className = "margraed msf";
  } else if (margraedFaerni == "Slök færni") {
    margraed.className = "margraed sf";
  } else if (margraedFaerni == "Meðalfærni") {
    margraed.className = "margraed mf";
  } else if (margraedFaerni == "Góð færni") {
    margraed.className = "margraed gf";
  } else {
    margraed.className = "margraed neutral";
  }
});

document;
ordhlutaeyding.addEventListener("input", (e) => {
  var ordhlutaeydingarFaerni = ordhlutaeydingarTafla(bil, ordhlutaeyding.value);
  if (ordhlutaeydingarFaerni == "Mjög slök færni") {
    ordhlutaeyding.className = "ordhlutaeyding msf";
  } else if (ordhlutaeydingarFaerni == "Slök færni") {
    ordhlutaeyding.className = "ordhlutaeyding sf";
  } else if (ordhlutaeydingarFaerni == "Meðalfærni") {
    ordhlutaeyding.className = "ordhlutaeyding mf";
  } else if (ordhlutaeydingarFaerni == "Góð færni") {
    ordhlutaeyding.className = "ordhlutaeyding gf";
  } else {
    ordhlutaeyding.className = "ordhlutaeyding neutral";
  }
});

document;
hljodtenging.addEventListener("input", (e) => {
  var hljodtengingarFaerni = hljodtengingarTafla(bil, hljodtenging.value);
  if (hljodtengingarFaerni == "Mjög slök færni") {
    hljodtenging.className = "hljodtenging msf";
  } else if (hljodtengingarFaerni == "Slök færni") {
    hljodtenging.className = "hljodtenging sf";
  } else if (hljodtengingarFaerni == "Meðalfærni") {
    hljodtenging.className = "hljodtenging mf";
  } else if (hljodtengingarFaerni == "Góð færni") {
    hljodtenging.className = "hljodtenging gf";
  } else {
    hljodtenging.className = "hljodtenging neutral";
  }
});

document;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  var sum =
    Number(rim.value) +
    Number(samstoflur.value) +
    Number(samsett.value) +
    Number(hljodgreining.value) +
    Number(margraed.value) +
    Number(ordhlutaeyding.value) +
    Number(hljodtenging.value);
  console.log(sum);
  var heild = heildartafla(bil, sum);
  var nidurstoduTexti = document.createElement("p");

  if (heild == "Mjög slök færni") {
    nidurstoduTexti.textContent("Nemandi hefur mjög slaka færni.");
  } else if (heild == "Slök færni") {
    nidurstoduTexti.textContent("Nemandi hefur slaka færni.");
  } else if (heild == "Medalfærni") {
    nidurstoduTexti.textContent("Nemandi hefur meðalfæni.");
  } else {
    nidurstoduTexti.textContent("Nemandi hefur góða færni.");
  }

  nidurstoduDiv.appendChild(nidurstoduTexti);
});

// Klassískt fall sem tæmir element
function empty(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
// Athugar hvort að gefin kennitala sé valid
function checkKennitala(x) {
  if (x.length != 10) {
    return false;
  } else if (x[9] == 9 || x[9] == 0) {
    var sum =
      x[0] * 3 +
      x[1] * 2 +
      x[2] * 7 +
      x[3] * 6 +
      x[4] * 5 +
      x[5] * 4 +
      x[6] * 3 +
      x[7] * 2;
    var vartala = 11 - (sum % 11);
    if (vartala == x[8]) {
      setBirthDate(x);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Tekur inn kennitölu án banstriks og býr til date object
function setBirthDate(x) {
  var year = "20" + x.substring(4, 6);
  var month = x.substring(2, 4);
  var day = x.substring(0, 2);
  birthDate = new Date(year, month, day);
}

// Setur aldur í dögum sem global breyta
function setAldurDagar() {
  var aldurMilli = profdagur.valueAsNumber - birthDate.getTime();
  var aldurDagar = aldurMilli / 1000 / 60 / 60 / 24;
  return aldurDagar;
}

// Fall sem tekur inn aldur barns í dögum og skilar viðeigandi aldrusbili.
function setAldursbil(dagar) {
  if (dagar < 1747) {
    return "ungur";
  } else if (dagar < 1872) {
    return "Aldursbil 1";
  } else if (dagar < 1992) {
    return "Aldursbil 2";
  } else if (dagar < 2112) {
    return "Aldursbil 3";
  } else if (dagar < 2237) {
    return "Aldursbil 4";
  } else {
    return "gamall";
  }
}
