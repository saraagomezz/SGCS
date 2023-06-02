//ENCRIPTADOR

function encriptar(){
  var input = document.getElementById("inputNum");
  var numInicial = parseInt(input.value);

  let digitoUno = Math.floor(numInicial / 1000);
  let digititoDos = Math.floor((numInicial % 1000) / 100);
  let digitoTres = Math.floor((numInicial % 100) / 10);
  let digitoCuatro = numInicial % 10;

  nuevoUno = (digitoUno + 7) % 10; 
  nuevoDos = (digititoDos + 7) % 10; 
  nuevoTres = (digitoTres + 7) % 10; 
  nuevoCuatro = (digitoCuatro + 7) % 10; 

  let primero = nuevoTres; 
  let segundo = nuevoCuatro; 
  let tercero = nuevoUno; 
  let cuarto = nuevoDos; 
  var numEncriptado = "" + primero + segundo + tercero + cuarto; 

  document.getElementById("resultado").textContent="Numero encriptado: " + numEncriptado;
}

function validarInput() { //funcion para validar que los datos de input son correctos (un numero de cuatro digitos)
  var input = document.getElementById("inputNum");
  var boton = document.getElementById("boton");
  var valor = input.value;
  
  if (valor.length === 4 && /^\d+$/.test(valor)) { // /^\d+$/es un expresion que declara "solo numeros"
    boton.disabled = false; // si en el imput hay cuatro digitos y estos son numeros el boton se habilitara
  } else {
    boton.disabled = true; // de lo contrario permanece desadabilitado
  }
}

function limitarLongitud() { // esta funcion verifica que no hayan mas ni menos de cuatro digitos
  var input = document.getElementById("inputNum");
  var valor = input.value;
  
  if (valor.length > 4) {
    input.value = valor.slice(0, 4);
  }
}

function filtrarInput(event) {
  var input = document.getElementById("inputNum");
  var valor = input.value;
  var charCode = event.which ? event.which : event.keyCode;
  
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }

  if (valor.length > 4) {
    input.value = valor.slice(0, 4); // Limita el valor a cuatro dígitos
    event.preventDefault();
  }
}

//DESENCRIPTADOR
function desencriptar(){
    var input = document.getElementById("inputNumDes");
    var numInicial = parseInt(input.value);

    let digitoUno = Math.floor(numInicial / 1000);
    let digititoDos = Math.floor((numInicial % 1000) / 100);
    let digitoTres = Math.floor((numInicial % 100) / 10);
    let digitoCuatro = numInicial % 10;

    nuevoUno = (digitoUno +10 - 7) % 10; 
    nuevoDos = (digititoDos +10- 7) % 10; 
    nuevoTres = (digitoTres +10- 7) % 10; 
    nuevoCuatro = (digitoCuatro +10 - 7) % 10; 

    let primero = nuevoTres; 
    let segundo = nuevoCuatro; 
    let tercero = nuevoUno; 
    let cuarto = nuevoDos; 
    var numDesencriptado = "" + primero + segundo + tercero + cuarto; 

    document.getElementById("resultadoDes").textContent="Numero Desencriptado: " + numDesencriptado;
}

function validarInputDes() { //funcion para validar que los datos de input son correctos (un numero de cuatro digitos)
  var input = document.getElementById("inputNumDes");
  var boton = document.getElementById("botonDes");
  var valor = input.value;
  
  if (valor.length === 4 && /^\d+$/.test(valor)) { // /^\d+$/es un expresion que declara "solo numeros"
    boton.disabled = false; // si en el imput hay cuatro digitos y estos son numeros el boton se habilitara
  } else {
    boton.disabled = true; // de lo contrario permanece desadabilitado
  }
}

function limitarLongitudDes() { // esta funcion verifica que no hayan mas ni menos de cuatro digitos
  var input = document.getElementById("inputNumDes");
  var valor = input.value;
  
  if (valor.length > 4) {
    input.value = valor.slice(0, 4);
  }
}

function filtrarInputDes(event) {
  var input = document.getElementById("inputNumDes");
  var valor = input.value;
  var charCode = event.which ? event.which : event.keyCode;
  
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }

  if (valor.length > 4) {
    input.value = valor.slice(0, 4); // Limita el valor a cuatro dígitos
    event.preventDefault();
  }
}


