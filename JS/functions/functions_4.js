// Functions hoisting

sayPablo()

function sayPablo() {
    console.log("Pablo")
}

// Quando é com uma variável ele não faz o hoisting

sayGreg()

const sayGreg = function () {
    console.log("Greg")
}