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

function adicionarNaLista() {
    let nomeAmigo = document.querySelector('input').value;
    let lista = document.getElementById('listaAmigos');
    let item = document.createElement('li');
    item.textContent = nomeAmigo;
    lista.appendChild(item);

}




function adicionarAmigo() {
    let amigo = document.querySelector('input').value;

    if (amigo.trim() === '') {
        exibirTextoNaTela('p', 'Por favor, digite um nome válido.');
        return;
    }
    listaAmigos.push(amigo);
    exibirNomeAdicionado();
    adicionarNaLista();
    limparCampo();
    document.getElementById('listaAmigos').style.display = 'block';
}

function sortearAmigo() {

    if (listaAmigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }
    let resultado = document.getElementById('resultado');
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceAleatorio];
    document.getElementById('listaAmigos').style.display = 'none';
    resultado.innerHTML += `O amigo(a) sorteado(a) foi <li>${nomeSorteado}</li>`;
    
    setTimeout(() => {
        resultado.innerHTML = '';
    }, 2000);
    
}

function apagarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos = [];
    exibirTextoNaTela('p', 'Lista de amigos apagada com sucesso!');
    setTimeout(() => {
        exibirTextoNaTela('p', `Amigo(a)s adicionados: ${listaAmigos.length}`);
    }, 1000);
    
    

}


function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';

}

document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});