function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if(typeof Number){
    array.sort(function (a, b) {
    return a - b;
  })
  }
  if(typeof String){
    array.sort();
  }
return array; // [1, 2, 3, 4, 5]
}

module.exports = ordenarArray;
