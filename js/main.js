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
