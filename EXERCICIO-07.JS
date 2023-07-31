const nomes = ['Samuel', 'Dany', 'Karla', 'Souza', 'Silvana', 'Ana', 'amanda', 'alberto', 'Amado'];
let novoArray;
let arrayNovo;
let posicao;

function lista(posicao) {
    return posicao.startsWith('A');

}

function sequencia(posicao) {
    return posicao.startsWith('a');

}

novoArray = nomes.filter(lista);
arrayNovo = nomes.filter(sequencia);


console.log(novoArray, arrayNovo)