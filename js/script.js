
//Definicion de variables & recuperacion de los elementos
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copy");
var btnLimpiar = document.querySelector("#btn-limpiar");

/*------------------------------------------------------------------------------------------------------------*/

//Captura del mensaje ingresado
function msgIngresado() {
    var msg = document.querySelector("#mensaje");
    return msg.value;
}

//Funcion mostrar mensaje en la caja de texto --> Resultado
function resultadoMsg(encriptarCadena){
    document.querySelector("#resultado").value=encriptarCadena;
}

/*------------------------------------------------------------------------------------------------------------*/

//Validacion entrada de texto 
function validacionTexto(msg){
    array = msg.split('');
    var error = false;
    for(var i = 0; i < array.length; i++){
        if (array[i].codePointAt(0) != 32 && (array[i].codePointAt(0) < 97 || array[i].codePointAt(0) > 122)){
            error = true;
            break;
        }
    }
    return error;
}

//Mensaje de error
function errorMsg() {
    var error = document.querySelector("#error");
    error.textContent = "Solo se permiten letras minusculas";
}


/*------------------------------------------------------------------------------------------------------------*/

//CREANDO LAS FUNCIONES PARA LOS BOTONES

//Funcion Encriptar
function msgEncriptar(msg) {
    array = msg.split('');
    for (var i = 0; i < array.length; i++) {
        if (array[i] == "a") {
            array.splice(i, 1, "ai");
        } else if (array[i] == "e") {
            array.splice(i, 1, "enter");
        } else if (array[i] == "i") {
            array.splice(i, 1, "imes");
        } else if (array[i] == "o") {
            array.splice(i, 1, "ober");
        } else if (array[i] == "u") {
            array.splice(i, 1, "ufat");
        }
    }
    return array.join("");
}

//Funcion Desencriptar
function msgDesencriptar(msg){
    array = msg.split('');
    for(var i = 0; i < array.length; i++){
        if(array[i]+array[i+1] == "ai"){
            array.splice(i, 2, "a");
        } else if (array[i]+array[i+1]+array[i+2]+array[i+3]+array[i+4] == "enter"){
            array.splice(i, 5, "e");
        } else if (array[i]+array[i+1]+array[i+2]+array[i+3] == "imes"){
            array.splice(i, 4, "i");
        } else if (array[i]+array[i+1]+array[i+2]+array[i+3] == "ober"){
            array.splice(i, 4, "o");
        } else if (array[i]+array[i+1]+array[i+2]+array[i+3] == "ufat"){
            array.splice(i, 4, "u");
        }
    }   
    return array.join("");
}

//Funcion Copiar texto del campo resultado
function msgCopiar(){
    var copyText = document.querySelector("#resultado");
    copyText.select();
    document.execCommand("copy");
}


/*------------------------------------------------------------------------------------------------------------*/


//Boton de Encriptacion
btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var msg = msgIngresado();

    //Validando el mensaje de error
    var error = validacionTexto(msg);
    if (error) {
        errorMsg();//Imprimiendo mensaje de ERROR
        return;
    }

    var errorLimpiar = document.querySelector("#error");
    errorLimpiar.innerHTML = "";

    //llamando la funcion de encriptacion
    var encriptarCadena = msgEncriptar(msg);
    
    resultadoMsg(encriptarCadena);//encriptar y mostrar en la caja de resultado

});

//Boton para desencriptar
btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var msg = msgIngresado();

    //Validation and error message
    var error = validacionTexto(msg);
    if (error) {
        errorMsg();
        return;
    }
    var errorLimpiar = document.querySelector("#error");
    errorLimpiar.innerHTML = "";

    
    var desencriptarCadena = msgDesencriptar(msg);//llamando el metodo desencriptar

    resultadoMsg(desencriptarCadena);//desencriptar el resultado

});

//Accion Boton Copiar
btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    
    msgCopiar();//Copiar texto
});


//Boton Limpiar
btnLimpiar.addEventListener("click", function (event) {
    document.getElementById("miForm").reset();//reseteando los campos del formulario
});


/*------------------------------------------------------------------------------------------------------------*/

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

/*------------------------------------------------------------------------------------------------------------*/
