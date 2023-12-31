//Exercício 1: Soma de Números
//Dado um array de números, use forEach para calcular a soma de todos os elementos

let numeros = [5, 10, 15, 20]
let soma = 0


numeros.forEach((numerosQueTemNOarray)=>{
   soma += numerosQueTemNOarray
})
console.log(soma)

//Exercício 2: Maior Número
//Dado um array de números, use forEach para encontrar e imprimir o maior número no array

/*

O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

Veja também o método find(), que retorna o valor de um elemento encontrado no array em vez de seu índice.



*/

let numeros_parTwo = [8, 3, 11, 6, 2, 7]
let valorMaior = 0
numeros_parTwo.forEach((element)=>{
   valorMaior = Math.max(element)
})

console.log("O maior valor", valorMaior)

let numeros_parTwo_01 = [8, 3, 11, 6, 2, 7]
let valorMaior_01 = 0
numeros_parTwo.forEach((element) => {
   valorMaior_01 = Math.max.apply(null, [valorMaior_01, element])
})

console.log("O maior valor", valorMaior_01)

let numeros_parTwo03 = [8, 3, 11, 6, 2, 7]
let valorMaior03 = 0
numeros_parTwo03.forEach((element) => {
   valorMaior03 = Math.max(...[valorMaior03, element])
})

console.log("O maior valor", valorMaior)
