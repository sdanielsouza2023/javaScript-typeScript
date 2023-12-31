let pessoas = [
  {
    nome: "João Silva",
    email: "joao.silva@email.com",
    idade: 25,
    dataNascimento: "1998-03-15",
    telefone: "(11) 98765-4321"
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    idade: 30,
    dataNascimento: "1992-07-22",
    telefone: "(21) 99999-8888"
  },
  {
    nome: "Carlos Pereira",
    email: "carlos.pereira@email.com",
    idade: 22,
    dataNascimento: "2001-05-10",
    telefone: "(31) 12345-6789"
  }

]
/*
pessoas.forEach((element, index)=>{
  console.log("Dados Pessoas:", element , "Posicao: " , index)
})
*/
let numeros = [1, 2, 3, 4, 5]



let soma = 0
numeros.forEach(qualquerEl => soma += qualquerEl)
let outrosNumeros = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5]

outrosNumeros.forEach((valor, possicao, proprioArray) => {
  console.log("O valor do numero: ", valor, "Se encontra na Possival Tal: ", possicao, "O proprio array : ", proprioArray)
})
console.log(outrosNumeros)
// sera que posso digitrar qualquer valor da funcao ????
// qualquer paramento
console.log(soma)
console.log(numeros)

// exercicios mostrando os numeros pares dentro de um array 

let numerosAserVerificado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeroPar = []

numerosAserVerificado.forEach((numeroValor) => {
  if ((numeroValor % 2) === 0) {
      numeroPar.push(numeroValor)
  }
})

console.log(numeroPar)


var frutas = ["maçã", "banana", "pera", "uva"];

frutas.forEach(function(fruta, index, array) {
  array[index] = fruta.toUpperCase();
  //array[0]
});

console.log("Frutas em maiúsculas:", frutas);
