console.log("Les fonctions en JavaScript")

// 1. Les fonctions "Classique"
function addition1(a,b){
    return a+b
}
console.log(addition1(2,3))

// 2. Les fonctions anonyme (ne portent pas de nom explicite)
const addition2 = function (a,b) {
    return a+b;
}
console.log(addition2(2,3))

// 3. Les fonctions fléchées (arrow functions -> apparue avec le norme ES6)
const addition3 = (a,b) => {
    return a+b;
}
console.log(addition3(2,3))

// 4. Si la fonction possède une seule instruction (return implicite)
const addition4 = (a,b) => a+b
console.log(addition4(2,3))

// 5. Si la fonction possède qu'un seul paramètre
const puissance2 = a => a*a
console.log(puissance2(2))

// 6. Si la fonction ne possède aucun paramètre
const salut = () => console.log("Salut à tous c'est LaSalle !")
salut() // Permet l'exécution de la fonction

// 7. Portée des variables dans les fonctions
// Une variable définit en dehors de toute fonction à une portée globale et est accessible partout dans le code
let variableGlobale = 10
const afficherVariable = () => console.log(variableGlobale)
afficherVariable()

let nombres = [2,8,15,17,26,9,42,4]
// 8.1 Afficher tout les nombres pairs
for(let nombre of nombres) {
    if (nombre % 2 === 0) {
        console.log(nombre)
    }
}
// 8.2 Afficher tous les nombres pairs avec la méthode foreach
nombres.forEach(nombre => {
    if (nombre % 2 === 0) {
        console.log(nombre)
    }
})

// 9. Récupérer dans un tableau tous les nombres >10 puis les afficher
const sup10 = []
const inf10 = []
nombres.forEach(nombre => {
    if (nombre > 10) {
        sup10.push(nombre)
    }else{
        inf10.push(nombre)
    }
})
sup10.forEach(nombre => console.log(nombre))
inf10.forEach(nombre => console.log(nombre))

// 9.1 Correction Récupérer dans un tableau tous les nombres >10 puis les afficher
const nombresSup10 = []
for (const nombre of nombres){
    if (nombre>10){
        nombresSup10.push(nombre)
    }
}
nombresSup10.forEach(nombre => console.log(nombre))

// 9.2 Récupérer dans un tableau tous les nombres >10 puis les afficher
const nombresSup10Filter = nombres.filter( nombre => nombre>10) // On met dans le tableau si le filtre >10 est valide
nombresSup10Filter.forEach(nombre => console.log(nombre))

// 9.3 Amélioration
nombres
    .filter(nombre=> nombre>10)
    .forEach(nombre => console.log(nombre))
