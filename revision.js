console.log("Revision.js chargé !");


let indexCocktail = 0;

let cocktailActuel;

let listeRevision = [];





function chargerListeRevision(){


    let connus = getConnus();


    listeRevision = cocktails.filter(

        cocktail => !connus.includes(cocktail.nom)

    );


    if(listeRevision.length === 0){

        document.getElementById("nomCocktail").textContent =
        "🎉 Tous les cocktails sont maîtrisés !";

        return;

    }



}







function chargerRevision(){


    chargerListeRevision();


    if(listeRevision.length === 0){

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



    document.getElementById("reponse").style.display="none";


    afficherProgression();

}





function afficherProgression(){


    let total = listeRevision.length;


    let actuel = indexCocktail + 1;



    document.getElementById("progressionTexte").textContent =

    "🍸 Cocktail "
    + actuel
    + " / "
    + total;



    let pourcentage =

    Math.round((actuel / total) * 100);



    document.getElementById("barreAvancement").style.width =

    pourcentage + "%";

}





function voirReponse(){


    document.getElementById("reponse").style.display="block";


}





function reussi(){


    connaitreCocktail(
        cocktailActuel.nom
    );


    chargerListeRevision();


    if(indexCocktail >= listeRevision.length){

        indexCocktail = 0;

    }


    chargerRevision();


}







function echec(){


    revoirCocktail(
        cocktailActuel.nom
    );


    suivant();


}







function suivant(){


    indexCocktail++;


    if(indexCocktail >= listeRevision.length){

        indexCocktail = 0;

    }



    chargerRevision();


}






chargerRevision();
