var fjoldi = document.getElementsByClassName("fjoldi").item(0);
var harmonikka = document.getElementsByClassName("harmonikkuDiv").item(0);

document;
fjoldi.addEventListener("input", (e) => {
  empty(harmonikka);
  for (i = 1; i <= fjoldi.value; i++) {
    var nemandi = document.createElement("div");
    nemandi.className = "nemandi" + i;

    var p = document.createElement("p");
    p.textContent = "Eitthvað " + i + " Kennitala: 000000-0000";

    nemandi.appendChild(p);
    p.textContent = "Eitthvað annað";
    nemandi.appendChild(p);
    harmonikka.appendChild(nemandi);
  }
});
