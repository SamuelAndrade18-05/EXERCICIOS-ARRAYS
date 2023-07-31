const filaDeDentro = ['Jose', 'Maria', 'Joao']; //Limite de 5 pessoas
const filaDeFora = ['Samuel', 'Dany', 'Marcos', 'Felipe'];
let posicao;

for (posicao of filaDeDentro) {
    if (filaDeDentro.length <= 4) {
        filaDeDentro.push(filaDeFora[0])
        filaDeFora.shift();
    }
}

console.log(`A fila de dentro é: ${filaDeDentro}`);
console.log(`A fila de fora é: ${filaDeFora}`);
