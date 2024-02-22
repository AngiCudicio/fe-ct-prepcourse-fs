function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes
  // en el array.
  // Tu código:
  let newArray = [];
  array.forEach(element => {
    if(element % 2 === 0){
    newArray.push(element)
    }
  })
  return newArray;
  }

module.exports = filtrarNumerosPares;
