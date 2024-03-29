
/*script pour afficher les éléments recherchés par l'utilisateur--*/
//tableau d'objets
let chevaliers = [
  {
    nom: "Seiya de Pégase",
    description:
      "Seiya est le héros principal de cette histoire. Chevalier de Bronze de Pégase, il a obtenu son armure en Grèce au sein même du Sanctuaire. Sa motivation pour aller suivre l’entraînement de Chevalier est de pouvoir, après avoir obtenu l’armure de Pégase, retrouver sa sœur de qui il a été séparé de force.",
    imgUrl: "./img/seiya.webp",
    imgAlt: "image de Seiya",
  },
  {
    nom: "Shiryu du Dragon",
    description:
      "Shiryu est le chevalier de Bronze du Dragon. Il a effectué son entrainement et obtenu son armure en Chine. Profondément épris de justice qu’il considère comme quelque chose d’absolu, il n’hésite jamais à mettre sa vie en jeu pour la défendre.",
    imgUrl: "./img/shiryu2.webp",
    imgAlt: "image de Shiryu",
  },
  {
    nom: "Hyôga du Cygne",
    description:
      "Hyôga a effectué son entrainement en Sibérie. Cachant un douloureux passé, il décide de devenir le chevalier de Bronze du Cygne pour acquérir la force nécessaire, afin de pouvoir plonger dans l’eau glacée et se rendre sur le tombeau de sa mère. Cette dernière repose dans une épave au fond de la mer de glace, suite au naufrage du bateau les conduisant au Japon.",
    imgUrl: "./img/hyoga2.webp",
    imgAlt: "image de Hyôga",
  },
  {
    nom: "Shun d’Andromède",
    description:
      "Shun est le chevalier de Bronze d’Andromède et le frère d’Ikki. Malgré un tempérament calme et foncièrement pacifiste, il serait le plus puissant des chevaliers de Bronze. Il déteste se battre et tente toujours de raisonner son ennemi avant de recourir à la force.",
    imgUrl: "./img/shun2.webp",
    imgAlt: "image de Shun",
  },
  {
    nom: "Ikki du Phoenix",
    description:
      "Ikki est un cas un peu particulier. Chevalier de Bronze du Phénix, il est d’abord un ennemi qui cherche à s’emparer de l’armure d’Or du Sagittaire et à conquérir le monde. Il se rallie à Athéna en se rendant compte de sa méprise. Ne faisant pas réellement partie du « noyau dur » des chevaliers de Bronze, il apparait quand bon lui semble et est indépendant, comparé aux autres.",
    imgUrl: "./img/ikki2.webp",
    imgAlt: "image de Ikki",
  },
];

//fonction qui permet de mettre en capitale la première lettre de l'entrée de la recherche
//pour correspondre avec les noms des chevaliers dans le tableau d'objets
function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

//Sélection de l'élément parent qui affichera les cartes
let sectionPersonnages = document.getElementById("personnages");

//Evènement à écouter
let form = document.getElementById("recherche");

form.addEventListener("submit", (e) => {
  e.preventDefault();


  //je récupère les datas entrées par l'utilisateur dans l'input du formulaire
  const data = Object.fromEntries(new FormData(e.target));

  const filteredChevaliers = chevaliers.filter(
    (chevalier) => {
      return chevalier.nom.includes(capitalizeFirstLetter(data.rechercheInput.trim()));
    })
  console.log(filteredChevaliers);

  //Effacer les résultats précédents avant d'afficher les nouveaux
  sectionPersonnages.innerHTML = "";

  //Afficher les chevaliers filtrés
  if(filteredChevaliers.length > 0){
  filteredChevaliers.forEach(chevalier => {
    let divPersonnage = document.createElement("div");
    divPersonnage.classList.add("personnage");

    // gestion image
    let divImage = document.createElement("div");
    divImage.classList.add("image");
    let imgElement = document.createElement("img");
    imgElement.src = chevalier.imgUrl;
    imgElement.alt = chevalier.imgAlt;
    divImage.appendChild(imgElement);

    let divDetail = document.createElement("div");
    divDetail.classList.add("detail");

    let h3Nom = document.createElement("h3");
    h3Nom.classList.add("personnage_detail_nom");
    h3Nom.textContent = chevalier.nom;

    let pDescription = document.createElement("p");
    pDescription.classList.add("personnage_detail_histoire");
    pDescription.textContent = chevalier.description;

    divDetail.appendChild(h3Nom);
    divDetail.appendChild(pDescription);
    divPersonnage.appendChild(divImage);
    divPersonnage.appendChild(divDetail);
    sectionPersonnages.appendChild(divPersonnage);
  });
  }else{
    //j'affiche un message indiquant qu'il n'y a pas de résultat
    const message = document.createElement("p");
    message.textContent = "Pas de résultat pour cette recherche !";
    sectionPersonnages.appendChild(message);
  }
});

/*fin du script de la page recherche------------------------------*/
