//Pregunta 1

let arrayNums = [1, 2, 3, 4];

const resultFinal = arrayNums.reduce((total, currentValue) => {
  return total + currentValue;
});

console.log(resultFinal);
