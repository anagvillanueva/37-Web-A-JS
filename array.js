// Declarar un arreglo vacío
let verduras = []; // Esto crea un arreglo vacío llamado "verduras" que puede ser llenado más tarde

// Declarar un arreglo con datos
let frutas = ["Manzana", "Pera", "Lulo", "Maracuya"]; // Arreglo con una lista de frutas

// Javascript nos permite tener arreglos con diferentes tipos de datos
let datos = [true, 0, null, "Hola", "Pepito", false]; // Un arreglo que contiene diferentes tipos de datos (booleanos, números, cadenas, y null)

// Acceder a los valores 
console.log(frutas[2]); // Accede al tercer elemento del arreglo "frutas", que es "Lulo"
console.log(datos[4]); // Accede al quinto elemento del arreglo "datos", que es "Pepito"

// Modificar un valor 
frutas[3] = "Mango"; // Cambia el cuarto elemento del arreglo "frutas" de "Maracuya" a "Mango"

// Imprimir todo el arreglo
console.log(frutas); // Muestra todo el arreglo "frutas" actualizado

// Obtener la longitud del arreglo
console.log(frutas.length); // Muestra la cantidad de elementos en el arreglo "frutas"

// Métodos de Arrays

// Agregar elementos al final de la lista 
frutas.push("Mandarina");
frutas.push("Fresa");
frutas.push("Kiwi"); // Agrega tres nuevas frutas al final del arreglo

// Eliminar el último elemento 
frutas.pop(); // Elimina "Kiwi" (el último elemento agregado) del arreglo

// Visualizar el arreglo
console.log(frutas); // Muestra el arreglo "frutas" después de las operaciones anteriores

// Agregar elementos al inicio de la lista 
frutas.unshift("Uvas");
frutas.unshift("Plátano"); // Agrega "Uvas" y "Plátano" al inicio del arreglo

// Quitar el primer elemento de la lista 
frutas.shift(); // Elimina "Plátano" (el primer elemento) del arreglo

// Visualizar el arreglo
console.log(frutas); // Muestra el arreglo "frutas" después de agregar y eliminar elementos al inicio

// Trabajando con cadenas de texto

// Una cadena de texto
let texto = "Hola, me llamo Ana, tengo 22 años, vivo en la CDMX";
console.log(texto); // Muestra el texto original

// Crear un arreglo a partir de un texto (separado por espacios)
let presentacion = texto.split(" "); // Convierte la cadena en un arreglo de palabras
console.log(presentacion); // Muestra el arreglo de palabras
console.log(texto); // Muestra la cadena original para comparación

// Ordenar alfabéticamente
console.log(presentacion.sort()); // Ordena el arreglo "presentacion" en orden alfabético

// Revertir el orden del arreglo
console.log(frutas.reverse()); // Invierte el orden de los elementos en el arreglo "frutas"

// Trabajando con el arreglo vacío "verduras"
console.log(verduras); // Muestra el arreglo vacío "verduras"

// Agregar elementos al arreglo "verduras"
verduras.push("🧀");
verduras.push("☕");
verduras.push("🥦"); // Agrega tres elementos (emojis) al arreglo "verduras"

console.log(verduras); // Muestra el arreglo "verduras" con los nuevos elementos

// Unir dos arreglos utilizando concat
let listaSuper = frutas.concat(verduras); // Combina "frutas" y "verduras" en un nuevo arreglo "listaSuper"
console.log(listaSuper); // Muestra el arreglo combinado

// Objetos literales

// Crear un objeto literal "persona" con varias propiedades
let persona = {
    nombre: "Ana", // clave - valor 
    edad: 22, 
    escolaridad: "licenciatura",
    femenino: true, 
    // Un objeto literal puede tener funciones (métodos)
    saludar: function(){
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Acceder a las propiedades del objeto "persona" utilizando la notación de punto
console.log(persona.femenino); // Muestra el valor de la propiedad "femenino"
console.log(persona.nombre); // Muestra el valor de la propiedad "nombre"

// Llamando a la función (método) "saludar"
persona.saludar(); // Llama a la función "saludar" y muestra un mensaje de saludo

// Otra forma de acceder a las propiedades es usando la notación de corchetes
console.log(persona["escolaridad"]); // Muestra el valor de la propiedad "escolaridad"
