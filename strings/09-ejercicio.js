/**
 * 
 * @param {String} cadena String
 */

const invertirCadena = ( cadena ) => {

    let separacion = cadena.split("") //separacion
        .reverse() // me da las letras al reves
        .join(""); //quita las comas

    return separacion;
}

let resultado = invertirCadena("hola");

document.getElementById('resultado').innerHTML = `la cadena invertida es: ${ resultado }`;