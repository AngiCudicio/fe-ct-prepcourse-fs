function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y
  // devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest[0];
  for(let i = 1; i<resultadosTest.length ; i++){
    suma = suma + resultadosTest[i];
  }
  let promedio = suma / (resultadosTest.length)
  return promedio;
}

module.exports = promedioResultadosTest;
