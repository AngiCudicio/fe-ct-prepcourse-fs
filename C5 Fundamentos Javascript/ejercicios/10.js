function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  var fechaString = fecha.toString();
  if (fechaString === "Invalid Date"){
    return false;
  }else{
    return fecha instanceof Date;
  }
}

module.exports = esFechaValida;