// Reto 7: Cuenta regresiva para el año nuevo;
// Usa un for o while para contar desde 10 hasta 1 y al final imprimir “¡Feliz Año Nuevo!”



let cuentaRegresiva = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Recorre el array desde el final (índice 9) hasta el inicio (índice 0)
for (let i = cuentaRegresiva.length - 1; i >= 0; i--) {
  console.log(cuentaRegresiva[i]);
}
console.log("¡Feliz Año Nuevo!");