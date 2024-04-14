b.addEventListener('click ', function () {
    this.style.backgroundColor = "red";
    this.

        if(isNaN(nombre1)); {
        resultat.innerHTML = "saisir un nombre correct";

    }
    if (nombre1 < devinette) {
        resultat.innerHTML = "votre nombre est inferieur veuillez recommmencer!!!!";
    }

    else if (nombre1 < 1 || nombre1 > 100) {
        resultat.textContent = "intervalle non respecté";
    }
    else if (nombre1 === devinette) {
        resultat.textContent = "win";
    }
    else if (nombre1 < devinette) {
        resultat.textContent = "lose small";
    }
    else if (nombre1 > devinette) {
        resultat.textContent = "lose big";
    }
});
