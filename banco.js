// Crear el objeto literal "cuentaBancaria"
let cuentaBancaria = {
    saldo: 500, // Saldo inicial
    transacciones: [] // Historial de transacciones, comienza vacío
};

// Función para realizar un depósito
function realizarDeposito(monto) {
    if(cuentaBancaria.saldo + monto > 990) {
        alert("No se puede exceder el límite de $990.");
    } else {
        cuentaBancaria.saldo += monto; // Aumenta el saldo
        cuentaBancaria.transacciones.push("Depósito de $" + monto); // Registra la transacción
    }
}

// Función para realizar un retiro
function realizarRetiro(monto) {
    if(cuentaBancaria.saldo - monto < 10) {
        alert("No puedes tener menos de $10 en tu cuenta.");
    } else {
        cuentaBancaria.saldo -= monto; // Disminuye el saldo
        cuentaBancaria.transacciones.push("Retiro de $" + monto); // Registra la transacción
    }
}

// Función para consultar el saldo y mostrar el historial de transacciones
function consultarSaldo() {
    alert("Saldo actual: $" + cuentaBancaria.saldo + "\nTransacciones:\n" + cuentaBancaria.transacciones.join("\n"));
}

// Interacción con el usuario
let opcion = prompt("¿Qué deseas hacer? (depositar, retirar, consultar)");

if(opcion === "depositar") {
    let monto = parseFloat(prompt("¿Cuánto deseas depositar?"));
    // Llamar a nuestra función
    realizarDeposito(monto);
} else if(opcion === "retirar") {
    let monto = parseFloat(prompt("¿Cuánto deseas retirar?"));
    realizarRetiro(monto);
} else if(opcion === "consultar") {
    consultarSaldo();
} else {
    alert("Opción no válida.");
}

// Después de cada operación, puedes consultar el saldo para verificar el estado actual
consultarSaldo();
