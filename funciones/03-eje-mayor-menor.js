// Crea una función llamada esMayorDeEdad que reciba un número (edad).
// Si la edad es mayor o igual a 18, devuelve "Mayor de edad".
// Si no, devuelve "Menor de edad".

const edades = (edad) => {

    return edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';

}


let resultado = edades(30);

document.getElementById('resultado').innerHTML = resultado;


