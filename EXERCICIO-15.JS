//De um array original, separar os numeros pares dos ímpares
// Em um novo array coloca os pares;
//No outro coloca os ímpares;

const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
let posicao;

for (posicao of original) {
    let resultado = posicao % 2;
    if (resultado === 0) {
        pares.push(posicao);

    }

    else {
        impares.push(posicao);
    }
}
console.log(pares);
console.log(impares);