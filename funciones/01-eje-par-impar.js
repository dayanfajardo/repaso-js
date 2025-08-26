// Crea una función que reciba un número y devuelva "Par" si es par o "Impar" si es impar.

const paresImpares = (num) => {

    // if ( num % 2 == 0 ) {
    //     return 'es par';
    // } else {
    //     return 'Es impar';
    // }

    //si num es divisible por 2 es par!
    return num % 2 == 0 ? 'Es par' : 'Es impar';

    
}

let resultado = paresImpares(10);



document.getElementById('resultado').innerHTML = resultado;