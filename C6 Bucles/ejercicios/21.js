function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let div = numero
  while(numero % 2 === 0 && div > 1){
    div = div / 2
  }
  if(div === 1){
    return true;
  }else{
    return false;
  }
}

module.exports = esPotenciaDeDos;
