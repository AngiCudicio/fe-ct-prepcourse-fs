function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let randomValue = array[Math.floor(Math.random() * array.length)];
   return randomValue;
}

module.exports = obtenerElementoAleatorio;
