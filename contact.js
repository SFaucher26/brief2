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
    console.log("Message : " + message);
});
/*fin de récupération des données de formulaire-------------------*/