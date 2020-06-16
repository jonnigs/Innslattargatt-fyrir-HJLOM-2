var fjoldi = document.getElementsByClassName("fjoldi").item(0);
var harmonikka = document.getElementsByClassName("harmonikkuDiv").item(0);
var pila;

document;
fjoldi.addEventListener("input", (e) => {
  empty(harmonikka);
  for (i = 1; i <= fjoldi.value; i++) {
    var nemandi = document.createElement("div");
    nemandi.className = "nemandi " + i;

    // Mynd í harmonikku item
    imgDiv = document.createElement("div");
    mynd = document.createElement("img");
    mynd.className = "closed";
    mynd.id = i;
    mynd.src = "./img/arrow-down.svg";
    imgDiv.appendChild(mynd);
    nemandi.appendChild(imgDiv);

    // Texti sem sést í lokuðu item
    var p = document.createElement("p");
    p.textContent =
      "Nemandi: Gunnar Gunnarsson " + i + " Kennitala: 000000-0000";
    p.className = "visable " + i;
    nemandi.appendChild(p);

    // Form sem birtist þegar item er opnað
    nemandi.appendChild(generateForm(i));

    harmonikka.appendChild(nemandi);
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.className == "closed") {
    // Breyta ör þennig að hún vísi upp
    e.target.className = "open";
    e.target.src = "./img/arrow-up.svg";

    // Fela p tag
    var pToHide = document.getElementsByClassName(e.target.id).item(1);
    pToHide.className = "hide " + e.target.id;

    //Sýna form
    var showForm = document.getElementsByClassName(e.target.id).item(2);
    showForm.className = "visable " + e.target.id;
  } else if (e.target && e.target.className == "open") {
    // Breyta ör þannig að hún vísi niður
    e.target.className = "closed";
    e.target.src = "./img/arrow-down.svg";

    // Sýna p tag
    var pToShow = document.getElementsByClassName(e.target.id).item(1);
    pToShow.className = "visable " + e.target.id;

    // Fela form
    var hideForm = document.getElementsByClassName(e.target.id).item(2);
    hideForm.className = "hide " + e.target.id;
  }
});

// Fall sem býr til form fyrir nemanda
function generateForm(id) {
  var form = document.createElement("form");
  var nafnLabel = document.createElement("label");
  var nafnInput = document.createElement("input");
  var ktLabel = document.createElement("label");
  var ktInput = document.createElement("input");
  var profLabel = document.createElement("label");
  var profInput = document.createElement("input");
  var d1 = generateDD(1);
  var d2 = generateDD(2);
  var d3 = generateDD(3);
  var d4 = generateDD(4);
  var d5 = generateDD(5);
  var d6 = generateDD(6);
  var d7 = generateDD(7);

  nafnLabel.textContent = "Nafn nemanda";
  ktLabel.textContent = "Kennitala nemanda";

  form.appendChild(nafnLabel);
  form.appendChild(nafnInput);
  form.appendChild(ktLabel);
  form.appendChild(ktInput);

  form.className = "hide " + id;

  return form;
}

// Fall sem býr til Dropdown valmöguleika fyrir stigafjölda
function generateDD(num) {
  var div = document.createElement("div");
}
