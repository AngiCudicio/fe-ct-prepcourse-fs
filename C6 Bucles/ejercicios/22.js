function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de 
   // cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos 
   // que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345
   let combinada = [];
   if(str1.length >= str2.length && str1.length >= str3.length){
      for(let i=0 ; i <= (str1.length) ; i++){
         combinada.push(str1.charAt(i));
         combinada.push(str2.charAt(i));
         combinada.push(str3.charAt(i));
      }
   }
   if(str2.length > str1.length && str2.length > str3.length){
      for(let i=0 ; i <= (str2.length) ; i++){
         combinada.push(str1.charAt(i));
         combinada.push(str2.charAt(i));
         combinada.push(str3.charAt(i));
      }
   }
   if(str3.length > str1.length && str3.length >= str2.length){
      for(let i=0 ; i <= (str3.length) ; i++){
      combinada.push(str1.charAt(i));
      combinada.push(str2.charAt(i));
      combinada.push(str3.charAt(i));
      }
   }
   let terminada = combinada.join('');
   return terminada;
}

module.exports = combine;
