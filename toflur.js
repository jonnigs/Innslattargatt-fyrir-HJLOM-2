function rimTafla(aldursbil, stig) {
  if (stig == "-") {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 3) {
      return "Mjög slök færni";
    } else if (stig < 6) {
      return "Slök færni";
    } else if (stig < 11) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 5) {
      return "Mjög slök færni";
    } else if (stig < 7) {
      return "Slök færni";
    } else if (stig < 12) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 6) {
      return "Mjög slök færni";
    } else if (stig < 9) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 7) {
      return "Mjög slök færni";
    } else if (stig < 10) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  }
}

function samstofluTafla(aldursbil, stig) {
  if (stig == "-") {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 4) {
      return "Mjög slök færni";
    } else if (stig < 6) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 5) {
      return "Mjög slök færni";
    } else if (stig < 6) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 5) {
      return "Mjög slök færni";
    } else if (stig < 7) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 6) {
      return "Mjög slök færni";
    } else if (stig < 8) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  } else {
    return "error";
  }
}

function samsettTafla(aldursbil, stig) {
  if (stig == "-") {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 1) {
      return "Mjög slök færni";
    } else if (stig < 3) {
      return "Slök færni";
    } else if (stig < 8) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 2) {
      return "Mjög slök færni";
    } else if (stig < 5) {
      return "Slök færni";
    } else if (stig < 9) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 3) {
      return "Mjög slök færni";
    } else if (stig < 6) {
      return "Slök færni";
    } else if (stig < 10) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 4) {
      return "Mjög slök færni";
    } else if (stig < 7) {
      return "Slök færni";
    } else if (stig < 10) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else {
    return "error";
  }
}

function hljodgreiningarTafla(aldursbil, stig) {
  if (stig == "-") {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 6) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 9) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 12) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 3) {
      return "Slök færni";
    } else if (stig < 15) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else {
    return "error";
  }
}

function margraedTafla(aldursbil, stig) {
  if (stig == "-") {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 4) {
      return "Mjög slök færni";
    } else if (stig < 5) {
      return "Slök færni";
    } else if (stig < 8) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 4) {
      return "Mjög slök færni";
    } else if (stig < 6) {
      return "Slök færni";
    } else if (stig < 8) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 5) {
      return "Mjög slök færni";
    } else if (stig < 6) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 5) {
      return "Mjög slök færni";
    } else if (stig < 7) {
      return "Slök færni";
    } else {
      return "Meðalfærni";
    }
  } else {
    return "error";
  }
}

function ordhlutaeydingarTafla(aldursbil, stig) {
  if (stig == "-") {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 1) {
      return "Mjög slök færni";
    } else if (stig < 3) {
      return "Slök færni";
    } else if (stig < 8) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 2) {
      return "Mjög slök færni";
    } else if (stig < 4) {
      return "Slök færni";
    } else if (stig < 9) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 2) {
      return "Mjög slök færni";
    } else if (stig < 5) {
      return "Slök færni";
    } else if (stig < 10) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 2) {
      return "Mjög slök færni";
    } else if (stig < 5) {
      return "Slök færni";
    } else if (stig < 10) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else {
    return "error";
  }
}

function hljodtengingarTafla(aldursbil, stig) {
  if (stig == "-") {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 1) {
      return "Mjög slök færni";
    } else if (stig < 2) {
      return "Slök færni";
    } else if (stig < 5) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 1) {
      return "Mjög slök færni";
    } else if (stig < 2) {
      return "Slök færni";
    } else if (stig < 6) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 2) {
      return "Mjög slök færni";
    } else if (stig < 3) {
      return "Slök færni";
    } else if (stig < 7) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 2) {
      return "Mjög slök færni";
    } else if (stig < 3) {
      return "Slök færni";
    } else if (stig < 8) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else {
    return "error";
  }
}

function heildartafla(aldursbil, stig) {
  if (!Number(stig)) {
    return "Óþekkt stig eða aldursbil";
  } else if (aldursbil == "Aldursbil 1") {
    if (stig < 21) {
      return "Mjög slök færni";
    } else if (stig < 27) {
      return "Slök færni";
    } else if (stig < 45) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 2") {
    if (stig < 26) {
      return "Mjög slök færni";
    } else if (stig < 32) {
      return "Slök færni";
    } else if (stig < 53) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 3") {
    if (stig < 32) {
      return "Mjög slök færni";
    } else if (stig < 38) {
      return "Slök færni";
    } else if (stig < 58) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else if (aldursbil == "Aldursbil 4") {
    if (stig < 33) {
      return "Mjög slök færni";
    } else if (stig < 42) {
      return "Slök færni";
    } else if (stig < 63) {
      return "Meðalfærni";
    } else {
      return "Góð færni";
    }
  } else {
    return "error";
  }
}

function rimFaerni(bil, stig) {
  var fletta = rimTafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    rim.className = "rim msf";
  } else if (fletta == "Slök færni") {
    rim.className = "rim sf";
  } else if (fletta == "Meðalfærni") {
    rim.className = "rim mf";
  } else if (fletta == "Góð færni") {
    rim.className = "rim gf";
  } else {
    rim.className = "rim neutral";
  }
}

function samstofluFaerni(bil, stig) {
  var fletta = samstofluTafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    samstoflur.className = "samstoflur msf";
  } else if (fletta == "Slök færni") {
    samstoflur.className = "samstoflur sf";
  } else if (fletta == "Meðalfærni") {
    samstoflur.className = "samstoflur mf";
  } else if (fletta == "Góð færni") {
    samstoflur.className = "samstoflur gf";
  } else {
    samstoflur.className = "samstoflur neutral";
  }
}

function samsettFaerni(bil, stig) {
  var fletta = samsettTafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    samsett.className = "samsett msf";
  } else if (fletta == "Slök færni") {
    samsett.className = "samsett sf";
  } else if (fletta == "Meðalfærni") {
    samsett.className = "samsett mf";
  } else if (fletta == "Góð færni") {
    samsett.className = "samsett gf";
  } else {
    samsett.className = "samsett neutral";
  }
}

function hljodgreiningarFaerni(bil, stig) {
  var fletta = hljodgreiningarTafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    hljodgreining.className = "hljodgreining msf";
  } else if (fletta == "Slök færni") {
    hljodgreining.className = "hljodgreining sf";
  } else if (fletta == "Meðalfærni") {
    hljodgreining.className = "hljodgreining mf";
  } else if (fletta == "Góð færni") {
    hljodgreining.className = "hljodgreining gf";
  } else {
    hljodgreining.className = "hljodgreining neutral";
  }
}

function margraedFaerni(bil, stig) {
  var fletta = margraedTafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    margraed.className = "margraed msf";
  } else if (fletta == "Slök færni") {
    margraed.className = "margraed sf";
  } else if (fletta == "Meðalfærni") {
    margraed.className = "margraed mf";
  } else if (fletta == "Góð færni") {
    margraed.className = "margraed gf";
  } else {
    margraed.className = "margraed neutral";
  }
}

function ordhlutaeydingarFaerni(bil, stig) {
  var fletta = ordhlutaeydingarTafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    ordhlutaeyding.className = "ordhlutaeyding msf";
  } else if (fletta == "Slök færni") {
    ordhlutaeyding.className = "ordhlutaeyding sf";
  } else if (fletta == "Meðalfærni") {
    ordhlutaeyding.className = "ordhlutaeyding mf";
  } else if (fletta == "Góð færni") {
    ordhlutaeyding.className = "ordhlutaeyding gf";
  } else {
    ordhlutaeyding.className = "ordhlutaeyding neutral";
  }
}

function hljodtengingarFaerni(bil, stig) {
  var fletta = hljodtengingarTafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    hljodtenging.className = "hljodtenging msf";
  } else if (fletta == "Slök færni") {
    hljodtenging.className = "hljodtenging sf";
  } else if (fletta == "Meðalfærni") {
    hljodtenging.className = "hljodtenging mf";
  } else if (fletta == "Góð færni") {
    hljodtenging.className = "hljodtenging gf";
  } else {
    hljodtenging.className = "hljodtenging neutral";
  }
}

function heildarFaerni(bil, stig) {
  var fletta = heildartafla(bil, stig);

  if (fletta == "Mjög slök færni") {
    return ["Nemandi hefur mjög slaka færni.", "heild msf"];
  } else if (fletta == "Slök færni") {
    return ["Nemandi hefur slaka færni.", "heild sf"];
  } else if (fletta == "Meðalfærni") {
    return ["Nemandi hefur meðalfæni.", "heild mf"];
  } else if (fletta == "Góð færni") {
    return ["Nemandi hefur góða færni.", "heild gf"];
  } else {
    return ["Vantar aldursbil eða stig.", "heild neutral"];
  }
}
