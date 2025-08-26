// Función auxiliar para verificar si un número es primo
const esPrimo = (num) => {
    if (num <= 1) return false; // 0, 1 y negativos no son primos

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};


// Función que recibe un array y separa primos y no primos
const esPrimosEnArray = (numeros = []) => {
    let primos = [];
    let noPrimos = [];

    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            primos.push(numeros[i]); // si es primo lo guardamos en el array
        } else {
            noPrimos.push(numeros[i]); // si no es primo va acá
        }
    }

    return {
        primos,
        noPrimos
    };
}


let resultado = esPrimosEnArray([1, 3, 5, 7, 77, 33, 8, 9]);

document.getElementById('resultado').innerHTML = 
    `Primos: ${resultado.primos} <br> No primos: ${resultado.noPrimos}`;
