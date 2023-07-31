// Pegar os dados do array e colocar em um outro Array;
// Esses dados devem obedecer um seguinte criterio;




const numeros = [1, 2, 3, 4];
let posicao;
let novoArray;
let novoArray1;

for (posicao of numeros) {
    if (posicao > 10 && posicao < 20) {
        novoArray = posicao;
    }
    else if (posicao > 100) {
        novoArray1 = posicao;
    }
}

if (novoArray && novoArray1) {
    console.log(novoArray, novoArray1)
}
else if (novoArray) {
    console.log(novoArray)
}
else if (novoArray1) {
    console.log(novoArray1)
}
else {
    console.log('Não possui numeros que se enquadram na descrição.')
}



