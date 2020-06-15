var kennitala = document.getElementsByClassName("kennitala").item(0);
var kennitoluDiv = document.getElementsByClassName("kennitoluDiv").item(0);
var validKennitala = false;

var bil = false;
var birthDate = new Date(2020, 0, 1, 0, 0, 0, 0);
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
  rimFaerni(bil, rim.value);
});

document;
samstoflur.addEventListener("input", (e) => {
  samstofluFaerni(bil, samstoflur.value);
});

document;
samsett.addEventListener("input", (e) => {
  samsettFaerni(bil, samsett.value);
});

document;
hljodgreining.addEventListener("input", (e) => {
  hljodgreiningarFaerni(bil, hljodgreining.value);
});

document;
margraed.addEventListener("input", (e) => {
  margraedFaerni(bil, margraed.value);
});

document;
ordhlutaeyding.addEventListener("input", (e) => {
  ordhlutaeydingarFaerni(bil, ordhlutaeyding.value);
});

document;
hljodtenging.addEventListener("input", (e) => {
  hljodtengingarFaerni(bil, hljodtenging.value);
});

document;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  var stig = sum();
  var heildarNidurstada = heildarFaerni(bil, stig);

  var nidurstoduTexti = document.createElement("p");
  nidurstoduTexti.textContent = stig + " stig: " + heildarNidurstada[0];
  nidurstoduTexti.className = heildarNidurstada[1];

  empty(nidurstoduDiv);
  nidurstoduDiv.appendChild(nidurstoduTexti);
});

// Klassískt fall sem tæmir element
function empty(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

// Fall sem leggur öll stig saman
function sum() {
  var stig =
    Number(rim.value) +
    Number(samstoflur.value) +
    Number(samsett.value) +
    Number(hljodgreining.value) +
    Number(margraed.value) +
    Number(ordhlutaeyding.value) +
    Number(hljodtenging.value);

  if (stig == NaN) {
    return "error";
  } else {
    return stig;
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

// Fall sem tekur inn aldur barns í dögum og skilar viðeigandi aldursbili.
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
