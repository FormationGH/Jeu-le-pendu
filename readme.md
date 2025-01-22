# Présentation du projet

Ce site créé pour jouer au jeu « Le pendu » est composé :
1.	Structure de la page (fichier HTML) 
Tous les éléments nécessaires ont été créés (Le titre du jeu, un bref résumé du jeu, l’emplacement pout l’image du personnage = le pendu, le champ pour entrer la lettre, le champ pour entrer le mot, l’emplacement où sera affiché un message en cas de perte ou de victoire, un bouton pour recommencer une nouvelle partie).
Une petite icone représentant une potence est ajoutée à l’onglet avec le titre du jeu
Des balises cartes sociales ont été également intégrées à ce fichier pour optimiser la présentation du site lors du partage sur les réseaux sociaux.
2.	Mise en forme et design (fichier css) 
La page est épurée, seul le nécessaire est présent et les couleurs sont modernes (3 couleurs seulement). Le dessin est bien visible et tout est en harmonie.
Ce jeu est responsive, il peut donc être utilisé sur les écrans pc, les tablettes ou encore les smartphones puisque son format est adapté à plusieurs tailles d’écran.

3.	Les images
Représentent la potence au démarrage du jeu et les 6 images du personnage (le pendu) qui sera formé au fur et à mesure des pertes du joueur (7 au total).
L’icône est également intégrée au dossier images.

4.	Fichier Javascript

Ce fichier regroupe la logique du jeu. 
Dès le démarrage, tous les champs seront vides jusqu’à la 1ère entrée de l’utilisateur (d’une lettre ou d’un mot).
Le joueur doit entrer à l’aide du clavier, soit une lettre (voir consigne « Entrez une lettre » dans le champ), soit un mot (voir consigne « Entrez un mot » dans le champ). 
Le nombre d’essais est paramétré à 6. 
Le jeu contient un tableau composé de 10 mots différents à deviner.
Lorsque le joueur tapera une lettre dans le champ, soit elle fait partie du mot aléatoire, dans ce cas elle s’affiche, soit elle n’est pas présente dans le mot aléatoire et dans ce cas, une partie du personnage apparait dans l’image de gauche. 
Chaque lettre déjà tapée est stockée de façon à ce qu’elle ne soit pas considérée comme une erreur et un message s’affiche en orange « lettre déjà tapée » pour prévenir le joueur.

* 2 possibilités : 
1. Le jeu est perdu
Lorsque le joueur fait 6 erreurs = le compteur est à 0 = le personnage est complet, un message s’affiche en rouge pour avertir le joueur « Vous avez perdu, le mot était " + le mot qui était à deviner ». 
Les champs « Entrez une lettre » et « Entrez un mot » sont désactivés pour éviter au joueur de continuer à entrer des lettres ou mots. Le jeu est terminé.

2. Le jeu est gagné
Si l’utilisateur trouve le mot (donc n’utilise pas ses 6 chances) = le compteur n’est pas à 0 = le personnage n’est pas complet, un message s’affiche en vert pour avertir le joueur « Bravo, vous avez trouvé le mot ! + le mot qui était à deviner »
Les champs « Entrez une lettre » et « Entrez un mot » sont désactivés pour éviter à l’utilisateur de continuer à entrer des lettres ou mots. Le jeu est terminé.

Fin de partie
Lorsque la partie est terminée, l’utilisateur a le choix de recommencer une partie en cliquant sur le bouton « Recommencer ». Tout sera réinitialisé pour redémarrer à zéro avec un nouveau mot.

