console.log("Progression.js chargé !");


// Ajouter un cocktail aux cocktails connus

function connaitreCocktail(nom){


    let connus = JSON.parse(
        localStorage.getItem("connus")
    ) || [];



    if(!connus.includes(nom)){


        connus.push(nom);


    }



    localStorage.setItem(
        "connus",
        JSON.stringify(connus)
    );


    console.log("Cocktail maîtrisé :", nom);

}




// Ajouter un cocktail à revoir

function revoirCocktail(nom){


    let revoir = JSON.parse(
        localStorage.getItem("revoir")
    ) || [];



    if(!revoir.includes(nom)){


        revoir.push(nom);


    }



    localStorage.setItem(
        "revoir",
        JSON.stringify(revoir)
    );


    console.log("Cocktail à revoir :", nom);

}
