console.log("Statistiques chargées !");



function chargerStats(){



// ==========================
// STATISTIQUES REVISION
// ==========================


let connus =
JSON.parse(localStorage.getItem("connus")) || [];


let revoir =
JSON.parse(localStorage.getItem("revoir")) || [];



let total = connus.length + revoir.length;



let score = 0;



if(total > 0){

score = Math.round(
(connus.length / total) * 100
);

}



let progression = Math.round(
(connus.length / 66) * 100
);





document.getElementById("total").textContent =

"🍸 Cocktails étudiés : "
+ total +
" / 66";





document.getElementById("connus").textContent =

"✅ Maîtrisés : "
+ connus.length;





document.getElementById("revoir").textContent =

"❌ À revoir : "
+ revoir.length;





document.getElementById("score").textContent =

"⭐ Score : "
+ score +
"%";





document.getElementById("barreAvancement").style.width =

progression + "%";







// ==========================
// NIVEAU BARMAN
// ==========================


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




document.getElementById("niveau").textContent = niveau;







// ==========================
// STATISTIQUES QUIZ
// ==========================


let scoresQuiz =

JSON.parse(localStorage.getItem("scoresQuiz")) || [];



let nombreQuiz = scoresQuiz.length;



let meilleurQuiz = 0;

let moyenneQuiz = 0;





if(nombreQuiz > 0){


meilleurQuiz = Math.max(
...scoresQuiz
);



let totalQuiz = scoresQuiz.reduce(

(a,b)=>a+b,

0

);



moyenneQuiz = Math.round(

(totalQuiz / nombreQuiz) * 10

);



}




document.getElementById("quizRealises").textContent =

"❓ Quiz réalisés : "
+ nombreQuiz;





document.getElementById("meilleurQuiz").textContent =

"🏆 Meilleur quiz : "
+ meilleurQuiz
+ " / 10";





document.getElementById("moyenneQuiz").textContent =

"⭐ Moyenne quiz : "
+ moyenneQuiz
+ "%";







// ==========================
// STATISTIQUES EXAMEN
// ==========================


let scoresExamen =

JSON.parse(localStorage.getItem("scoresExamen")) || [];



let nombreExamens = scoresExamen.length;



let meilleurExamen = 0;

let dernierExamen = "Aucun";





if(nombreExamens > 0){



meilleurExamen = Math.max(
...scoresExamen
);



let dernierScore =

scoresExamen[scoresExamen.length - 1];



if(dernierScore >= 21){


dernierExamen =

"🏆 Réussi (" 
+ dernierScore 
+ "/30)";


}

else{


dernierExamen =

"❌ Échec (" 
+ dernierScore 
+ "/30)";


}



}





document.getElementById("examensRealises").textContent =

"🎓 Examens réalisés : "
+ nombreExamens;





document.getElementById("meilleurExamen").textContent =

"🏆 Meilleur examen : "
+ meilleurExamen
+ " / 30";





document.getElementById("dernierExamen").textContent =

"📋 Dernier examen : "
+ dernierExamen;





}







function resetStats(){



localStorage.removeItem("connus");

localStorage.removeItem("revoir");

localStorage.removeItem("scoresQuiz");

localStorage.removeItem("meilleurScore");

localStorage.removeItem("scoresExamen");



chargerStats();



alert("Toutes les statistiques ont été supprimées");



}







chargerStats();