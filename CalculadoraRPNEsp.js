class CalculadoraRPN{

    
    constructor(pila){
        this.pila = pila;
        this.cambio = 0;
    }
    
    

   //Método que hace que se muestre la infomación en la pila
    mostrarPantalla(){
        if(!this.pila.isVacia()){
            document.querySelector('textarea[name=\"pantalla\"]').innerHTML = this.pila.printPila(this.pila);
            
        }
       
        
    }


    número(x){
       this.cambio = 0; 
       document.querySelector('input[type=text][name=\"actual\"]').value += x;
        
    }

    add(){
        if(this.cambio == 0){
            if(this.pila.size() >= 2){
                this.pila.pushPila(this.pila.popPila()+this.pila.popPila());
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),2)+parseInt(Number(this.pila.popPila()),2));
                this.mostrarPantalla();
            } 
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),8)+parseInt(Number(this.pila.popPila().toString(10)),8));
                this.mostrarPantalla();
            } 
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),16)+parseInt(Number(this.pila.popPila().toString(10)),16));
                this.mostrarPantalla();
            } 
        }
        
    }


    sub(){
        if(this.cambio == 0){
            if(this.pila.size() >= 2){
                this.pila.pushPila(this.pila.popPila()-this.pila.popPila());
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),2)-parseInt(Number(this.pila.popPila().toString(10)),2));
                this.mostrarPantalla();
            } 
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),8)-parseInt(Number(this.pila.popPila().toString(10)),8));
                this.mostrarPantalla();
            } 
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),16)-parseInt(Number(this.pila.popPila().toString(10)),16));
                this.mostrarPantalla();
            } 
        }

    }


    mult(){
        if(this.cambio == 0){
            if(this.pila.size() >= 2){
                this.pila.pushPila(this.pila.popPila()*this.pila.popPila());
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),2)*parseInt(Number(this.pila.popPila().toString(10)),2));
                this.mostrarPantalla();
            } 
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),8)*parseInt(Number(this.pila.popPila().toString(10)),8));
                this.mostrarPantalla();
            } 
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),16)*parseInt(Number(this.pila.popPila().toString(10)),16));
                this.mostrarPantalla();
            } 
        }

    }

    div(){
        if(this.cambio == 0){
            if(this.pila.size() >= 2){
                this.pila.pushPila(this.pila.popPila()/this.pila.popPila());
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),2)/parseInt(Number(this.pila.popPila().toString(10)),2));
                this.mostrarPantalla();
            } 
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),8)/parseInt(Number(this.pila.popPila().toString(10)),8));
                this.mostrarPantalla();
            } 
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 2){
                this.pila.pushPila(parseInt((this.pila.popPila().toString(10)),16)/parseInt((this.pila.popPila().toString(10)),16));
                this.mostrarPantalla();
            } 
        }

    }

    sin(){

        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sin(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sin(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sin(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sin(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }
        

    }

    cos(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.cos(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.cos(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.cos(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.cos(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }

    }

    tan(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.tan(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.tan(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.tan(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.tan(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }


    }

    asin(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.asin(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.asin(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.asin(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.asin(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }

    }

    atan(){

        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.atan(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.atan(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.atan(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.atan(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }

    }

    acos(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.acos(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.acos(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.acos(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.acos(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }

    }

    cambiaSigno(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(this.pila.popPila() * (-1));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),2) * (-1));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(parseInt(Number(this.pila.popPila().toString(10)),8) * (-1));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(parseInt((this.pila.popPila().toString(10)),16) * (-1));
                this.mostrarPantalla();
            }
        }

    }

    raiz(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sqrt(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sqrt(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sqrt(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.sqrt(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }
    }

    log(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.log10(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.log10(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.log10(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.log10(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }
    }

    exp(){
        if(this.cambio == 0){
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.exp(this.pila.popPila()));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 1){ //base 2
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.exp(parseInt(Number(this.pila.popPila().toString(10)),2)));
                this.mostrarPantalla();
            }
        }else if(this.cambio == 2){ //base 8
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.exp(parseInt(Number(this.pila.popPila().toString(10)),8)));
                this.mostrarPantalla();
            }
            
        }else if(this.cambio == 3){//base 16
            if(this.pila.size() >= 1){
                this.pila.pushPila(Math.exp(parseInt((this.pila.popPila().toString(10)),16)));
                this.mostrarPantalla();
            }
        }
    }

    calcula(){
       this.pila.pushPila(Number(document.getElementById('actual').value));
       document.querySelector('input[type=text][name=\"actual\"]').value = "";
       this.mostrarPantalla();
    }

    empty(){
       this.pila.vaciarPila();
       document.querySelector('input[type=text][name=\"actual\"]').value = "";
       document.querySelector('textarea[name=\"pantalla\"]').innerHTML = "";
    }

}

class CalculadoraRPNEsp extends CalculadoraRPN{

    constructor(pila){
        super(pila);
    }

    base2(){
       this.cambio = 1;
       this.pila.pushPila((this.pila.popPila().toString(2)));
       document.querySelector('input[type=text][name=\"actual\"]').value = "";
       this.mostrarPantalla();
    }

    base8(){
       this.cambio = 2;
       this.pila.pushPila((this.pila.popPila().toString(8)));
       document.querySelector('input[type=text][name=\"actual\"]').value = "";
       this.mostrarPantalla();
    }

    base16(){
       this.cambio = 3; 
       this.pila.pushPila((this.pila.popPila().toString(16)));
       document.querySelector('input[type=text][name=\"actual\"]').value = "";
       this.mostrarPantalla();
    }




}

var pila = new PilaRPN();
var calculadoraRPN = new CalculadoraRPNEsp(pila);



document.addEventListener('keydown', function (event) {
    if (event.key === '+') {
        calculadoraRPN.add();
    }
    if (event.key === '-') {
        calculadoraRPN.sub();
    }
    if (event.key === 'd') {
        calculadoraRPN.div();
      }
    if (event.key === 'x') {
        calculadoraRPN.mult();
    }
    if (event.key === '.') {
        calculadoraRPN.punto();
    }
    if (event.key === 's') {
        calculadoraRPN.cambiaSigno();
    }
    if (event.key === 'n') {
        calculadoraRPN.sin();
    }
    if (event.key === 'c') {
        calculadoraRPN.cos();
    }
    if (event.key === 't') {
        calculadoraRPN.tan();
    }
    if (event.key === 'r') {
        calculadoraRPN.raiz();
    }
    if (event.key === 'h') {
        calculadoraRPN.asin();
    }
    if (event.key === 'j') {
        calculadoraRPN.acos();
    }
    if (event.key === 'k') {
        calculadoraRPN.atan();
    }
    if(event.key >= '0' && event.key <= '9'){

        calculadoraRPN.número(Number(event.key));

    }
    if (event.key === 'l') {
        calculadoraRPN.log();
    }
    if (event.key === 'p') {
        calculadoraRPN.exp();
    }
    //Enter de la calculadora RPN
    if(event.key === 'Enter'){ 
        event.preventDefault();
        calculadoraRPN.calcula();
    }
    if(event.key === 'Delete'){
        event.preventDefault();
        calculadoraRPN.empty();
    }
    if (event.key === 'b') {
        calculadoraRPN.base2();
    }
    if (event.key === 'o') {
        calculadoraRPN.base8();
    }
    if (event.key === 'm') {
        calculadoraRPN.base16();
    }

    
  
  });

