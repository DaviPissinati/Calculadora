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

$("#adi").onclick = function(){
    if(tela.value){
        calculadora.setA(tela.value);
        tela.value = "";
    } else {
        alert("Clicou de otario!")
    }
};