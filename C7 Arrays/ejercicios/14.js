function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el
  // array de números.
  // Tu código:
  let suma = 0;
  array.forEach(element => {
    if(element > 10){
      suma = suma + 1;
    }
  })
  return suma;
  }

module.exports = contarElementosMayoresA10;
