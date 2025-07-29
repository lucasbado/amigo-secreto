//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

function exibirNomeAdicionado() {
    let amigo = document.querySelector('input').value;
    exibirTextoNaTela('p', `Amigo(a) ${amigo} adicionado com sucesso!`);
    setTimeout(() => {
        exibirTextoNaTela('p', `Amigo(a)s adicionados: ${listaAmigos.length}`);
    }, 3000);
    
}


function adicionarAmigo() {
    
    let amigo = document.querySelector('input').value;
    listaAmigos.push(amigo);
    exibirNomeAdicionado();
    limparCampo();
    console.log(listaAmigos);

}


function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';

}

