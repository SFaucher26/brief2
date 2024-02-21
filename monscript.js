

const carrouselImages = document.querySelectorAll('.carrousel_img_div');


let currentImageIndex = 0;

function showNextImage() {
    carrouselImages[currentImageIndex].classList.remove('active');
    carrouselImages[currentImageIndex].classList.add('notActive');
    currentImageIndex = (currentImageIndex + 1) % carrouselImages.length;
    carrouselImages[currentImageIndex].classList.remove('notActive');
    carrouselImages[currentImageIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showNextImage();

    setInterval(showNextImage, 3000);
});

/*script pour récupérer les données de formulaires dans la console*/
/*----------------------------------------------------------------*/
document.getElementById("myForm").addEventListener("submit", (e) => {
//j'empêche la page de se recharger pour pouvoir lire les infos
e.preventDefault();

// Je récupère les valeurs des champs du formulaire
const nom = document.getElementById("fname").value;
const prenom = document.getElementById("lname").value;
const message = document.getElementById("message").value;

// j'affiche les valeurs dans la console
console.log("Nom : " + nom);
console.log("Prénom : " + prenom);
console.log("Message : "+ message);
});
/*fin de récupération des données de formulaire-------------------*/


/*script pour afficher les éléments recherchés par l'utilisateur--*/
//tableau d'objets
var tableauPersonnages = [
    {nom : "Pegase", saison : "1" , episode : "3"},
    {nom : "Pegase", saison : "3" , episode : "6"},
    {nom : "Pegase", saison : "6" , episode : "3"},
    {nom : "Pegase", saison : "8" , episode : "2"},
];
//Sélection de l'élément parent qui affichera les cartes
let tableauCartes = document.getElementById("tableau-cartes");

//boucle sur le tableau d'objet pour créer les cartes 
tableauPersonnages.forEach((personnage)=>{
    //création d'un élement div pour la carte
    let carte = document.createElement("div");
    carte.classList.add("card");

    //On ajoute les données du tableau à la carte
    carte.innerHTML = `
    <h2>${personnage.nom}<h2>
    <p>${personnage.saison}<p>
    <p>${personnage.episode}<p>
    `;
    //j'ajoute la carte à l'élément parent
    tableauCartes.appendChild(carte);
});
/*fin du script de la page recherche------------------------------*/