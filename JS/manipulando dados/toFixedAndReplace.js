// Tranformar o número quebrado para ter apenas 2 casas decimais e trocar ponto por vírgula

let number = 123.123456789

console.log(number.toFixed(2).replace(".", ",")) // Número com *vírgula* não pode ser um number.