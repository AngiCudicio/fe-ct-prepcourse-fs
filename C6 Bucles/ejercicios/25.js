function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   let arreglo = [];
   for(let i= (string.length) ; i >= 0; i--){
      arreglo.push(string.charAt(i));
   }
   palabraAlReves = arreglo.join('');
   if(string === palabraAlReves){
      return true;
   }else{
      return false;
   }
}

module.exports = esPalindromo;
