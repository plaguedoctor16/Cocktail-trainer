console.log("Revision.js chargé !");

let cocktailActuel = null;
let indexCocktail = 0;

function obtenirCocktailsConnus() {
    return JSON.parse(localStorage.getItem("connus")) || [];
}

function trouverProchainCocktail() {

    let connus = obtenirCocktailsConnus();

    for (let i = 0; i < cocktails.length; i++) {

        if (!connus.includes(cocktails[i].nom)) {
            indexCocktail = i;
            return true;
        }

    }

    return false;
}

function chargerRevision() {

    if (!trouverProchainCocktail()) {

        document.getElementById("nomCocktail").textContent =
            "🎉 Félicitations !";

        document.getElementById("progressionTexte").textContent =
            "🍸 66 / 66 cocktails maîtrisés";

        document.getElementById("barreAvancement").style.width = "100%";

        document.getElementById("reponse").style.display = "none";

        return;
    }

    cocktailActuel = cocktails[indexCocktail];

    document.getElementById("nomCocktail").textContent =
        cocktailActuel.nom;

    document.getElementById("verre").textContent =
        cocktailActuel.verre || "Non renseigné";

    document.getElementById("technique").textContent =
        cocktailActuel.technique || "Non renseignée";

    document.getElementById("glace").textContent =
        cocktailActuel.glacon || "Non renseignée";

    document.getElementById("ingredients").textContent =
        cocktailActuel.ingredients.join(", ");

    document.getElementById("quantites").textContent =
        cocktailActuel.quantites.join(", ");

    document.getElementById("decoration").textContent =
        cocktailActuel.decoration || "Aucune";

    afficherProgression();

    document.getElementById("reponse").style.display = "none";
}

function afficherProgression() {

    let connus = obtenirCocktailsConnus().length;
    let total = cocktails.length;

    document.getElementById("progressionTexte").textContent =
        "🍸 Progression : " + connus + " / " + total;

    let pourcentage = Math.round((connus / total) * 100);

    document.getElementById("barreAvancement").style.width =
        pourcentage + "%";
}

function voirReponse() {

    document.getElementById("reponse").style.display = "block";

}

function reussi() {

    connaitreCocktail(cocktailActuel.nom);

    chargerRevision();

}

function echec() {

    revoirCocktail(cocktailActuel.nom);

    suivant();

}

function suivant() {

    let depart = indexCocktail;

    do {

        indexCocktail++;

        if (indexCocktail >= cocktails.length) {
            indexCocktail = 0;
        }

        let connus = obtenirCocktailsConnus();

        if (!connus.includes(cocktails[indexCocktail].nom)) {
            chargerRevision();
            return;
        }

    } while (indexCocktail !== depart);

    chargerRevision();
}

chargerRevision();
