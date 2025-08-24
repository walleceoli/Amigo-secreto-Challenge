
let amigos = [];
function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}
function limparCampo(id){
    nomes = document.getElementById(id);
    nomes.value = '';
}

//Adcionando os nomes dos amigos a uma lista, não dar para adcionar o mesmo amigo duas vezes.
function adicionarAmigo(){
    let amigosInseridos = document.querySelector('input').value;
    if (amigosInseridos == '') {
        exibirTextoNaTela("resultado",'Digite um nome válido!');
    } if (amigosInseridos != amigos){
        amigos.push(amigosInseridos);
        exibirTextoNaTela("listaAmigos",amigos);
        limparCampo("amigo");
        limparCampo("resultado");
    }else{
        alert('Erro');
    }
    console.log(amigosInseridos);
    return amigosInseridos;
}
