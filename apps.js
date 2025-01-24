//Declaracion de Variables
let amigos = [];


console.log("hola");

//Esta funcion espara agregar amigos al juego
function agregarAmigo() {
    //capturar el valor de campo de entrada
    let nombreUsuario = document.getElementById('amigo').value;
    console.log (nombreUsuario);
    //Validacion de entrada de valor
    if(amigos == " "){
        alert('Porfavor, inserte un nombre');
    }

    
}

agregarAmigo();