// 1. Les variables en JavaScript
console.log("Cours JavaScript")
console.log("Log tab pour faire automatiquement la commande")

// 2. Déclaration d'une variable
let a = 10
console.log(a)

// 3. La variable peut etre re-affecter
a = 20
console.log(a)

// 4. Dans le cas ou il y a aucune valeur dans b
let b
console.log(b) // retourne Undefined

// 5. Déclaration d'une constante
const c = 10
console.log(c)

// 6. Erreur Constant
    //c = 20
    //console.log(c) // On ne peut par ré-affecter une valeur à une constante
    //const d // On ne peut pas donner aucune valeur à une constante

// 7. Déclaration d'une chaine de caractères
let promotion = "BTS SIO2"
console.log(promotion)

// 8. Immutabilité des chaines
let prenom = "john"
console.log(prenom)
prenom[0] = "J"
console.log(prenom)

// 9. Boxing sur les nombre (classe Number)
// C'est une valeur par laquel une valeur primitive (int, chaine, bool) est temporerement convertie en un objet afin de permettre l'utilisation de méthode

let nombre = 20
let resultat = nombre.toFixed(2)
console.log(resultat)

// 10. Boxing sur une chaine (classe string)
let str = "hello"
console.log(str)
console.log(str.toUpperCase())

// 11. Concaténation de chaines
let ch1 = "Bonjour"
let ch2 = "tout le monde !"
let message = ch1 + ' ' + ch2
console.log(message)
ch1 = "3"
ch2 = "7"
message = ch1+ch2
console.log(message) // Ne fait pas l'addition des deux chaine, il les assembles juste

// 12. Template literals `` (backsticks) (comme sur discord)
let nom = "Pierre"
let age = 30
let presentation = `je m'appelle ${nom} et j'ai ${age} ans` // Interpolation
console.log(presentation)


