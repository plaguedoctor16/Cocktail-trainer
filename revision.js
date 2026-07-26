console.log("Revision.js chargé !");

let indexCocktail = 0;
let cocktailActuel = null;
let listeRevision = [];



function chargerListeRevision(){

    let connus = JSON.parse(
        localStorage.getItem("connus")
    ) || [];


    listeRevision = cocktails.filter(
        cocktail => !connus.includes(cocktail.nom)
    );

}



function chargerRevision(){


    chargerListeRevision();


    if(listeRevision.length === 0){

        document.getElementById("nomCocktail").textContent =
        "🎉 Tous les cocktails sont maîtrisés !";

        document.getElementById("progressionTexte").textContent =
        "66 / 66";

        return;

    }



    if(indexCocktail >= listeRevision.length){

        indexCocktail = 0;

    }



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



    document.getElementById("reponse").style.display =
    "none";


    afficherProgression();

}





function afficherProgression(){

    let connus = JSON.parse(
        localStorage.getItem("connus")
    ) || [];


    document.getElementById("progressionTexte").textContent =

    "🍸 Maîtrisés : "
    + connus.length
    + " / "
    + cocktails.length;



    document.getElementById("barreAvancement").style.width =

    Math.round(
        (connus.length / cocktails.length) * 100
    )
    + "%";

}





function voirReponse(){

    document.getElementById("reponse").style.display =
    "block";

}





function reussi(){

    connaitreCocktail(
        cocktailActuel.nom
    );


    chargerRevision();

}





function echec(){

    revoirCocktail(
        cocktailActuel.nom
    );


    passerSuivant();

}





function suivant(){

    passerSuivant();

}




function passerSuivant(){


    indexCocktail++;


    if(indexCocktail >= listeRevision.length){

        indexCocktail = 0;

    }


    chargerRevision();

}





chargerRevision();
