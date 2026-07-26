console.log("Quiz.js chargé !");



let cocktailQuiz;

let bonneReponse = "";

let score = 0;

let numeroQuestion = 0;

let aRepondu = false;

let totalQuestions = 10;





function chargerQuestion(){


aRepondu = false;



document.getElementById("resultat").textContent = "";



if(numeroQuestion >= totalQuestions){


finQuiz();

return;


}



cocktailQuiz = cocktails[

Math.floor(Math.random()*cocktails.length)

];



numeroQuestion++;





document.getElementById("score").textContent =

"Score : "
+
score
+
" / "
+
(numeroQuestion-1);





let typeQuestion = Math.floor(Math.random()*3);



let reponses = [];





if(typeQuestion === 0){



document.getElementById("question").textContent =


"Quel verre utilise le "
+
cocktailQuiz.nom
+
" ?";



bonneReponse =
cocktailQuiz.verre;



reponses.push(bonneReponse);



while(reponses.length < 4){



let faux = cocktails[

Math.floor(Math.random()*cocktails.length)

].verre;



if(!reponses.includes(faux)){


reponses.push(faux);


}


}



}





else if(typeQuestion === 1){



document.getElementById("question").textContent =


"Quel est l'ingrédient principal du "
+
cocktailQuiz.nom
+
" ?";



bonneReponse =
cocktailQuiz.ingredients[0];



reponses.push(bonneReponse);



while(reponses.length < 4){



let faux = cocktails[

Math.floor(Math.random()*cocktails.length)

].ingredients[0];



if(!reponses.includes(faux)){


reponses.push(faux);


}


}



}





else{



document.getElementById("question").textContent =


"Quelle est la technique du "
+
cocktailQuiz.nom
+
" ?";



bonneReponse =
cocktailQuiz.technique;



reponses.push(bonneReponse);



while(reponses.length < 4){



let faux = cocktails[

Math.floor(Math.random()*cocktails.length)

].technique;



if(!reponses.includes(faux)){


reponses.push(faux);


}


}



}






reponses.sort(()=>Math.random()-0.5);





for(let i=0;i<4;i++){



let bouton =
document.getElementById("choix"+i);



bouton.textContent =
reponses[i];



bouton.dataset.reponse =
reponses[i];



bouton.disabled = false;



bouton.classList.remove("bonne");

bouton.classList.remove("mauvaise");



}



}









function repondre(numero){



if(aRepondu){

return;

}



aRepondu = true;



let bouton =

document.getElementById("choix"+numero);





for(let i=0;i<4;i++){


document.getElementById("choix"+i).disabled = true;


}






if(bouton.dataset.reponse === bonneReponse){



score++;



bouton.classList.add("bonne");



document.getElementById("resultat").textContent =

"✅ Bonne réponse !";



}

else{



bouton.classList.add("mauvaise");



document.getElementById("resultat").textContent =

"❌ Mauvaise réponse. La réponse était : "
+
bonneReponse;



}






for(let i=0;i<4;i++){



let b = document.getElementById("choix"+i);



if(b.dataset.reponse === bonneReponse){


b.classList.add("bonne");


}



}






document.getElementById("score").textContent =

"Score : "
+
score
+
" / "
+
numeroQuestion;



}









function questionSuivante(){



if(!aRepondu){


alert("⚠️ Choisis une réponse avant de continuer !");


return;


}



chargerQuestion();



}









function finQuiz(){



document.getElementById("question").textContent =

"🎉 Quiz terminé !";



document.getElementById("resultat").textContent =

"Score final : "
+
score
+
" / "
+
totalQuestions;





let scores =

JSON.parse(localStorage.getItem("scoresQuiz")) || [];



scores.push(score);



localStorage.setItem(

"scoresQuiz",

JSON.stringify(scores)

);





let meilleur = Math.max(...scores);



localStorage.setItem(

"meilleurScore",

meilleur

);



console.log(

"Scores sauvegardés :",

scores

);



}







chargerQuestion();