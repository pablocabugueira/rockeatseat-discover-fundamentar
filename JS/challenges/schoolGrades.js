let notaFinal = ""

function getScore(nota) {
    if(nota >= 90 && nota <= 100) {
        notaFinal = "A"
    } else if(nota >= 80 && nota <= 89) {
        notaFinal = "B"
    } else if(nota >= 70 && nota <= 79) {
        notaFinal = "C"
    } else if(nota >= 60 && nota <= 69) {
        notaFinal = "D"
    } else if(nota <= 59 && nota >= 0) {
        notaFinal = "F"
    } else {
        notaFinal = "Nota Inválida"
    }

    return notaFinal
}

console.log(getScore(-1))
console.log(getScore(101))
console.log(getScore(0))
console.log(getScore(59))
console.log(getScore(69))
console.log(getScore(79))
console.log(getScore(89))
console.log(getScore(99))