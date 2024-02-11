function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  let nacimiento = new Date(fechaNacimiento);
  let anio = nacimiento.getFullYear()+1;
  let fechaActual = new Date(Date());
  let esteAnio = fechaActual.getFullYear()+1;
  let edad =  esteAnio-anio;
  if (edad > 18){
    return true;
  }else{
    return false;
  }
}

module.exports = esMayorDeEdad;