
let amigos = [];

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function limparCampo(id){
    let nomes = document.getElementById(id);
    nomes.value = '';
}

//Adcionando os nomes dos amigos a uma lista, não dar para adcionar o mesmo amigo duas vezes.
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
function sortearAmigo(){
    if (amigos.length >  1){
       let indiceSorteado = Math.floor(Math.random()*amigos.length);
       let amigoSorteado = amigos[indiceSorteado];
       exibirTextoNaTela("resultado",`${amigoSorteado} foi o amigo sorteado!`);
    }else{
        exibirTextoNaTela("resultado",'Adcione mais amigos!');
    }

}
