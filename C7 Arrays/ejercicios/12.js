function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let newArray = [];
  array.forEach(element => {
    newArray.push(element.toUpperCase())
  });
  return newArray;
  }

module.exports = convertirStringAMayusculas;
