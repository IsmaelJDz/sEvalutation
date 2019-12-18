//Pregunta 1

let arrayNums = [1, 2, 3, 4];

const resultFinal = arrayNums.reduce((total, currentValue) => {
  return total + currentValue;
});

console.log(resultFinal);

// Pregunta 2
// Closure y como funciona

// Definicion funciones que van a estar declarada dentro de otra funcion y tiene acceso a los valores de
// su funcion padre, pero al ser al utilizar var se puede redeclarar la variable nombe
// en este caso lo ideal es usar let por ser una variable block scope

function padre(nombre) {
  var nombre = "Ismael";

  function hija() {
    var nombre = "Irving";
    console.log(`hola soy ${nombre}`);
  }

  hija();
}

padre("Ismael principal");

// Pregunta 3
// Hoiting es la forma de declarar una funcion y ejecutarla, las funciones son cuidadanos de primer nivel
// o asi se les conoce, cuando es una declaration funcion no existe problema si se ejecuta antes de declararla
// ya que el DOM carga las funciones primero.
// Si es una expresion funcion si existe un problema si ejecutas antes de declararla. Ejemplos

// Declaration function
suma(2, 4);
function suma(num, numTwo) {
  console.log(`${num + numTwo}`);
}

// Expression function
//sumaExpression(2, 4);
var sumaExpression = function(numE, numTwoE) {
  console.log(`${numE + numTwoE}`);
};

//******* NOTA ********* Se comentara la ejecución del sumaExpresison dado que al no hacer un catch
// de bloquea le ejecucion de las siguientes instrucciones.
