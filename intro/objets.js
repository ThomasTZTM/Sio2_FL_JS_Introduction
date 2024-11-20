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
let moyenne = 0
personnes.forEach(elt => moyenne=moyenne+elt.age)
console.log(moyenne/personnes.length)

// 8. Ajouter une nouvelle personne
console.log("Ex 8 : Ajouter une nouvelle personne")
personnes.push({prenom: "Daniel", nom: "Ilod", age: "18"})
console.log(personnes[3])

// 9. Trouver la personne la plus agée
console.log("Ex 9 : Trouver la personne la plus agée")
const vieux = personnes.reduce((vieux, age) => (age.age > vieux.age ? age : vieux));
console.log("Le plus âgé est : ", vieux);

let personneplusagee = personnes[0]
personnes
    .reduce((personneplusagee, personne)=>{
        if (personne.age > personneplusagee.age ){
            return personne
        }
    return personneplusagee
},personnes[0])

// 10. Lister les prénoms triés par ordre alphabétique
console.log("Ex 10 : Lister les prénoms triés par ordre alphabétique")
const nomperso = []
personnes
    .forEach(personne => nomperso.push(personne.prenom))
const nompersotrier = nomperso.sort()
console.log(nompersotrier)

personnes
    .map(personne => personne.prenom)
    .sort()
    .forEach(personne => console.log(personne))

// 11. Compter le nombre de mineur et de majeur
console.log("Ex 11 : Trouver la personne la plus agée")
const tabage = []
personnes
    .forEach(personne => tabage.push(personne.age))
let cptmaj = 0
let cptmin = 0
for (let item of tabage){
    if (item>=18) {
        cptmaj = cptmaj + 1
    }else{
        cptmin = cptmin + 1
    }
}
console.log("Il y a "+cptmin+" mineur(s). Et "+cptmaj+" majeur(s)")

console.log("Ex 11 : Correction")

const perso11 = personnes.reduce((acc, personne) => {
    if (personne.age < 18) {
        acc.mineurs++;
    } else {
        acc.majeurs++;
    }
    return acc;
}, {mineurs: 0, majeurs: 0});

console.log("Nombre de mineurs : "+perso11.mineurs);
console.log("Nombre de majeurs : "+perso11.majeurs);

console.log("Ex 11 : Correction 2 (Ternaire)")

const resultat = personnes.reduce((acc, personne) => {
    personne.age >= 18 ? acc.majeurs ++ : acc.mineurs ++
    return acc;
}, {mineurs: 0, majeurs: 0});

console.log("Nombre de mineurs : "+resultat.mineurs);
console.log("Nombre de majeurs : "+resultat.majeurs);


// 12. Vérifier si tout le monde est majeur
console.log("Ex 12 : Vérifier si tout le monde est majeur")
if (perso11.mineurs>0){
    console.log("Il y a des mineurs")
}else{
    console.log("Tout le monde est mineur")
}

console.log("Ex 12 : Correction")

let toutLeMondeMajeur = personnes.every(personne => personne.age >= 18)
if (toutLeMondeMajeur){
    console.log("Toutes les personnes sont majeurs")
}else{
    console.log("Au moins une personne est mineurs ")
}

// 13. Recherche une personne par prénom
console.log("Ex 13 : Recherche une personne par prénom")

// 14. Supprimer une personne spécifique par son nom
console.log("Ex 14 : Supprimer une personne spécifique par son nom")

// 15. Trouver l'age moyen des personnes majeures
console.log("Ex 15 : Trouver l'age moyen des personnes majeures")

// 16. Vérifier si au moins une personne a un prénom commençant par 'J'
console.log("Ex 16 : Vérifier si au moins une personne a un prénom commençant par 'J'")