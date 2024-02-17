function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a <= b){
    let multiplo = 1
    for(let i=a; i<=b ; i++){
      multiplo = multiplo * i;
    }
    return multiplo
  }
  if (b < a){
    let multi = 1
    for(let i=b; i<=a ; i++){
      multi = multi * i;
    }
  }
}

module.exports = productoEntreNúmeros;