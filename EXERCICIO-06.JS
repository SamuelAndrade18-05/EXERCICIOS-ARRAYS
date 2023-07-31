// pecorrer o array que tem numeros inteiros;
// desses numeros, pega somente os numeros pares;
// e efetua a soma dos numeros pares
// mostra na tela

const numeros = [1, 1, 1, 1, 2, 2, 2, 2, 10]
let posicao = 0
let somaDosNumeros = 0

for (posicao of numeros) {
    if (posicao % 2 === 0) {
        somaDosNumeros += posicao;
        posicao++
    }
}
console.log(somaDosNumeros)