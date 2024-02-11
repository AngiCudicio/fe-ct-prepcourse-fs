//var today = new Date("December 25, 1995");
//var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Establece día y mes
//endYear.setFullYear(today.getFullYear()); // Establece año a este año
//var msPerDay = 24 * 60 * 60 * 1000; // Número de milisegundos por día
//var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
//var daysLeft = Math.round(daysLeft); // devuelve los días que quedan en el año


//function esMayorDeEdad(fechaNacimiento) {
    // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
    // de nacimiento de una persona.
    // Determina si esta persona es mayor de edad (tiene 18 años o más).
    // Devuelve true si lo es, caso contrario, retorna false.
    // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
    // Tu código:
    
//    let fechaActual = Date();
//    let esteAnio = getFullYear(fechaActual);
//    let edad =  esteAnio-anio;
//    if (edad > 18){
//      return true;
 //   }else{
 //     return false;
  //  }
 // }
let fechaNacimiento = new Date ("2010-01-01")
let anio = fechaNacimiento.getFullYear()+1;
  console.log(anio);