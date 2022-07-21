let numero1 =Number (prompt('Digite um número'))
let numero2 =Number (prompt('Digite outro número'))

console.log("o primeiro número é maior que o segundo?")
let primeiroMaior = numero1>numero2
console.log(primeiroMaior)

console.log("o primeiro número é  igual ao segundo?")
let primeiroIgual = numero1===numero2
console.log(primeiroIgual)

console.log("o primeiro número é  divisivel pelo segundo?")
let divisao = numero1%numero2
let resposta = divisao == 0
console.log(resposta)

console.log("o segundo número é  divisivel pelo primeiro?")
let divisao1 = numero2%numero1
let resposta2 = divisao1 == 0
console.log(resposta2)

