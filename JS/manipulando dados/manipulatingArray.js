// Manipulando Arrays

let myArray = ["HTML", "CSS", "JS"]

myArray.push("NodeJS") // Adiciona um elemento no final do array

myArray.unshift("SQL") // Adiciona um elemento no começo do array

// myArray.pop() Remove o último elemento do array

// myArray.shift() Remove o primeiro elemento do array

// console.log(myArray.slice(1, 4)) Seleciona elementos específicos

myArray.splice(3, 1) // Remove elementos específicos

let index = myArray.indexOf("SQL") // Encotrar a posição do elemento no array

myArray.splice(index, 1)

console.log(myArray)
console.log(index)