const letras = ['a', 'b', 'c', 'e', 'E'];
let quantidade = 0;
let encontrado = true;


for (let posicao of letras) {
    if (posicao === 'e' || posicao === 'E') {
        quantidade++;
    }
}
if (quantidade > 0) {
    console.log(`Foi encontrada ${quantidade}  letra(s) "E" ou "e".`)
}
else {
    console.log('Não foi encontrado as letras "E" e "e".');
}