let saldo = {
    receita: [1000, 1250, 1500, 800, 690],
    despesa: [200, 700, 1600, 450, 700]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total += value
    }

    return total
}

function calculator() {
    let sumReceita = sum(saldo.receita)
    let sumDespesa = sum(saldo.despesa)

    let saldoTotal = sumReceita - sumDespesa

    let message = "negativo"

    if(saldoTotal >= 0) {
        message = "positivo"
    }

    console.log(`Seu saldo é ${message}, você tem ${saldoTotal} Reais.`)
}

calculator()