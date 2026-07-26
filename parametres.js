console.log("Paramètres.js chargé !");



// Affichage de l'état des données

function afficherEtat(){


let connus =
JSON.parse(localStorage.getItem("connus")) || [];


let revoir =
JSON.parse(localStorage.getItem("revoir")) || [];


let quiz =
JSON.parse(localStorage.getItem("scoresQuiz")) || [];


let examens =
JSON.parse(localStorage.getItem("scoresExamen")) || [];




document.getElementById("etatDonnees").textContent =


"📖 Révision : "
+
connus.length
+
" maîtrisés | "
+
revoir.length
+
" à revoir\n\n"

+

"❓ Quiz : "
+
quiz.length
+
" réalisés\n\n"

+

"🎓 Examens : "
+
examens.length
+
" réalisés";



}





// Supprimer uniquement la révision

function resetRevision(){



localStorage.removeItem("connus");

localStorage.removeItem("revoir");



alert("📖 Progression Révision supprimée !");



afficherEtat();



}







// Supprimer uniquement les quiz

function resetQuiz(){



localStorage.removeItem("scoresQuiz");

localStorage.removeItem("meilleurScore");



alert("❓ Scores Quiz supprimés !");



afficherEtat();



}







// Supprimer uniquement les examens

function resetExamen(){



localStorage.removeItem("scoresExamen");



alert("🎓 Scores Examen supprimés !");



afficherEtat();



}







// Tout supprimer

function resetTout(){



let confirmation = confirm(

"⚠️ Supprimer toutes les données Cocktail Trainer ?"

);



if(confirmation){



localStorage.clear();



alert(

"🗑️ Toutes les données ont été supprimées"

);



afficherEtat();



}



}







afficherEtat();