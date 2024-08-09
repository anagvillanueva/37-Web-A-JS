// La palabra clave 'var' fue la forma tradicional de declarar variables en JavaScript.
// Tiene un alcance global o de función, lo que significa que una variable declarada con 'var'
// está disponible en todo el código si se declara fuera de una función, o dentro de toda la función
// si se declara dentro de ella.

var nombre = "María";  // Variable global si está fuera de una función

function saludar() {
    var saludo = "Hola"; // Variable de alcance local a la función
    console.log(saludo + ", " + nombre); // Hola, María
}

saludar();

// El problema con 'var' es que permite el hoisting, es decir, que las variables declaradas
// con 'var' se elevan al principio del código, pero sin su inicialización.

console.log(edad); // undefined (la variable es hoisted pero no inicializada)
var edad = 25;

// Ahora, con 'let' y 'const', que fueron introducidos en ES6, el alcance de las variables es
// limitado al bloque donde son declaradas (bloque puede ser por ejemplo, dentro de un 'if', 'for', etc).

if (true) {
    let ciudad = "Madrid";  // Variable de bloque
    console.log(ciudad);    // Madrid
}
// console.log(ciudad); // Error: ciudad no está definida fuera del bloque

// 'const' se utiliza para declarar variables que no van a ser reasignadas. Es importante notar
// que 'const' no hace que el valor sea inmutable, sino que la referencia a ese valor no puede cambiar.

const PI = 3.14159;
console.log(PI); // 3.14159

// PI = 3.14; // Error: no se puede reasignar un valor a una variable const

// Sin embargo, si 'const' se usa para objetos o arreglos, sus propiedades o elementos
// pueden ser modificados.

const persona = {
    nombre: "Ana",
    edad: 28
};

persona.edad = 29;  // Esto es válido
console.log(persona.edad); // 29

// persona = { nombre: "Luis", edad: 32 }; // Error: no se puede reasignar un objeto entero

// Resumen:
// - 'var' es global o de función y permite hoisting (no recomendado usar en código moderno).
// - 'let' tiene alcance de bloque y no permite hoisting.
– 'const' tiene alcance de bloque y su valor no puede ser reasignado (aunque sus propiedades pueden cambiar si es un objeto o arreglo).





