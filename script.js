//variaveis:
let userNum = document.getElementById('numero');
var userName = document.getElementById('nome');
let resultado = document.getElementById('resultado');
var nome = undefined;


//função que mostra o nome do usuario, e se o numero é impar ou par.
function impopa(){
    //if condition que vai dizer se o usuario é "estranho" ou se ele colocou seu nome.
    if(userName.value != ''){
        var nome = userName.value;
    } else {
        var nome = "estranho";
    }

    //if condition que vai dizer se o número é impar ou par ou se não há número. Além de dizer o nome do usuario conforme a condição acima.
    if(parseInt(userNum.value) % 2 == 0){
        resultado.innerHTML = `${nome}, ${parseInt(userNum.value)} é par`
    } else if (userNum.value == ''){
        resultado.innerHTML = `${nome}, insira um número, por favor!`
    } else {
        resultado.innerHTML = `${nome}, ${parseInt(userNum.value)} é ímpar`
    }
     
}
