function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de
  // multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let arrayTabla6 = [];
  for(let i=0 ; i<=10 ; i++){
    arrayTabla6.push(i*6);
  }
  return arrayTabla6
}

module.exports = tablaDelSeis;
