let $ = document.querySelector.bind(document);
let tela = $("#input-cal");

$("#igual").onclick = function(){
    calculadora.setB(tela.value);
    tela.value = calculadora.result;
}

$("#soma").onclick = function(){
    if(tela.value){
        calculadora.setA(tela.value);
        tela.value = "";
    } else {
        alert("Clicou de otario!")
    }
};

let multi = $("#multi");
let div = $("#div");
let sub = $("#sub");
$("#off").onclick = limparTela;

function limparTela(){
    tela.value = "";
}

for (let index = 0; index < 10; index++) {
    $("#n"+index).onclick = function(){
        escrever(index)
    };
}




function escrever (valor) {
    tela.value += valor;
} 
