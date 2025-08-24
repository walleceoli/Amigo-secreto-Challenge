
let amigos = [];
//Adcionando os nomes dos amigos a uma lista, não dar para adcionar o mesmo amigo duas vezes.
function adicionarAmigo(){
    let amigosInseridos =  document.querySelector('input').value;
    if (amigosInseridos != amigos){
        amigos.push(amigosInseridos);
    }else{
        alert('Erro');
    }
    console.log(amigosInseridos);
}
