function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let suma = 1;
    for (let i=1 ; i < array.length ; i++) {
      if (array[0] == array[i]){
        suma = suma + 1;
      }
    }

    if(suma === array.length){
      return true;
    }else{
      return false;
    }
  }

module.exports = todosIguales;
