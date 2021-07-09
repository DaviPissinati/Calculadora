function Calculadora(a , b) {
    this.constr
     this.a = a;
     this.b = b;
     this.result;
 
 }
Calculadora.prototype.setA = (a) => {
    this.a = a;
}
Calculadora.prototype.setB = (b) => {
    this.b = b;
}
    
Calculadora.prototype.setResult = (res) =>{
    this.result = res
}
Calculadora.prototype.somar = () => {
    let r = this.a + this.b;
    this.setResult(r);
}
Calculadora.prototype.sub = () => {
    let r = this.a - this.b;
    this.setResult(r);
}
Calculadora.prototype.div = () => {
    let r = this.a / this.b;
    this.setResult(r);
}
Calculadora.prototype.multi = () => {
    let r = this.a * this.b;
    this.setResult(r);
}
let calculadora = new Calculadora();

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



// so os botoes

// let n = $("#n1");
// let n2 = $("#n2");
// let n3 = $("#n3");
// let n4 = $("#n4");
// let n5 = $("#n5");
// let n6 = $("#n6");
// let n7 = $("#n7");
// let n8 = $("#n8");
// let n9 = $("#n9");
// let n0 = $("#n0");
    
// n1.onclick = function(){
//     escrever("1");
// }
// n2.onclick = function(){
//     escrever("2");
// }
// n3.onclick = function(){
//     escrever("3");
// }
// n4.onclick = function(){
//     escrever("4");
// }
// n5.onclick = function(){
//     escrever("5");
// }
// n6.onclick = function(){
//     escrever("6");
// }
// n7.onclick = function(){
//     escrever("7");
// }
// n8.onclick = function(){
//     escrever("8");
// }
// n9.onclick = function(){
//     escrever("9");
// }
// n0.onclick = function(){
//     escrever("0");
// }

// let n = $("#n1");
// n.onclick = function(){
    //     tela.value = '1';
    // }