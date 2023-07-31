const numeros = [04, 15, 20, 50, 60, 10]
let indice;
let encontrado;


for (indice of numeros) {
    if (indice === 10) {
        console.log(numeros.indexOf(10));
        encontrado = true;
    }
}

if (!encontrado) {
    console.log('-1')
}

