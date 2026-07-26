console.log("Revision.js chargé !");



let indexCocktail = 0;

let cocktailActuel;





function chargerRevision(){



cocktailActuel = cocktails[indexCocktail];




document.getElementById("nomCocktail").textContent =

cocktailActuel.nom;





document.getElementById("verre").textContent =

cocktailActuel.verre || "Non renseigné";





document.getElementById("technique").textContent =

cocktailActuel.technique || "Non renseignée";





document.getElementById("glace").textContent =

cocktailActuel.glace || cocktailActuel.glacon || "Non renseignée";





document.getElementById("ingredients").textContent =

cocktailActuel.ingredients.join(", ");





document.getElementById("quantites").textContent =

cocktailActuel.quantites.join(", ");





document.getElementById("decoration").textContent =

cocktailActuel.decoration || "Aucune";







// Nouvelles informations professionnelles



document.getElementById("difficulte").textContent =

cocktailActuel.difficulte || "Non renseignée";





document.getElementById("famille").textContent =

cocktailActuel.famille || "Non renseignée";





document.getElementById("origine").textContent =

cocktailActuel.origine || "Non renseignée";





document.getElementById("histoire").textContent =

cocktailActuel.histoire || "Non renseignée";





document.getElementById("conseil").textContent =

cocktailActuel.conseil || "Non renseigné";







afficherProgression();



}









function afficherProgression(){



let total = cocktails.length;



let actuel = indexCocktail + 1;



let pourcentage =

(actuel / total) * 100;







document.getElementById("progressionTexte").textContent =


"🍸 Cocktail "
+
actuel
+
" / "
+
total;







document.getElementById("barreAvancement").style.width =

pourcentage + "%";





console.log(

"Progression : "

+

pourcentage

+

"%"

);



}









function voirReponse(){



document.getElementById("reponse").style.display =

"block";



}









function reussi(){



connaitreCocktail(cocktailActuel.nom);



suivant();



}









function echec(){



revoirCocktail(cocktailActuel.nom);



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