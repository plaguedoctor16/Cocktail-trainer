console.log("Revision.js chargé !");

let cocktailsRevision = [];
let indexCocktail = 0;
let cocktailActuel = null;

function initialiserRevision() {

    const connus = JSON.parse(localStorage.getItem("connus")) || [];

    cocktailsRevision = cocktails.filter(c =>
        !connus.includes(c.nom)
    );

    if (cocktailsRevision.length === 0) {

        document.getElementById("nomCocktail").textContent =
            "🎉 Tous les cocktails sont maîtrisés !";

        document.getElementById("progressionTexte").textContent =
            "66 / 66";

        document.getElementById("reponse").style.display = "none";

        return;
    }

    indexCocktail = 0;

    chargerRevision();
}

function chargerRevision() {

    cocktailActuel = cocktailsRevision[indexCocktail];

    document.getElementById("nomCocktail").textContent =
        cocktailActuel.nom;

    document.getElementById("verre").textContent =
        cocktailActuel.verre || "";

    document.getElementById("technique").textContent =
        cocktailActuel.technique || "";

    document.getElementById("glace").textContent =
        cocktailActuel.glacon || "";

    document.getElementById("ingredients").textContent =
        cocktailActuel.ingredients.join(", ");

    document.getElementById("quantites").textContent =
        cocktailActuel.quantites.join(", ");

    document.getElementById("decoration").textContent =
        cocktailActuel.decoration || "Aucune";

    document.getElementById("reponse").style.display = "none";

    afficherProgression();
}

function afficherProgression() {

    const total = cocktailsRevision.length;
    const actuel = indexCocktail + 1;

    document.getElementById("progressionTexte").textContent =
        "🍸 Cocktail " + actuel + " / " + total;

    document.getElementById("barreAvancement").style.width =
        ((actuel / total) * 100) + "%";
}

function voirReponse() {

    document.getElementById("reponse").style.display = "block";
}

function reussi() {

    connaitreCocktail(cocktailActuel.nom);

    cocktailsRevision.splice(indexCocktail, 1);

    if (cocktailsRevision.length === 0) {

        initialiserRevision();
        return;
    }

    if (indexCocktail >= cocktailsRevision.length) {
        indexCocktail = 0;
    }

    chargerRevision();
}

function echec() {

    revoirCocktail(cocktailActuel.nom);

    indexCocktail++;

    if (indexCocktail >= cocktailsRevision.length) {
        indexCocktail = 0;
    }

    chargerRevision();
}

function suivant() {

    indexCocktail++;

    if (indexCocktail >= cocktailsRevision.length) {
        indexCocktail = 0;
    }

    chargerRevision();
}

initialiserRevision();
