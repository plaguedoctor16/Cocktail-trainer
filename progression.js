console.log("Progression.js chargé !");

// ======================
// Récupération des données
// ======================

function getCocktailsConnus() {
    return JSON.parse(localStorage.getItem("connus")) || [];
}

function getCocktailsARevoir() {
    return JSON.parse(localStorage.getItem("revoir")) || [];
}

// ======================
// Ajouter un cocktail connu
// ======================

function connaitreCocktail(nom) {

    let connus = getCocktailsConnus();

    if (!connus.includes(nom)) {
        connus.push(nom);
    }

    // S'il était dans "à revoir", on le retire
    let revoir = getCocktailsARevoir().filter(c => c !== nom);

    localStorage.setItem("connus", JSON.stringify(connus));
    localStorage.setItem("revoir", JSON.stringify(revoir));

    console.log("Cocktail maîtrisé :", nom);
}

// ======================
// Ajouter un cocktail à revoir
// ======================

function revoirCocktail(nom) {

    let revoir = getCocktailsARevoir();

    if (!revoir.includes(nom)) {
        revoir.push(nom);
    }

    localStorage.setItem("revoir", JSON.stringify(revoir));

    console.log("Cocktail à revoir :", nom);
}

// ======================
// Nombre connus
// ======================

function nombreConnus() {
    return getCocktailsConnus().length;
}

// ======================
// Pourcentage
// ======================

function pourcentageConnu() {

    if (cocktails.length === 0) return 0;

    return Math.round(
        (nombreConnus() / cocktails.length) * 100
    );
}
