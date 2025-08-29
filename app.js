//Lista vazia onde irei receber os nomes dos amigos adcionados.
let amigos = [];

//Função para exibir o texto desejado na tela puxando o id do HTML.
function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

//Função utilizada para limpar os campos desejados.
function limparCampo(id){
    let nomes = document.getElementById(id);
    nomes.value = '';
}

// função que adciona os nomes dos amigos a uma lista.
function adicionarAmigo(){
    let amigosInseridos = document.querySelector('input').value;
    if (amigosInseridos == "") {
        exibirTextoNaTela("resultado",'Digite um nome válido!');
        limparCampo("amigo");
        return;
    } if (!amigos.includes(amigosInseridos)){
        amigos.push(amigosInseridos);
        exibirTextoNaTela("listaAmigos",amigos);
        exibirTextoNaTela("resultado","");
        limparCampo("amigo");
    }else{
        exibirTextoNaTela("resultado",'Nome já esta na lista');
        limparCampo("amigo");
    }
    return amigosInseridos;
}

// Função que sorteia os nomes dos amigos.
function sortearAmigo(){
    if (amigos.length >  1){
       let indiceSorteado = Math.floor(Math.random()*amigos.length);
       let amigoSorteado = amigos[indiceSorteado];
       exibirTextoNaTela("resultado",`${amigoSorteado} foi o amigo sorteado!`);
    }else{
        exibirTextoNaTela("resultado",'Adcione mais amigos!');
    }

}
