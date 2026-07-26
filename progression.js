console.log("Progression.js chargé !");


// Récupérer les cocktails connus

function recupererConnus(){

    let donnees = localStorage.getItem("cocktailsConnus");


    if(donnees){

        return JSON.parse(donnees);

    }


    return [];

}



// Récupérer les cocktails à revoir

function recupererARevoir(){

    let donnees = localStorage.getItem("cocktailsARevoir");


    if(donnees){

        return JSON.parse(donnees);

    }


    return [];

}



// Ajouter un cocktail connu

function connaitreCocktail(nom){


    let connus = recupererConnus();



    if(!connus.includes(nom)){


        connus.push(nom);


    }



    localStorage.setItem(

        "cocktailsConnus",

        JSON.stringify(connus)

    );



    console.log(
        "Sauvegarde connue :",
        connus
    );


}





// Ajouter un cocktail à revoir

function revoirCocktail(nom){


    let revoir = recupererARevoir();



    if(!revoir.includes(nom)){


        revoir.push(nom);


    }



    localStorage.setItem(

        "cocktailsARevoir",

        JSON.stringify(revoir)

    );



    console.log(
        "Sauvegarde à revoir :",
        revoir
    );


}




// Afficher les statistiques dans la console

function afficherStats(){


    let connus = recupererConnus();


    let revoir = recupererARevoir();



    console.log("===== STATISTIQUES =====");

    console.log(
        "Connus :",
        connus.length
    );


    console.log(
        "À revoir :",
        revoir.length
    );


    console.log(
        "Total cocktails :",
        cocktails.length
    );


}