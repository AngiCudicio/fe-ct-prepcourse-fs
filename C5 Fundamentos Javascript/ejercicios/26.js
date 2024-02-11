function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  let palabraSeparada = str.split('');
  palabraSeparada.push('!');
  let strArreglado = palabraSeparada.join('');
  return strArreglado;

}

module.exports = agregarSimboloExclamacion;
