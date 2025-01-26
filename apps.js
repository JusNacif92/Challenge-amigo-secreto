//Declaracion de Variables
let amigos = [];
//Esta funcion espara agregar amigos al juego
function agregarAmigo() {
    //capturar el valor de campo de entrada
    let nombreUsuario = document.getElementById('amigo').value;
    //console.log (nombreUsuario);
    //Validacion de entrada de valor
    //console.log(typeof(nombreUsuario));
    if(nombreUsuario === "" || nombreUsuario == " " || !isNaN(nombreUsuario)){
        /* El if valida que el campo no se quede vacio o que solo digite una cadena de texto o que no
        ingrese numeros.*/
        alert('Porfavor, inserte un nombre');
    }else{
        //Actualizar el array si el valor es valido.
        amigos.push (nombreUsuario);//Guarada el nombre en el array amigos
        console.log (amigos);//Se guarda en la consola
    } 
    limpiarCaja();
}

function limpiarCaja () {
    //Variable para guardar el valor de la caja en blanco o para limpiarla
    document.getElementById('amigo').value = '';
    
}

agregarAmigo();