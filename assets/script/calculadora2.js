let $ = document.querySelector.bind(document);


// config input
let tela = $("#input-cal");

$("#ON").onclick = limparTela;
// $("#AC").onclick = limparUm;



for (let index = 0; index < 10; index++) {
    $("#n"+index).onclick = function(){
        escrever(index)
    };
}
function escrever (valor) {
    tela.value += valor;
} 

function limparTela(){
    tela.value = "";
}

// function limparUm(){
//     tela.removeChild(tela.childNodes[1])
// }

let multi = $("#multi");
let div = $("#div");
let sub = $("#sub");
// let adi = $("#adi");

console.log(this.result);

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


$("#igual").onclick = function(){
    calculadora.setB(tela.value);
    tela.value = calculadora.result;
}

$("#adi").onclick = function(){
    if(tela.value){
        calculadora.setA(tela.value);
        tela.value = "";
    } else {
        alert("Clicou de otario!")
    }
};