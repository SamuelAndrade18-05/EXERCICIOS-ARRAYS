const numeros = [10, 20, 40, 80, 1020650];
let maior = Math.max.apply(null, numeros);
let menor = Math.min.apply(null, numeros)

let diferenca = maior - menor

console.log(diferenca)