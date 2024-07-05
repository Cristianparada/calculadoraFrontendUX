

function sumar(num1,num2){
    /*Nivel 2 
        let numero1 = parseFloat(prompt("Ingrese el primer valor"));
        let numero2 = parseFloat(prompt("Ingrese el segundo valor"));
        return numero1+numero2);
    */
   let total;
    total = parseFloat(num1)+parseFloat(num2)
    console.log('Suma ',total);
    return total ;
}

function restar(num1,num2){
    /*Nivel 2 
        let numero1 = parseFloat(prompt("Ingrese el primer valor"));
        let numero2 = parseFloat(prompt("Ingrese el segundo valor"));
        return numero1-numero2;
    */
    let total;
    total =  parseFloat(num1)-parseFloat(num2);  
    console.log('Resta',total);
    return total;
    
}

function multiplicar(num1,num2){
    /*Nivel 2 
        let numero1 = parseFloat(prompt("Ingrese el primer valor"));
        let numero2 = parseFloat(prompt("Ingrese el segundo valor"));
        return numero1*numero2;
    */
    let total;
    total =  parseFloat(num1)*parseFloat(num2);  
    console.log('Multiplicacion ',total);
    return total;
}

function dividir(num1,num2){
    /*Nivel 2 
        let numero1 = parseFloat(prompt("Ingrese el primer valor"));
        let numero2 = parseFloat(prompt("Ingrese el segundo valor"));
        return numero1/numero2;
    */

   let total = (parseFloat(num2)===0 ) ? "no es posible divivir por cero, ingrese otro valor" : parseFloat(num1)/parseFloat(num2);
   console.log('Division ', total);
   return total;
   
}

function cuadradoDeUnNumero(num1){
    total = (num1>0) ? multiplicar(num1,num1) : "el numero ingresado debe ser mayor a cero";
    console.log('cuadradoDeUnNumero ',total);
    return total;
  
}

function promedioDeTresNumeros(num1,num2,num3){
    let total;
    total = dividir(sumar(sumar(num1,num2),num3),3)
    console.log('promedioDeTresNumeros ',total);
    return total;
}

console.log('-------------- Testeo de Operaciones / Calculadora --------------')