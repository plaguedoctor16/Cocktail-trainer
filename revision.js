console.log("Revision.js chargé !");


let listeRevision = [];
let indexCocktail = 0;
let cocktailActuel = null;



function chargerListeRevision(){

    let connus = JSON.parse(
        localStorage.getItem("connus")
    ) || [];


    listeRevision = cocktails.filter(
        c => !connus.includes(c.nom)
    );

}



function chargerRevision(){


    chargerListeRevision();


    if(listeRevision.length === 0){

        document.getElementById("nomCocktail").textContent =
        "🎉 Tous les cocktails sont maîtrisés !";

        return;

    }


    if(indexCocktail >= listeRevision.length){

        indexCocktail = 0;

    }


    cocktailActuel = listeRevision[indexCocktail];


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
    cocktailActuel.decoration || "";


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
        connus.length / cocktails.length * 100
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


    indexCocktail = 0;


    chargerRevision();

}





function echec(){


    revoirCocktail(
        cocktailActuel.nom
    );


    indexCocktail++;


    chargerRevision();

}





function suivant(){


    indexCocktail++;


    chargerRevision();

}





chargerRevision();
