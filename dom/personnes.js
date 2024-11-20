// Introduction au DOM

const personnes = [
    {prenom : "Jean", nom : "Dupond", age : 50},
    {prenom : "Pierre", nom : "Martin", age : 45},
    {prenom : "Anne", nom : "Durand", age : 17}
]

// Récupérer l'élément ul dont l'id est égal à 'list'

const ulListePersonnes = document.querySelector("#list")

// Parcourir le tableau par créer un <li> pour chaque élément du tableau
// Pour chaque elt du tableau
//     -> 1 : Créer un élément 'li'
//     -> 2 : Affecter une valeur à l'élément 'li'
//     -> 3 : Ajouter le 'li' à la liste (ul)

personnes.forEach(personne =>{
    // 1
    const li = document.createElement('li')
    // 2
    li.textContent = `Prénom : ${personne.prenom}, Nom : ${personne.nom}, Age : ${personne.age}`
    // 3
    ulListePersonnes.appendChild(li)
    })

// Récupérer tous les 'li' de l'élément ul (id=list)

const liElements = document.querySelectorAll("#list > li")

// Afficher sur la console

liElements.forEach(li => console.log(li.textContent))

