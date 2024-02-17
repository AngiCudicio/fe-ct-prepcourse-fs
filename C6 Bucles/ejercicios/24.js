function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let arreglo = [];
   for(let i= (texto.length) ; i >= 0; i--){
      arreglo.push(texto.charAt(i))
   }
   palabraAlReves = arreglo.join('')
   return palabraAlReves
}

module.exports = invertirTexto;
