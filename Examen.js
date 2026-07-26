console.log("Examen.js chargé !");


let questionsExamen = [];

let questionActuelle = 0;

let scoreExamen = 0;

let aRepondu = false;



function preparerExamen(){


questionsExamen = [];

questionActuelle = 0;

scoreExamen = 0;



let liste = [...cocktails]
.sort(() => Math.random() - 0.5)
.slice(0,30);



liste.forEach(cocktail => {



let question = {};

let reponses = [];

let type = Math.floor(Math.random()*3);



if(type === 0){


question.texte =
"Quel verre utilise le " + cocktail.nom + " ?";


question.bonne =
cocktail.verre;


reponses.push(question.bonne);



while(reponses.length < 4){


let faux =
cocktails[Math.floor(Math.random()*cocktails.length)].verre;


if(!reponses.includes(faux)){

reponses.push(faux);

}


}



}



else if(type === 1){



question.texte =
"Quel est l'ingrédient principal du " + cocktail.nom + " ?";


question.bonne =
cocktail.ingredients[0];


reponses.push(question.bonne);



while(reponses.length < 4){


let faux =
cocktails[Math.floor(Math.random()*cocktails.length)].ingredients[0];


if(!reponses.includes(faux)){

reponses.push(faux);

}


}



}



else{



question.texte =
"Quelle est la technique du " + cocktail.nom + " ?";


question.bonne =
cocktail.technique;


reponses.push(question.bonne);



while(reponses.length < 4){


let faux =
cocktails[Math.floor(Math.random()*cocktails.length)].technique;


if(!reponses.includes(faux)){

reponses.push(faux);

}


}


}



reponses.sort(()=>Math.random()-0.5);



question.reponses = reponses;



questionsExamen.push(question);



});



chargerQuestion();


}





function chargerQuestion(){



aRepondu = false;



if(questionActuelle >= questionsExamen.length){


finExamen();

return;

}



let question =
questionsExamen[questionActuelle];



document.getElementById("progressionExamen").textContent =

"Question "
+
(questionActuelle+1)
+
" / 30";




document.getElementById("question").textContent =
question.texte;




document.getElementById("resultat").textContent = "";




for(let i=0;i<4;i++){


let bouton =
document.getElementById("choix"+i);



bouton.textContent =
question.reponses[i];


bouton.dataset.reponse =
question.reponses[i];


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



let bonne =
questionsExamen[questionActuelle].bonne;



for(let i=0;i<4;i++){

document.getElementById("choix"+i).disabled = true;

}





if(bouton.dataset.reponse === bonne){


scoreExamen++;


bouton.classList.add("bonne");


document.getElementById("resultat").textContent =
"✅ Bonne réponse !";


}

else{


bouton.classList.add("mauvaise");


document.getElementById("resultat").textContent =

"❌ Mauvaise réponse";


}




for(let i=0;i<4;i++){


let b =
document.getElementById("choix"+i);



if(b.dataset.reponse === bonne){

b.classList.add("bonne");

}



}



}





function questionSuivante(){



if(!aRepondu){


alert("⚠️ Choisis une réponse avant de continuer !");


return;


}



questionActuelle++;


chargerQuestion();



}





function finExamen(){



document.getElementById("question").textContent =
"🎓 Examen terminé !";



let pourcentage =
Math.round((scoreExamen/30)*100);




if(pourcentage >= 70){


document.getElementById("resultat").textContent =

"🏆 Réussi : "
+
scoreExamen
+
"/30";


}

else{


document.getElementById("resultat").textContent =

"❌ Échec : "
+
scoreExamen
+
"/30";


}





let anciens =

JSON.parse(localStorage.getItem("scoresExamen")) || [];



anciens.push(scoreExamen);



localStorage.setItem(

"scoresExamen",

JSON.stringify(anciens)

);



}





preparerExamen();