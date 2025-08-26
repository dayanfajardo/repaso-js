
// Crea una función llamada esPrimo que reciba un número y devuelva true si es primo
// o false en caso contrario.

/**
 * 
 * @param {Number} num number
 */

const esPrimo = (num) => {

    // 0 y 1 no son primos
    if (num <= 1) return false;

    // Recorremos desde 2 hasta la raíz cuadrada de num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Si es divisible por otro número, no es primo
        }
    }

    return true; // Si no encontró divisores, es primo
}

let resultado = esPrimo(25);
document.getElementById('resultado').innerHTML = resultado;