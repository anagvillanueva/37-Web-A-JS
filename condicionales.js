

// Pregunta al usuario si tiene una membresía activa y convierte la respuesta a mayúsculas.
let membresia = prompt("¿Cuentas con una membresía activa? (Responde 'SI' o 'NO')").toUpperCase();

// Verifica si la respuesta fue "SI".
if (membresia === "SI") {
    // Si el usuario tiene una membresía activa, se permite el acceso.
    console.log("¡Excelente! Puedes pasar :)");
} else {
    // Si el usuario no tiene una membresía activa, se deniega el acceso.
    console.log("No tienes tu membresía activa.");
}

// Nota: El método .toUpperCase() convierte la cadena a mayúsculas, para asegurar que la comparación no sea sensible a mayúsculas/minúsculas.

// Ejemplo de cómo funciona:
// El método .toLowerCase() convierte la cadena a minúsculas.

// Ahora, un ejemplo de condicionales basados en días de la semana.

let dia = prompt("Dime un día de la semana:").toLowerCase();

// Verifica el día ingresado y responde con un mensaje acorde.
if (dia === "lunes") {
    console.log("Ten un buen inicio de semana.");
} else if (dia === "martes") {
    console.log("Uff, casi es miércoles.");
} else if (dia === "miércoles") {
    console.log("Ya es ombligo de la semana.");
} else if (dia === "jueves") {
    console.log("¡Ya es juebebes!");
} else if (dia === "viernes") {
    console.log("¡POR FIN ES VIERNES!");
} else {
    // Si el día no es de lunes a viernes, este bloque se ejecutará.
    console.log("¡Pásala increíble!");
}

// Pregunta la edad al usuario para determinar si es mayor de edad.

let edad = prompt("Dime tu edad:");

// Verifica si la edad es 18 o mayor.
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

console.log("--------------------------------------------");
console.log("Bienvenido/a a tu puesto de tortas favorito");
console.log("Torta de Queso $45 - Torta de Jamón $50");

// Pregunta al usuario qué tipo de torta desea y convierte la respuesta a minúsculas.
let torta = prompt("¿Qué torta quieres?").toLowerCase();

let precio = 0.0; // Inicializa el precio en 0.

// Verifica el tipo de torta que se seleccionó.
if (torta === "queso") {
    precio = 45; // Precio de la torta de queso.
    let aguacate = prompt("¿Desea aguacate por $8 más? (s/n)").toLowerCase();
    // Si el usuario quiere aguacate, se suma el precio.
    if (aguacate === "s") {
        precio += 8;
    }
} else if (torta === "jamon") {
    precio = 50; // Precio de la torta de jamón.
    let quesoExtra = prompt("¿Desea queso extra por $15 más? (s/n)").toLowerCase();
    // Si el usuario quiere queso extra, se suma el precio.
    if (quesoExtra === "s") {
        precio += 15;
    }
} else {
    // Si la opción ingresada no está en el menú, muestra este mensaje.
    console.log("Perdón, tu opción no está en el menú ):");
}

// Si el usuario eligió una opción válida, muestra el precio total de la torta.
if (precio > 0) {
    console.log("El precio total de tu torta es $" + precio);
}

// Club Platino, Club Vip, Club Normal

// Condicionales que se utilizan para verificar:
// 1. Membresía activa
// 2. Vestimenta apropiada
// 3. Edad mínima

// Pregunta al usuario si tiene una membresía activa y convierte la respuesta a mayúsculas.
let membresia1 = prompt("¿Cuentas con una membresía activa? (Responde 'SI' o 'NO')").toUpperCase();

// Pregunta al usuario si cumple con el código de vestimenta y convierte la respuesta a mayúsculas.
let vestimenta = prompt("¿Cumples con el código de vestimenta? (Responde 'SI' o 'NO')").toUpperCase();

// Pregunta la edad del usuario.
let edad1 = parseInt(prompt("Dime tu edad:"));

// Verifica si el usuario cumple con todas las condiciones: membresía activa, vestimenta apropiada y edad mínima.
if (membresia1 === "SI" && vestimenta === "SI" && edad1 >= 18) {
    console.log("¡Acceso concedido! Puedes entrar al club.");
} else if (membresia1 === "NO" || vestimenta === "NO" || edad1 < 18) {
    console.log("Acceso denegado: No cumples con todos los requisitos.");
    
    // Detalles de la negación para mayor claridad.
    if (membresia1 === "NO") {
        console.log("Razón: No tienes una membresía activa.");
    }

    if (vestimenta === "NO") {
        console.log("Razón: No cumples con el código de vestimenta.");
    }

    if (edad1 < 18) {
        console.log("Razón: No eres mayor de edad.");
    }
}

// Ejemplo adicional utilizando la negación (!)
let accesoEspecial = prompt("¿Tienes un pase especial? (Responde 'SI' o 'NO')").toUpperCase();

// Si el usuario no tiene pase especial, se niega el acceso.
if (!(accesoEspecial === "SI")) {
    console.log("Acceso denegado: No tienes un pase especial.");
} else {
    console.log("Acceso concedido: Tu pase especial te permite entrar.");
}


// Preguntas para determinar qué tipo de tamal eres

// Pregunta sobre el sabor favorito
let saborFavorito = prompt("¿Qué sabor prefieres? (Dulce, Salado, Picante)").toLowerCase();

// Pregunta sobre la textura preferida
let texturaPreferida = prompt("¿Te gustan los tamales más húmedos o secos? (Humedo, Seco)").toLowerCase();

// Pregunta sobre el momento del día favorito para comer tamales
let momentoDelDia = prompt("¿Cuándo prefieres comer tamales? (Desayuno, Almuerzo, Cena)").toLowerCase();

// Determinando qué tipo de tamal eres
if (saborFavorito === "dulce" && texturaPreferida === "humedo" && momentoDelDia === "desayuno") {
    console.log("¡Eres un Tamal de Guayaba! Dulce, jugoso y perfecto para empezar el día.");
} else if (saborFavorito === "salado" && texturaPreferida === "seco" && momentoDelDia === "almuerzo") {
    console.log("¡Eres un Tamal de Mole! Intenso, lleno de sabor, ideal para el almuerzo.");
} else if (saborFavorito === "picante" && texturaPreferida === "humedo" && momentoDelDia === "cena") {
    console.log("¡Eres un Tamal de Rajas con Queso! Picante y lleno de queso, perfecto para la cena.");
} else if (saborFavorito === "dulce" && texturaPreferida === "seco" && momentoDelDia === "almuerzo") {
    console.log("¡Eres un Tamal de Chocolate! Seco pero lleno de dulzura, ideal para acompañar el almuerzo.");
} else if (saborFavorito === "salado" && texturaPreferida === "humedo" && momentoDelDia === "desayuno") {
    console.log("¡Eres un Tamal de Salsa Verde! Fresco y lleno de sabor, ideal para comenzar el día con energía.");
} else {
    console.log("¡Eres un Tamal único! No hay uno como tú.");
}
