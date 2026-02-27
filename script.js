



let joueur = document.getElementById("joueur");
let ennemi = document.getElementById("ennemi");
let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");
let btnMusic = document.getElementById("M");
let scoreHTML = document.getElementById("score");
const music = document.getElementById("music");
let positionJoueur = 175;
let ennemiX = 175;
let ennemiY = 0;

let score = 0;
let musicStarted = false;

function startMusic() {
	console.log("okson");
  if (!musicStarted) {
    music.volume = 0.5;
    music.play().catch(() => {});
    musicStarted = true;
  }
}




function deplacerJoueurClavier(event) {
	if  (event.keyCode == 39)  {
		deplacerDroite();
	    }
	if  (event.keyCode == 37)  {
		deplacerGauche();
	    }
	
}

function deplacerDroite() {
	if (positionJoueur < 375 ) { 
	   console.log(1);
		positionJoueur  = positionJoueur + 20;
		joueur.style.left = positionJoueur+"px";
	}
}

function deplacerGauche() {
	if (positionJoueur > 0 ) { 
		positionJoueur  = positionJoueur - 20;
		joueur.style.left = positionJoueur+"px";
	}
}
function descendreEnnemi() {
	  ennemiY = ennemiY + 5;
	  ennemi.style.top = ennemiY+"px";
	  
	  if (ennemiY > 400 
	      && (ennemiX  +40 > positionJoueur ) 
		  && (positionJoueur  + 40 > ennemiX )) { 
	       ennemiY = 0;
		   ennemiX = Math.floor(Math.random()*375);
		   ennemi.style.left = ennemiX+"px";
		   score  = score +1 ;
		   scoreHTML.innerHTML = score;
		   }
	  else if  (ennemiY > 400){
		  ennemiY = 0;
		  score  = score -1 ;
		  scoreHTML.innerHTML = score;
		  ennemiX = Math.floor(Math.random()*375);
		  ennemi.style.left = ennemiX+"px";
	  }
	
	  

	
}





document.onkeydown = deplacerJoueurClavier;


droite.onclick = deplacerDroite;
gauche.onclick = deplacerGauche;
setInterval(descendreEnnemi, 30);

