// Verificar se tem alguma palavra específica

let phrase = "Eu Gosto de Futebol"

console.log(phrase.includes("Amor")) // False

console.log(phrase.includes("futebol")) // False, case-sensitive

console.log(phrase.includes("Futebol")) // True