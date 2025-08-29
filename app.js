//Lista vazia onde irei receber os nomes dos amigos adcionados.
let amigos = [];

//Função para exibir o texto desejado na tela puxando o id do HTML.
//Adcionei um novo parametro onde dependendo do resultado a cor do resultado é alterada.
function exibirTextoNaTela(id, texto, cor = "green"){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
    campo.style.color = cor;
}

//Função que percorre a lista amigos e cria um <li> para cada nome,
//depois junta todos os <li> em uma unica string e insere dentro da ul id="listaAmigos".
//Isso faz com que cada amigo seja um item da lista, e fique um abaixo do outro, não na frente separado por virgula.
function renderLista(){
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML =  amigos.map(nome => `<li>${nome}</li>`).join("");
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
        exibirTextoNaTela("resultado",'Digite um nome válido!',"red");
        limparCampo("amigo");
        return;
    } if (!amigos.includes(amigosInseridos)){
        amigos.push(amigosInseridos);
        renderLista();
        exibirTextoNaTela("resultado","","green");
        limparCampo("amigo");
    }else{
        exibirTextoNaTela("resultado",'Nome já esta na lista',"red");
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
