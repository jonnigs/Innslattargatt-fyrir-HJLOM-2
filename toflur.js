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
  if (stig == "-") {
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

/*export {
  rimTafla,
  samstofluTafla,
  samsettTafla,
  hljodgreiningarTafla,
  margraedTafla,
  ordhlutaeydingarTafla,
  hljodtengingarTafla,
  heildartafla,
};*/
