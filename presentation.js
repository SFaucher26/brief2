let chevaliers = [
    {
        nom: "Seiya de Pégase",
        description: "Seiya est le héros principal de cette histoire. Chevalier de Bronze de Pégase, il a obtenu son armure en Grèce au sein même du Sanctuaire. Sa motivation pour aller suivre l’entraînement de Chevalier est de pouvoir, après avoir obtenu l’armure de Pégase, retrouver sa sœur de qui il a été séparé de force.",
        imgUrl: "./img/seiya.webp",
        imgAlt: "image de Seiya"
    },
    {
        nom: "Shiryu du Dragon",
        description: "Shiryu est le chevalier de Bronze du Dragon. Il a effectué son entrainement et obtenu son armure en Chine. Profondément épris de justice qu’il considère comme quelque chose d’absolu, il n’hésite jamais à mettre sa vie en jeu pour la défendre.",
        imgUrl: "./img/shiryu2.webp",
        imgAlt: "image de Shiryu"
    },
    {
        nom: "Hyôga du Cygne",
        description: "Hyôga a effectué son entrainement en Sibérie. Cachant un douloureux passé, il décide de devenir le chevalier de Bronze du Cygne pour acquérir la force nécessaire, afin de pouvoir plonger dans l’eau glacée et se rendre sur le tombeau de sa mère. Cette dernière repose dans une épave au fond de la mer de glace, suite au naufrage du bateau les conduisant au Japon.",
        imgUrl: "./img/hyoga2.webp",
        imgAlt: "image de Hyôga"
    },
    {
        nom: "Shun d’Andromède",
        description: "Shun est le chevalier de Bronze d’Andromède et le frère d’Ikki. Malgré un tempérament calme et foncièrement pacifiste, il serait le plus puissant des chevaliers de Bronze. Il déteste se battre et tente toujours de raisonner son ennemi avant de recourir à la force.",
        imgUrl: "./img/shun2.webp",
        imgAlt: "image de Shun"
    },
    {
        nom: "Ikki du Phoenix",
        description: "Ikki est un cas un peu particulier. Chevalier de Bronze du Phénix, il est d’abord un ennemi qui cherche à s’emparer de l’armure d’Or du Sagittaire et à conquérir le monde. Il se rallie à Athéna en se rendant compte de sa méprise. Ne faisant pas réellement partie du « noyau dur » des chevaliers de Bronze, il apparait quand bon lui semble et est indépendant, comparé aux autres.",
        imgUrl: "./img/ikki2.webp",
        imgAlt: "image de Ikki"
    }
];

let sectionPersonnages = document.getElementById("personnages");


chevaliers.forEach(chevalier => {

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