function cambiarTexto(){
    //¿Como encontrar el h1? Mediante su ID 
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola, DOM!";
}

function cambiarColor(){
    //Buscando parrafos mediante su clase
    let parrafos = document.getElementsByClassName("texto");
    //Recorremos todos los parrafos para 
    for(let indice = 0; indice < parrafos.length; indice++){
        //Poder pintar cada uno de rosa
        parrafos[indice].style.color = "purple";
    }
}

function ocultarItem(){
    // Tag - Etiqueta y buscamos el li posicion 0 
    let primerItem = document.getElementsByTagName("li")[0];
    primerItem.style.display = "none";
}

function pantallaAzul(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "blue";
}

function pantallaVerde(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "green";
}

function pantallaAmarillo(){
    let body = document.getElementById("cuerpo");
    body.style.backgroundColor = "yellow";
}

function sumar(){
    //Obtener los valores
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)

    //Realizar la suma 
    let total = num1 + num2; 

    //Mostrar el parrafo
    document.getElementById("resultado").textContent = "El resultado es: " + total + " 🕺🏻";
}