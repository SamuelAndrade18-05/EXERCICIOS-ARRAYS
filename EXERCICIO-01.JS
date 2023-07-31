const numeros = [2, 3, 4, 6];
let posicao;
let soma = 0;

for (posicao of numeros) {
    soma += posicao
    posicao++;
}

console.log(soma)