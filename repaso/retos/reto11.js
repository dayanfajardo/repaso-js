//* Crea una función que reciba dos números y un operador (+, -, , /) y devuelva el resultado.


const funcionNumero = (num1, num2, operador) => {

    let resultado;

     if ( operador === '+' ) {
        resultado = num1 + num2;    
    } else if ( operador === '-' ) {
        resultado = num1 - num2;
    } else if ( operador === '*' ) {
        resultado = num1 * num2;
    } else if ( operador === '/' ) {
        resultado = num1 !== 0 ? num1 / num2 : 'Error de division por cero'
    }

    return resultado;
     
}

let resultadoCalcu = funcionNumero( 5, 10, '*' );
document.getElementById('resultado').innerHTML = `El resultado es: ${ resultadoCalcu }`;