// Funciones 

// Declarar la palabra reservada function + Nombre de mi función

function Suma(a,b){ // Parametros
    //Instrucciones 
    return a + b;
}

function SumaUsuario(){
    let a = Number(prompt("Dame un numero:"));
    let b = Number(prompt("Dame un segundo numero"));
    let total = a + b; 
    return total;
}

// Invocando - Llamando a mi función 
function Resta(numero1, numero2){
    return numero1 - numero2;
}

// Return nos permite guardar los datos para posteriores usos

console.log(Suma(78,9));
console.log(Resta(12,10));

console.log(Resta(3,5));

// Resultado con console.log, no guarda SOLO imprime
// Su uso es exclusivo para un programador 

function Multiplicar(a,b){
    let total = a * b; 
    console.log(total)
}

Multiplicar(3,3);

// Ejercicio de Funciones: 

// Crea una funcion para sacar el area de un triangulo (con parametros)

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// Ejemplo de uso:
console.log(areaTriangulo(5, 10)); // Resultado: 25


// Crea una funcion para sacar el perimetro de un cuadrado (pide los datos al usuario )
function perimetroCuadrado() {
    let lado = prompt("Ingresa el valor del lado del cuadrado:");
    let perimetro = 4 * lado;
    console.log(`El perímetro del cuadrado es: ${perimetro}`);
}
// Llamada a la función:
perimetroCuadrado();


//Crea una funcion para saber si un numero es par o inpar (parametros o pidiendo el dato) ** 
function esParOImpar(numero) {
    if (numero % 2 == 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

// Ejemplo de uso:
console.log(esParOImpar(7)); // Resultado: "El número es impar"
console.log(esParOImpar(8)); // Resultado: "El número es par"

// = Asignacion  Nombre = Ana 
// == Comparando 8 == 3 - False 
// === Comparacion estricta 