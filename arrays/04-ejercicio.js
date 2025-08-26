//* Crea una función llamada contarMayoresDeEdad que reciba un array de edades.
//* La función debe recorrer el array y:

// Contar cuántas personas son mayores de edad (>= 18).
// Contar cuántas son menores de edad (< 18).


const contarMayoresDeEdad = (edades = []) => {
    
    let mayores = 0; // contador de mayores
    let menores = 0; // contador de menores

    // Recorremos el array
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) { //si la edad en la posición i es mayor o igual a 18
            mayores++; // sumamos 1 al contador de mayores
        } else {
            menores++; // de lo contrario, sumamos 1 al contador de menores
        }
    }

   
    return `Mayores de edad: ${mayores} - Menores de edad: ${menores}`;
}

let resultado = contarMayoresDeEdad([1, 15, 20, 25, 10]);

document.getElementById('resultado').innerHTML = resultado;
