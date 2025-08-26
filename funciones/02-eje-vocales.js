
//* "Crea una función que reciba una cadena y devuelva cuántas vocales tiene"?

const vocalesCadena = ( cadena ) => {

    let vocales = 'Repreheanederitu';
    // Inicializamos un contador para llevar la cuenta de cuántas vocales encontramos
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        // Si la letra actual (cadena[i]) está dentro del string "vocales"...
        if( vocales.includes(cadena[i])) {
            contador ++;
        }
        
    }
    return contador;
}

let resultado = vocalesCadena('Holaaaamunidpoie');

document.getElementById('resultado').innerHTML = ` La cadena tiene: ${resultado} vocales `;

