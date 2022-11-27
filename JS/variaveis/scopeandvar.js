/* Escopo / Scope

> Determina a visibilidade de alguma variável

Block statement

{ - abre o bloco
    - conteúdo do bloco
} - fecha o bloco

O bloco cria um escopo 'block-scoped'

----------------------------------------------------
*/
// var é global e local, funciona fora e dentro de um escopo de blocos
// Hoisting - puxar a varável e colocar em cima

console.log(x)

{
    var x = 0
}

console.log(x)