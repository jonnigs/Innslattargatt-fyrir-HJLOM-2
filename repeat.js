var fjoldi = document.getElementsByClassName("fjoldi").item(0);
var harmonikka = document.getElementsByClassName("harmonikkuDiv").item(0);
var pila;

document;
fjoldi.addEventListener("input", (e) => {
  empty(harmonikka);
  for (i = 1; i <= fjoldi.value; i++) {
    var nemandi = document.createElement("div");
    nemandi.className = "nemandi " + i;

    pila = document.createElement("img");
    pila.className = "closed";
    pila.src = "./img/arrow-left.svg";
    pila.alt = "Ör til vinstri";
    nemandi.appendChild(pila);

    var p = document.createElement("p");
    p.textContent =
      "Nemandi: Gunnar Gunnarsson " + i + " Kennitala: 000000-0000";
    nemandi.appendChild(p);

    harmonikka.appendChild(nemandi);
  }
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.className == "closed") {
    console.log("hér");
  }
});
