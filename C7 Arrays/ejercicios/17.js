function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = arrayOfNums[0];
  for(let i = 1; i<arrayOfNums.length ; i++){
    suma = suma + arrayOfNums[i];
  }
  return suma;
}

module.exports = agregarNumeros;
