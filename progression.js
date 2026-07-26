console.log("Progression.js chargé !");


// Récupérer les cocktails connus

function getConnus(){

    return JSON.parse(
        localStorage.getItem("connus")
    ) || [];

}


// Récupérer les cocktails à revoir

function getRevoir(){

    return JSON.parse(
        localStorage.getItem("revoir")
    ) || [];

}



// Ajouter un cocktail connu

function connaitreCocktail(nom){


    let connus = getConnus();


    if(!connus.includes(nom)){

        connus.push(nom);

    }


    localStorage.setItem(
        "connus",
        JSON.stringify(connus)
    );


    // Retirer des cocktails à revoir

    let revoir = getRevoir();


    revoir = revoir.filter(
        c => c !== nom
    );


    localStorage.setItem(
        "revoir",
        JSON.stringify(revoir)
    );


    console.log("✅ Maîtrisé :", nom);

}





// Ajouter un cocktail à revoir

function revoirCocktail(nom){


    let revoir = getRevoir();


    if(!revoir.includes(nom)){

        revoir.push(nom);

    }


    localStorage.setItem(
        "revoir",
        JSON.stringify(revoir)
    );


    console.log("🔁 À revoir :", nom);

}
