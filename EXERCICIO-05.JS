// pecorra array original separando os numeros pares - CHECK
// dos numeros pares, os coloque em um novo array
// e então, mostre na tela o novo array


const original = [1, 21, 39, 43, 51, 20, 22]
let posicao;
let variavelPar;
let novoArray;
let encontrado;

function lista(posicao) {
    return posicao % 2 === 0;
    encontrado = true;
}

novoArray = original.filter(lista);

console.log(novoArray);

