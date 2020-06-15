window.addEventListener("DOMContentLoaded", (e) => {
  // Fall sem nær í gildi úr querystring eftir breytu
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) == variable) {
        return decodeURIComponent(pair[1]);
      }
    }
    console.log("Query variable %s not found", variable);
  }

  var tafla = getQueryVariable("tafla");
  var spurningar = getQueryVariable("sp");
  var heading = document.getElementsByClassName("heading").item(0);
  var htmlTafla = document.getElementsByClassName("htmltafla").item(0);

  // Klassískt fall sem tæmir element
  function empty(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  function setHeading(a) {
    empty(heading);
    heading.textContent = a;
  }

  function hvadaTafla(tafla, a, b) {
    if (tafla == "rim") {
      setHeading("Tafla fyrir 1. Rím");
      return rimTafla(a, b);
    } else if (tafla == "samstoflur") {
      setHeading("Tafla fyrir 2. Samstöflur");
      return samstofluTafla(a, b);
    } else if (tafla == "samsett") {
      setHeading("Tafla fyrir 3. Samsett orð");
      return samsettTafla(a, b);
    } else if (tafla == "hljodgreining") {
      setHeading("Tafla fyrir 4. Hljóðgreining");
      return hljodgreiningarTafla(a, b);
    } else if (tafla == "margraed") {
      setHeading("Tafla fyrir 5. Margræð orð");
      return margraedTafla(a, b);
    } else if (tafla == "ordhlutaeyding") {
      setHeading("Tafla fyrir 6. Orðhlutaeyðing");
      return ordhlutaeydingarTafla(a, b);
    } else if (tafla == "hljodtenging") {
      setHeading("Tafla fyrir 7. Hljóðtenging");
      return hljodtengingarTafla(a, b);
    } else {
      setHeading("Tafla fyrir heildarniðurstöður úr HLJÓM-2");
      return heildartafla(a, b);
    }
  }

  function fyllaToflu() {
    var k = 1;
    if (tafla == "hljodgreining") {
      k = 3;
    }

    for (i = 0; i < Number(spurningar) + 1; i = i + k) {
      var tr = document.createElement("tr");
      for (j = 0; j < 4; j++) {
        var td = document.createElement("td");
        td.textContent = i;
        var litur = hvadaTafla(tafla, j + 1, i);

        if (litur == "Mjög slök færni") {
          td.className = "msf";
        } else if (litur == "Slök færni") {
          td.className = "sf";
        } else if (litur == "Meðalfærni") {
          td.className = "mf";
        } else {
          td.className = "gf";
        }
        tr.appendChild(td);
      }
      htmlTafla.appendChild(tr);
    }
  }

  setHeading();
  fyllaToflu();
});
