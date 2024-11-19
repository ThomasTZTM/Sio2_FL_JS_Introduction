console.log("Les objets en JavaScript")

// 1. Création d'un objet
const personne1 = {
    // Ce sont des propriétés (nom, prenom, age)
    nom : "Dupond",
    // Ajout d'un tableau
    prenoms : ["Jean","Pierre"],
    age : 30,
    // Ajout d'une classe dans une classe
    adresse : {
        rue : "20 rue de la gare",
        codePostal : "25000",
        ville : "Besançon"
    }
}

// 2. Accéder aux propriétés d'un objet
console.log(personne1) // Affiche un objet
console.log(personne1.nom) // Récupère Dupond
console.log(personne1['nom']) // Récupère aussi Dupond

// 2.1 Accéder aux propriétés d'un sous objet
console.log(personne1.adresse.ville) // Récupère Besançon

// 2.2 Accéder aux propriétés (tableau)
console.log(personne1.prenoms) // Affiche un tableau
console.log(personne1.prenoms[0]) // Affiche Jean

// 3. Combiner les objets et les tableaux
const personnes = [
    {prenom : "Jean", nom : "Dupond", age : 50},
    {prenom : "Pierre", nom : "Martin", age : 45},
    {prenom : "Anne", nom : "Durand", age : 17}
]

// 4. Afficher le nom de toutes les personnes en majuscules
console.log("Ex 4 : Afficher le nom de toutes les personnes en majuscules")
personnes
    .filter(elt => elt.prenom)
    .map((x) => x.nom.toUpperCase())
    .forEach(nom => console.log(nom))

// 5. Récupérer dans un tableau l'identité de chaque personne sous la forme (prenom nom)
console.log("Ex 5 : Récupérer dans un tableau l'identité de chaque personne sous la forme (prenom nom)")
personnes
    .forEach(personne => console.log(personne.prenom+" "+personne.nom))

// 6. Afficher le nom de toutes les personnes majeures
console.log("Ex 6 : Afficher le nom de toutes les personnes majeures")
personnes
    .filter(elt => elt.age > 18)
    .forEach(nom => console.log(nom.nom))

// 7. Calculer et afficher la moyenne d'age des personnes
console.log("Ex 7 : Calculer et afficher la moyenne d'age des personnes")
let moyenneAge = personnes
    .filter(elt => elt.age)
    .reduce((somme, age) => somme + age, 0)
console.log(moyenneAge)

// 8. Ajouter une nouvelle personne
personnes.push({prenom: "Daniel", nom: "Ilod", age: "18"})
console.log(personnes[3])
