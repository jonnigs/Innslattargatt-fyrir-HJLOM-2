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

    // Texti sem birtist þegar item er opnað
    generateForm(i);
    var p2 = document.createElement("p");
    p2.textContent = "Birtist þetta?";
    p2.className = "hide " + i;
    p2.id = i;
    nemandi.appendChild(p2);

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
}
