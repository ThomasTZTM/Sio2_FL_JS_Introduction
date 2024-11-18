console.log("Les tableaux en JavaScript")

// 1. Déclarer un tableau
const tab = [10,20,44,12]
console.log(tab) // Affiche la longueur et son contenue

// 2. Un tableau est un objet de la classe Array
console.log(tab.length) // La longueur du tableau

// 3. Accéder à un élément du tableau
console.log(tab[1])
console.log(tab[tab.length-1]) // Le dernier élément du tableau

// 4. Ajouter un élément à la fin du tableau
tab.push(66)
console.log(tab)

// 5. Ajouter un élément au début du tableau
tab.unshift(5)
console.log(tab)

// 6. Ajouter un élément à un index spécifique du tableau
tab.splice(1, 0, 666)
console.log(tab)

// 7. Parcourir un tableau
// Boucle for "classique"
for (let i =0; i< tab.length; i++){
    console.log(tab[i])
}
// Boucle for...of
for(let nombre of tab){
    console.log(nombre)
}

