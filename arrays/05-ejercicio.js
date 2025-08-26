//* Crea una función llamada contarMayoresDeEdad que reciba un array de edades.
//* La función debe recorrer el array y:

// Contar cuántas personas son mayores de edad (>= 18).
// Contar cuántas son menores de edad (< 18).

const contarMayoresDeEdad = (edades = []) => {

    let mayores = 0;
    let menores = 0;

    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            mayores ++;
        } else {
            menores ++;
        }       
    }

    return `Mayores de edad: ${ mayores } - Menores de edad: ${ menores }`;

}

let resultado = contarMayoresDeEdad([25,20,10,10,11,35]);

document.getElementById('resultado').innerHTML = resultado;
