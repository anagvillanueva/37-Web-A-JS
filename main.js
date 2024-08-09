
// Preguntas de la encuesta
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");
const ciudad = prompt("¿En qué ciudad vives?");
const profesion = prompt("¿Cuál es tu profesión?");
const pasatiempo = prompt("¿Cuál es tu pasatiempo favorito?");
const peliculasFavoritas = prompt("¿Cuáles son tus películas favoritas?");
const numeroPerros = prompt("¿Cuántos perros tienes?");
const numeroGatos = prompt("¿Cuántos gatos tienes?");


const numeroPerros2 = Number(prompt("¿Cuántos perros tienes?")); 
const numeroGatos2 = Number(prompt("¿Cuántos gatos tienes?"));

// Convertir las respuestas de perros y gatos a números
const perros = parseInt(numeroPerros); // "2" - 2 
const gatos = parseInt(numeroGatos);

const totalMascotas = perros + gatos;

// Crear el mensaje de salida
console.log(`Nombre: ${nombre} Edad: ${edad} Ciudad: ${ciudad}
Profesión: ${profesion} Pasatiempo favorito: ${pasatiempo}
Películas favoritas: ${peliculasFavoritas} ${nombre} tiene ${gatos} gato(s) y 
${perros} perro(s), en total ${totalMascotas} mascota(s).`); 

// Comillas invertidas altGr + }} ``

console.log("----------------")

console.log("Nombre" + nombre + " Edad:" + edad)


// parseInt, parseFloat, Number 
// Tipos de variables, var, let, const 