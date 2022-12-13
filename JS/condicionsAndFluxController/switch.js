// Switch

function calculator(number1, operator, number2) {
    let result = 0
    switch(operator) {
        case "+":
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break
        case "/":
            result = number1 / number2
            break
        default:
            console.log("Não definido")
    }

    return result
}

console.log(calculator(10, "-", 2))