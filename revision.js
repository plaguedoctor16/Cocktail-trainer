console.log("Revision.js chargé !");

let listeRevision = [];
let indexCocktail = 0;
let cocktailActuel;

function initialiserRevision() {

    let connus = JSON.parse(localStorage.getItem("connus")) || [];

    listeRevision = cocktails.filter(cocktail => !connus.includes(cocktail.nom));

    if (listeRevision.length === 0) {

        document.getElementById("nomCocktail").textContent =
            "🎉 Félicitations !";

        document.getElementById("progressionTexte").textContent =
            "Tous les cocktails sont maîtrisés.";

        document.getElementById("barreAvancement").style.width = "100%";

        document.getElementById("reponse").style.display = "none";

        return;
    }

    indexCocktail = 0;

    chargerRevision();
}

function chargerRevision() {

    cocktailActuel = listeRevision[indexCocktail];

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
}

function afficherProgression() {

    let total = listeRevision.length;

    let actuel = indexCocktail + 1;

    let pourcentage = Math.round((actuel / total) * 100);

    document.getElementById("progressionTexte").textContent =
        "🍸 Cocktail " + actuel + " / " + total;

    document.getElementById("barreAvancement").style.width =
        pourcentage + "%";
}

function voirReponse() {

    document.getElementById("reponse").style.display = "block";
}

function reussi() {

    connaitreCocktail(cocktailActuel.nom);

    listeRevision.splice(indexCocktail, 1);

    if (listeRevision.length === 0) {

        initialiserRevision();
        return;
    }

    if (indexCocktail >= listeRevision.length) {

        indexCocktail = 0;
    }

    document.getElementById("reponse").style.display = "none";

    chargerRevision();
}

function echec() {

    revoirCocktail(cocktailActuel.nom);

    suivant();
}

function suivant() {

    indexCocktail++;

    if (indexCocktail >= listeRevision.length) {

        indexCocktail = 0;
    }

    document.getElementById("reponse").style.display = "none";

    chargerRevision();
}

initialiserRevision();
