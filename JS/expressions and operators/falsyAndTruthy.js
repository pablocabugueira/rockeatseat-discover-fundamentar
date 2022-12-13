// Falsy e Truthy

// Quando é obrigatório um boolean
/* é considerado false:
    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(false ? "Verdadeiro" : "False")
console.log(0 ? "Verdadeiro" : "False")
console.log(-0 ? "Verdadeiro" : "False")
console.log("" ? "Verdadeiro" : "False")
console.log(null ? "Verdadeiro" : "False")
console.log(undefined ? "Verdadeiro" : "False")
console.log(NaN ? "Verdadeiro" : "False")

/* é considerado true:

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(true ? "Verdadeiro" : "False")
console.log({} ? "Verdadeiro" : "False")
console.log([] ? "Verdadeiro" : "False")
console.log(1 ? "Verdadeiro" : "False")
console.log(3.23 ? "Verdadeiro" : "False")
console.log("0" ? "Verdadeiro" : "False")
console.log("false" ? "Verdadeiro" : "False")
console.log(Infinity ? "Verdadeiro" : "False")
console.log(-Infinity ? "Verdadeiro" : "False")