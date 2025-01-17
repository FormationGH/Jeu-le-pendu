// Liste des mots à deviner
const mots = [
  "ordinateur",
  "informatique",
  "journal",
  "panier",
  "tableau",
  "souvenirs",
  "ruban",
  "ardoise",
  "chapeaux",
  "jardin",
];

let motAleatoire;
let lettresProposees = [];
let motPropose = [];
let compteur;

// FONCTION POUR LE DEMARRAGE DU JEU
function departJeu() {
  motAleatoire = mots[Math.floor(Math.random() * mots.length)];
 
  // REINITIALISATION DU JEU AU DEPART
  compteur = 6;
  lettresProposees = [];
  motPropose = [];

  document.getElementById("message").textContent = "";
  document.getElementById("champsLettre").value = "";
  document.getElementById("champsMot").value = "";
  document.getElementById("imageDuPendu").src = "images/pendu0.png";

  afficherMot();
}

// FONCTION POUR GERER LA PERTE
function gererPerte() {
  document.getElementById("message").textContent =
    "Vous avez perdu, le mot était " + motAleatoire;
  document.querySelector("#message").style.color = "red";
  document.getElementById("motAtrouver").textContent = motAleatoire;
  document.getElementById("champsMot").disabled = true;
  document.getElementById("champsLettre").disabled = true;
}

// FONCTION POUR GERER LA VICTOIRE
function gererVictoire() {
  document.getElementById("message").textContent =
    "Bravo, vous avez trouvé le mot " + motAleatoire;
  document.querySelector("#message").style.color = "green";
  document.getElementById("motAtrouver").textContent = motAleatoire;
  document.getElementById("champsMot").disabled = true;
  document.getElementById("champsLettre").disabled = true;
}

// FONCTION POUR GERER LES LETTRES DEJA PROPOSEES
function gererLettreDejaProposee() {
  document.getElementById("message").textContent = "Lettre déjà proposée";
  document.querySelector("#message").style.color = "orange";
}

// FONCTION POUR GERER LES MOTS DEJA PROPOSES
function gererMotDejaPropose() {
  document.getElementById("message").textContent = "Mot déjà proposé";
  document.querySelector("#message").style.color = "orange";
}

// PREPARATION DU MOT A AFFICHER
function afficherMot() {
    let motAafficherTableau = []; // Stocker le mot à afficher

  for (let i = 0; i < motAleatoire.length; i++) {
    const lettreAtrouver = motAleatoire[i];
    //Si la lettre est proposée, l'afficher, sinon afficher _
    if (lettresProposees.includes(lettreAtrouver)) {
      motAafficherTableau.push(lettreAtrouver);
    } else {
      motAafficherTableau.push("_");
    }
  }
  const motAafficher = motAafficherTableau.join(" ");
  document.getElementById("motAtrouver").textContent = motAafficher;

  // SI LE MOT A ETE TROUVE
  if (motAafficher.replace(/ /g, "") === motAleatoire) {
    gererVictoire(); // Appel de la fonction pour gérer la victoire
  }
}
departJeu();

// ENTREES UTILISATEUR POUR LES LETTRES
const champsLettre = document.getElementById("champsLettre");

champsLettre.addEventListener("input", (e) => {
  const lettreAtrouver = e.target.value.toLowerCase();

  // Vérifier si la lettre déjà est proposé
  if (lettresProposees.includes(lettreAtrouver)) {
    gererLettreDejaProposee();
    document.getElementById("champsLettre").value = "";
    return;
  } else {
    lettresProposees.push(lettreAtrouver); //Ajoute la lettre proposée à la liste
  }
  if (!motAleatoire.includes(lettreAtrouver)) {
    compteur--;
    document.getElementById("imageDuPendu").src = `images/pendu${
      6 - compteur
    }.png`;
    if (compteur === 0) {
      gererPerte(); // Appel de la fonction pour gérer la perte
    }
  }

  afficherMot();
  document.getElementById("champsLettre").value = "";
});

// ENTREES UTILISATEUR POUR LE MOT

const champsMot = document.getElementById("champsMot");
champsMot.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const mot = e.target.value.toLowerCase();

    // Vérifier si le mot déjà est proposé
    if (motPropose.includes(mot)) {
      gererLettreDejaProposee();
      document.getElementById("champsMot").value = "";
      return;
    }

    motPropose.push(mot); //Ajoute le mot proposé à la liste

    // SI LE MOT PROPOSE EST CORRECT
    if (mot === motAleatoire) {
      gererVictoire(); // Appel de la fonction pour gérer la victoire
    } else {
      compteur--;
      if (compteur >= 0) {
        document.getElementById("imageDuPendu").src = `images/pendu${
          6 - compteur
        }.png`;
      }

      if (compteur === 0) {
        gererPerte(); // Appel de la fonction pour gérer la perte
      }
    }
    afficherMot();
    document.getElementById("champsMot").value = "";
  }
});

// RECOMMENCER LE JEU
document.getElementById("recommencer").addEventListener("click", () => {
  document.getElementById("champsLettre").disabled = false;
  document.getElementById("champsMot").disabled = false;

  departJeu();
});

// STYLE DU BOUTON
const boutonRecommencer = document.querySelector("button");
boutonRecommencer.addEventListener("mouseover", () => {
  boutonRecommencer.style.backgroundColor = "rgb(200, 200, 200)";
  boutonRecommencer.style.cursor = "pointer";
});

boutonRecommencer.addEventListener("mouseout", () => {
  boutonRecommencer.style.backgroundColor = "";
});
