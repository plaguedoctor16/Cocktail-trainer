console.log("Revision.js chargé !");



let indexCocktail = 0;

let cocktailActuel;




function chargerRevision(){

    cocktailActuel = cocktails[indexCocktail];


    let nom = document.getElementById("nomCocktail");
    let verre = document.getElementById("verre");
    let technique = document.getElementById("technique");
    let glace = document.getElementById("glace");
    let ingredients = document.getElementById("ingredients");
    let quantites = document.getElementById("quantites");
    let decoration = document.getElementById("decoration");


    if(nom) nom.textContent = cocktailActuel.nom;

    if(verre) verre.textContent = cocktailActuel.verre || "Non renseigné";

    if(technique) technique.textContent = cocktailActuel.technique || "Non renseignée";

    if(glace) glace.textContent = cocktailActuel.glacon || "Non renseignée";

    if(ingredients) ingredients.textContent = cocktailActuel.ingredients.join(", ");

    if(quantites) quantites.textContent = cocktailActuel.quantites.join(", ");

    if(decoration) decoration.textContent = cocktailActuel.decoration || "Aucune";


    afficherProgression();

}







function afficherProgression(){



    let total = cocktails.length;



    let actuel = indexCocktail + 1;



    let pourcentage =

    Math.round((actuel / total) * 100);




    document.getElementById("progressionTexte").textContent =


    "🍸 Cocktail "
    + actuel
    + " / "
    + total;





    document.getElementById("barreAvancement").style.width =

    pourcentage + "%";



}







function voirReponse(){



    document.getElementById("reponse").style.display =

    "block";


}








function reussi(){



    connaitreCocktail(
        cocktailActuel.nom
    );



    suivant();


}







function echec(){



    revoirCocktail(
        cocktailActuel.nom
    );



    suivant();


}







function suivant(){



    indexCocktail++;




    if(indexCocktail >= cocktails.length){


        indexCocktail = 0;


    }




    document.getElementById("reponse").style.display =

    "none";



    chargerRevision();



}







chargerRevision();
