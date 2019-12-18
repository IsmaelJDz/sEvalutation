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

// Pregunta 4
// Patron Moduele Javascript
// Lo que permite este patron es encapsular las variables, atributo y metodos y solo accederlos
// mediante la instancia de myApp y la segunda linea da error porque no puede ser accedida,
// la forma de accederla es retornando un Pojo con la funcion sum

//******* NOTA ********* se comentara la funcion sum dado que ejecutara un error y evitara que se ejecuten
// las siguientes intrucciones.

var myApp = (function() {
  var desc = "Mi nombre es:";
  var name = "Ismael";

  var sum = function(param1, param2) {
    return param1 + param2;
  };

  return {
    myMessage: function() {
      return desc + " " + name;
    }
  };
})();

console.log(myApp.myMessage());
//console.log(myApp.sum(10, 5));

// Patron MVC dividir responsabilidades los modelos, vistas y los controladores
// Singleton no repetir instancias a la base de datos, si ya existe una isntancia de ese objeto
// la devolvemos directamente y si no se crea una nueva.

class Office {
  constructor(nombre, empleado) {
    this.nombre = nombre;
    this.empleado = empleado;

    if (typeof Office.instance === "object") {
      return Office.instance;
    }

    Office.instance = this;
    return this;
  }
}

const office = new Office("Ismael", 30);
console.log(office);

//Patron factory
// Este patron se encarga de instanciar o crear los objetos, una vez que el programa se ejecuta se crean
// las instancias
function ConstructorTextos() {
  this.crearElemento = function(texto, tipo) {
    let html;

    if (tipo === "input") {
      html = new InputHTML(texto);
    } else if (tipo === "img") {
      html = new ImgHTML(texto);
    }

    return html;
  };
}

const InputHTML = function(texto) {
  this.texto = texto;
};

const textos = new ConstructorTextos();
const elementosTextos = [];

elementosTextos.push(textos.crearElemento("Bienvenido", "input"));

console.log(elementosTextos);

//Pregunta 5
//las variables const solo se utilizan cuando el valor no va cambiar dado que al querer modificar no se podra.
//Se debe tomar en cuenta que si se redefine la variable urlApi dentro de la funcion mostrarUrl
// si va a poder ser moficicada ya que esta dentro de otro escope, es decir cuando estan dentro del mismo scope
// no van a poder ser redefinidas.
// let son variables que solo son block scope y no se pueden leer en otro hambito a menos que sean
// pasada por parametros

const urlApi = "https://pokeapi.co/api/v2/pokemon/bulbasaur/";
const dirStatic = "./rootUrl";
//urlApi = "otra cosa";

function mostrarUrl(urlApi) {
  //urlApi = "Otra cosa";
  console.log(urlApi);
}
mostrarUrl(urlApi);

function mostrarUlrLet() {
  let nombre = "Ismael";
  if (nombre === "Ismael") {
    nombre = "Oscar";
  }

  console.log(nombre);
}

mostrarUlrLet();
