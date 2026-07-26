console.log("App.js chargé !");



function chargerAccueil(){



let connus =
JSON.parse(localStorage.getItem("connus")) || [];



let progression =
Math.round((connus.length / 66) * 100);





document.getElementById("accueilProgression").textContent =

"🍸 Cocktails maîtrisés : "
+
connus.length
+
" / 66";





document.getElementById("accueilPourcentage").textContent =

"📈 Progression : "
+
progression
+
"%";







let niveau = "🥉 Débutant";



if(connus.length >= 20){

niveau = "🥈 Barman amateur";

}



if(connus.length >= 45){

niveau = "🥇 Barman confirmé";

}



if(connus.length >= 60){

niveau = "🏆 Expert Cocktail";

}




document.getElementById("accueilNiveau").textContent = niveau;






// Dernier quiz


let scoresQuiz =

JSON.parse(localStorage.getItem("scoresQuiz")) || [];



if(scoresQuiz.length > 0){


document.getElementById("accueilQuiz").textContent =

"❓ Dernier quiz : "
+
scoresQuiz[scoresQuiz.length-1]
+
" / 10";


}







// Meilleur examen


let examens =

JSON.parse(localStorage.getItem("scoresExamen")) || [];



if(examens.length > 0){


let meilleur = Math.max(...examens);



document.getElementById("accueilExamen").textContent =

"🎓 Meilleur examen : "
+
meilleur
+
" / 30";


}





}





chargerAccueil();