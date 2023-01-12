// # Instructions :
// >*En utilisant la methode getElementsByTagName*
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 
const titres = document.getElementsByTagName('h1');
console.log(titres);

// ### 2. Après avoir récupéré tous les paragraphes, stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent
const paragraphes = document.getElementsByTagName('p');
const sousTitres = document.getElementsByTagName('h3');
let sousTitre1 = sousTitres[0];
let sousTitre2 = sousTitres[1];
let sousTitre3 = sousTitres[2];
console.log(sousTitre1);
console.log(sousTitre2);
console.log(sousTitre3);
// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log
// ### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log



