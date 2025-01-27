//Declaracion de Variables
let amigos = [];//Array que va a guardar los nombres
let nombreSorteado = " ";
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
        accesoLista();
    } 
    limpiarCaja();
}

function limpiarCaja () {
    //Variable para guardar el valor de la caja en blanco o para limpiarla
    document.getElementById('amigo').value = '';
    
}

function accesoLista() {
    let listaUsuario = document.getElementById('listaAmigos'); // obtener los elementos de la lista
    listaUsuario.innerHTML = '';//limpia la lista existente
    //para recorrer el arreglo de lista migos
    for(let i =0 ; i< amigos.length; i++){
        let elementLi  = document.createElement('li');
        elementLi.textContent = `${ i + 1}. ${amigos[i]}`;;//se Asigna el nombre definido por el usuario al elemnto Li 
        listaUsuario.appendChild(elementLi);//Cada elemento li se agrega a la lista ul en HTML ppor medio de appenChild
    }
}

function sortearAmigo() {
    //validar que haya amigos disponibles
    if(amigos.length === 0){
        agregarAmigo();
    }else{
        //La lista no esta vacia.
        //Generamos un indice aleatorio
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);//Indice aleatorio
        nombreSorteado = amigos[indiceAleatorio]; //Obtener el nombre sorteado 
        //console.log (nombreSorteado);
        //Mostrar el nombre sorteado
        let resultSort = document.getElementById('resultado');
        resultSort.innerHTML = nombreSorteado;
        }
    
}

agregarAmigo();
sortearAmigo();